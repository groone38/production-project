// declare module "*.module.css";
// declare module "*.module.scss";

declare module "*.scss" {
  interface IClassName {
    [className: string]: string;
  }
  const className: IClassName;
  export = className;
}

declare module "*.svg" {
  import React from "react";

  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module "*.png" {
  const contet: any;
  export default contet;
}

declare const __IS_DEV__: boolean;
