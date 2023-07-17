import React, { ReactNode, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwicher } from 'widgets/ThemeSwicher';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';
import cls from './SideBar.module.scss';

interface SideBarProps {
  className?: string;
  children?: ReactNode;
}

const SideBar = ({ className, children }: SideBarProps) => {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className={classNames(cls.SideBar, { [cls.open]: open }, [className])}>
      <button type="button" onClick={onToggle}>
        toggle
      </button>
      <div className={cls.switchers}>
        <ThemeSwicher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

export default SideBar;
