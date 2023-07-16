import React from "react";
import cls from "./NavBar.module.scss";
import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwicher } from "widgets/ThemeSwicher";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={"/"}
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
        >
          Main
        </AppLink>
        <AppLink to={"/about"} theme={AppLinkTheme.SECONDARY}>
          About
        </AppLink>
      </div>
    </div>
  );
};

export default NavBar;
