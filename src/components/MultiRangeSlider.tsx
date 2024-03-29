import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const MultiRangeSlider = ({ min, max, minValue, maxValue, onChange }:any) => {
  const [minVal, setMinVal] = useState(Number(min));
  const [maxVal, setMaxVal] = useState(Number(max));
  const minValRef = useRef<any>(null);
  const maxValRef = useRef<any>(null);
  const range = useRef<any>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value:any) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );
  useEffect(() => {
    setMinVal(minValue);
    setMaxVal(maxValue);
  }, [minValue, maxValue]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current ) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef?.current?.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `Rs. {minPercent}%`;
        range.current.style.width = `Rs. {maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `Rs. {maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal,]);

  return (
    <div className="container mt-4 mb-2">
      <div className="d-flex mb-0 fs-14 justify-content-center">
        {" "}
         <p className="secondary-link fw-500 mx-2"> Rs. {minVal?.toLocaleString("en-IN")}</p> to{" "}
        <p className="secondary-link fw-500 mx-2"> Rs. {maxVal?.toLocaleString("en-IN")}</p>
      </div>
      <datalist id="steplist">
        <option>0</option>
        <option>25</option>
        <option>50</option>
        <option>75</option>
        <option>100</option>
      </datalist>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={classnames("thumb thumb--zindex-3", {
          "thumb--zindex-5": minVal > max - 100,
        })}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
      </div>
    </div>
  );
};

export default MultiRangeSlider;
