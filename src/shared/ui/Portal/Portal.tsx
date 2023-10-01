import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IPortal {
  children: ReactNode;
  element?: HTMLElement;
}

const Portal = ({ children, element = document.body }: IPortal) =>
  createPortal(children, element);

export default Portal;
