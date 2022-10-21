import React from "react";
import { renderMjml } from "./mjml-rendering-context";
import { ClassNameProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlDivider = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlDividerProps & ClassNameProps & PaddingProps
>) => {
  return renderMjml({
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
