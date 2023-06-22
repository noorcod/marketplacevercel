import React, { useEffect, useMemo, useState } from "react";
import { Pagination } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import style from "../styles/PaginationBar.module.css";


interface changePage{ fn: (i: any) => void}
const PaginationBar = ({ noOfPages, currentPage, changePage }:any) => {
  const [pages, setPages] = useState<any>([]);
  //   const navigate = useNavigate();
  const changePageHandle = (i:any) => {
    changePage(i);
  };

  const createPaginationItem = (i:any) => {
    return (
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => changePageHandle(i)}
      >
        {i}
      </Pagination.Item>
    );
  };

  useEffect(() => {
    let row = [];
    if (noOfPages < 10) {
      for (var i = 1; i <= noOfPages; i++) {
        row.push(createPaginationItem(i));
      }
    } else {
      row.push(createPaginationItem(1));
      if (currentPage - 2 > 1) {
        row.push(<Pagination.Ellipsis />);
      }
      let midpoint = currentPage - 1;
      if (midpoint <= 1) {
        midpoint = 2;
      } else if (midpoint + 4 >= noOfPages) {
        midpoint = noOfPages - 5;
      }
      for (let i = midpoint; i <= midpoint + 4; i++) {
        row.push(createPaginationItem(i));
      }
      if (currentPage + 4 < noOfPages) {
        row.push(<Pagination.Ellipsis />);
      }
      row.push(createPaginationItem(noOfPages));
    }
    setPages(row);
  }, [noOfPages, currentPage]);

  return (
    <>
      <Pagination
        className={`mb-5 justify-content-center align-items-center mt-5 ${style.paginationItems} `}
      >
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => changePageHandle(currentPage - 1)}
        />
        {pages}
        <Pagination.Next
          disabled={currentPage === noOfPages}
          onClick={() => changePageHandle(currentPage + 1)}
        />
      </Pagination>
    </>
  );
};

export default PaginationBar;
