import React, { ReactNode } from "react";
import "./Loader.scss";
import { classNames } from "shared/lib/classNames/classNames";

interface PageLoaderProps {
  className?: string;
}

const Loader = ({ className }: PageLoaderProps) => (
  <div className={classNames("lds-ring", {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Loader;
