import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ThemeButton;
}

const Button = ({
  className, children, theme, ...outheProps
}: ButtonProps) => (
  <button
    type="button"
    className={classNames(cls.Button, {}, [className, cls[theme]])}
    {...outheProps}
  >
    {children}
  </button>
);

export default Button;
