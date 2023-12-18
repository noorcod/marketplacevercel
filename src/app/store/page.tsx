import dynamic from "next/dynamic";
import React from "react";
import ScreenLoader from "../../components/ScreenLoader";

const StoreList = dynamic(() => import("./StoreList"), {
  loading: () => (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="justify-content-center d-flex align-items-center"
    >
      <ScreenLoader />
    </div>
  ),
});

const page = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="row p-2">
          <StoreList />
        </div>
      </div>
    </div>
  );
};

export default page;
