import React from "react";
import { renderTo } from "./mjml-rendering-context";
import { BorderProps, ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlSpacer = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlSpacerProps & BorderProps & PaddingProps & ClassNameProps
>) => {
  return renderTo({
    html: React.createElement("mj-spacer", handleMjmlProps(rest), null),
    text: <br />,
  });
};

// mj-spacer
export interface MjmlSpacerProps {
  height?: string | number | undefined;
  width?: string | number | undefined;
  containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
  verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
}
