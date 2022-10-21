import React from "react";
import { renderTo } from "./mjml-rendering-context";

import { handleMjmlProps } from "./utils";

export const MjmlHead = ({
  children,
  ...rest
}: React.PropsWithChildren<{}>) => {
  return renderTo({
    html: React.createElement("mj-head", handleMjmlProps(rest), children),
    text: null,
  });
};
