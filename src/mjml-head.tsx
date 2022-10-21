import React from "react";
import { renderMjml } from "./mjml-rendering-context";

import { handleMjmlProps } from "./utils";

export const MjmlHead = ({
  children,
  ...rest
}: React.PropsWithChildren<{}>) => {
  return renderMjml({
    html: React.createElement("mj-head", handleMjmlProps(rest), children),
    text: null,
  });
};
