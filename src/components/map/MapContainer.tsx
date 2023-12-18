import { googleMapsKey } from "../../utility/env";
import { useEffect, useState } from "react";
import axios from "axios";

import loadingStyle from "../../styles/LoadingCard.module.css";
import encode from "../../utility/pluscodes/encode";

interface MapContainerProps {
  data: any;
}
const MapContainer = ({ data }: MapContainerProps) => {
  const [adress, setAdress] = useState<any>();
  // const [isLoading, setIsLoading] = useState(true);
  const [addressSource, setAddressSource] = useState(
    `https://www.google.com/maps/embed/v1/place?q=${encode({
      latitude: 31.486015360062577,
      longitude: 74.43955625218602,
    })?.replace(
      "+",
      "%2B"
    )}&center=${`${31.486015360062577},${74.43955625218602}`}&key=${googleMapsKey}&zoom=18`
  );

  const getCitiesGeocoding = async () => {
    try {
      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${data?.city.city_name}&key=${googleMapsKey}`
      );
      const { lat, lng } = res.data.results[0].geometry.location;
      return { lat, lng };
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const byCity = async () => {
      const { lat, lng }: any = await getCitiesGeocoding();
      setAddressSource(
        `https://www.google.com/maps/embed/v1/place?q=${encode({
          latitude: lat,
          longitude: lng,
        })?.replace(
          "+",
          "%2B"
        )}&center=${`${lat},${lng}`}&key=${googleMapsKey}&zoom=18`
      );
    };
    if (Math.round(data?.longitude) === 0 && Math.round(data?.latitude) === 0) {
      byCity();
    } else {
      setAddressSource(
        `https://www.google.com/maps/embed/v1/place?q=${encode({
          latitude: data?.latitude,
          longitude: data?.longitude,
        })?.replace(
          "+",
          "%2B"
        )}&center=${`${data?.latitude},${data?.longitude}`}&key=${googleMapsKey}&zoom=18`
      );
    }
  }, [data, googleMapsKey, addressSource]);
  return (
    <iframe
      src={addressSource}
      style={{
        border: "0",
        height: "30vh",
        width: "100%",
        minHeight: "200px",
        minWidth: "200px",
      }}
      loading="lazy"
    ></iframe>
  );
};

export default MapContainer;
