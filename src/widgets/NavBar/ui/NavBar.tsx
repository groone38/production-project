import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./NavBar.module.scss";

interface NavBarProps {
  className?: string;
}

const NavBar = ({ className }: NavBarProps) => (
  <div className={classNames(cls.navbar, {}, [className])}>
    <div className={cls.links}>
      <AppLink
        to="/"
        theme={AppLinkTheme.SECONDARY}
        className={cls.mainLink}
      >
        Main
      </AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
        About
      </AppLink>
    </div>
  </div>
);

export default NavBar;
