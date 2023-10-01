import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";

interface IStoreProvider {
  children?: ReactNode;
  initialState?: StateSchema;
}

const StoreProvider = ({ children, initialState }: IStoreProvider) => {
  const store = createReduxStore(initialState);
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
