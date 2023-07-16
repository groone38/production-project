import React, { Suspense } from "react";
import { useTheme } from "./provider/theme/useTheme";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./provider/router";
import { NavBar } from "widgets/NavBar";
import SideBar from "widgets/SideBar/ui/SadeBar/SideBar";

const App = () => {
  const { theme, toggle } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
