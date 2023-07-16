import React, { ButtonHTMLAttributes, ReactNode } from "react";
import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: ReactNode;
  theme?: ThemeButton;
}

const Button = ({ className, children, theme, ...outheProps }: ButtonProps) => {
  return (
    <button
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      {...outheProps}
    >
      {children}
    </button>
  );
};

export default Button;
