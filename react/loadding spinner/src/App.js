import logo from "./logo.svg";
import "./App.css";
import Loader from "./loader/Loader";
import React, { Suspense, useEffect, useState, lazy } from "react";

const Components = lazy(() => import("./Components"));
// import Components from './Components';

function App() {
  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <Components />
      </Suspense>
    </>
  );
}

export default App;
