import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

export enum Theme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ThemeButton;
  themeApp?: Theme;
}

const Button = ({
  className,
  children,
  theme,
  themeApp,
  ...outheProps
}: ButtonProps) => (
  <button
    type="button"
    className={classNames(cls.Button, {}, [
      className,
      cls[theme],
      cls[themeApp],
    ])}
    {...outheProps}
  >
    {children}
  </button>
);

export default Button;
