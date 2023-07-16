import React, { FC, ReactNode } from "react";
import cls from "./AppLink.module.scss";
import { classNames } from "./../../lib/classNames/classNames";
import { Link, LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  children?: ReactNode;
  theme?: AppLinkTheme;
}

const AppLink: FC<AppLinkProps> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
}) => {
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
    >
      {children}
    </Link>
  );
};

export default AppLink;
