import React, { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import Loader from "shared/ui/Loader/Loader";
import cls from "./PageLoader.module.scss";

interface PageLoaderProps {
  className?: string;
  children?: ReactNode;
}
// 23
const PageLoader = ({ className, children }: PageLoaderProps) => (
  <div className={classNames(cls.PageLoader, {}, [className])}>
    <Loader />
  </div>
);

export default PageLoader;
