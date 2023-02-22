import React, { PropsWithChildren } from "react";
import HoogiiProvider from "./HoogiiProvider";

export const Providers = ({ children }: PropsWithChildren<{}>) => {
  return <HoogiiProvider>{children}</HoogiiProvider>;
};

export default Providers;
