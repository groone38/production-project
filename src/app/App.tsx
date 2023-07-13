import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useTheme } from "./provider/theme/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPageAsync } from "pages/AboutPage";
import { MainPageAsync } from "pages/MainPage";
import { AppRouter } from "./provider/router";

const App = () => {
  const { theme, toggle } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggle}>Toggle</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;
