import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/provider/theme/useTheme";
import { Theme } from "app/provider/theme/ThemeContext";
import Button, { ThemeButton } from "shared/ui/Button/Button";
import Light from "../../../shared/assets/icons/theme-light.svg";
import Dark from "../../../shared/assets/icons/theme-dark.svg";
import cls from "./ThemeSwicher.module.scss";

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
