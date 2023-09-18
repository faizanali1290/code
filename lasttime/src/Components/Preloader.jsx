import React from "react";

const Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img src="./assest/images/preloader.jpg" width={"260px"} alt="loader" />
    </div>
  );
};

export default Preloader;
