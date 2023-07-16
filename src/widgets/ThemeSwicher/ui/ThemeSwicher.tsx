import React from "react";
import cls from "./ThemeSwicher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/provider/theme/useTheme";
import Light from "../../../shared/assets/icons/theme-light.svg";
import Dark from "../../../shared/assets/icons/theme-dark.svg";
import { Theme } from "app/provider/theme/ThemeContext";
import Button, { ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwicherProps {
  className?: string;
}

const ThemeSwicher = ({ className }: ThemeSwicherProps) => {
  const { theme, toggle } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames(cls.ThemeSwicher, {}, [className])}
    >
      {theme === Theme.DARK ? <Dark /> : <Light />}
    </Button>
  );
};

export default ThemeSwicher;
