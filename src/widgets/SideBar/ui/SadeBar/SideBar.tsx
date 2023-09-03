import React, { ReactNode, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { ThemeSwicher } from "widgets/ThemeSwicher";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";
import cls from "./SideBar.module.scss";
import Button from "shared/ui/Button/Button";

interface SideBarProps {
  className?: string;
  children?: ReactNode;
}
// Остановился на тестах в самом начале 20 урок
const SideBar = ({ className, children }: SideBarProps) => {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div
      className={classNames(cls.SideBar, { [cls.open]: open }, [className])}
      data-testid="sidebar"
    >
      <Button data-testid="sidebar-toggle" type="button" onClick={onToggle}>
        toggle
      </Button>
      <div className={cls.switchers}>
        <ThemeSwicher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export default SideBar;
