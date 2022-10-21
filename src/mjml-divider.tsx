import React from "react";
import { renderTo } from "./mjml-rendering-context";
import { ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlDivider = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlDividerProps & ClassNameProps & PaddingProps
>) => {
  return renderTo({
    html: React.createElement("mj-divider", handleMjmlProps(rest), null),
    text: <hr />,
  });
};

export interface MjmlDividerProps {
  borderColor?: React.CSSProperties["borderColor"] | undefined;
  borderStyle?: React.CSSProperties["borderStyle"] | undefined;
  borderWidth?: string | number | undefined;
  width?: string | number | undefined;
  containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
}
