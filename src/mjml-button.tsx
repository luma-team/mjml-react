import React from "react";
import { renderMjml } from "./mjml-rendering-context";
import { BorderProps, ClassNameProps, HrefProps, PaddingProps } from "./types";

import { handleMjmlProps } from "./utils";

export const MjmlButton = ({
  children,
  ...rest
}: React.PropsWithChildren<
  MjmlButtonProps & PaddingProps & ClassNameProps & HrefProps & BorderProps
>) => {
  return renderMjml({
    html: React.createElement("mj-button", handleMjmlProps(rest), children),
    text: children ? (
      <div>
        {children}: {rest.href}
      </div>
    ) : (
      rest.href
    ),
  });
};

export interface MjmlButtonProps {
  backgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
  containerBackgroundColor?: React.CSSProperties["backgroundColor"] | undefined;
  fontStyle?: string | undefined;
  fontSize?: string | number | undefined;
  fontWeight?: number | undefined;
  fontFamily?: string | undefined;
  color?: React.CSSProperties["color"] | undefined;
  textAlign?: React.CSSProperties["textAlign"] | undefined;
  textDecoration?: string | undefined;
  textTransform?: string | undefined;
  align?: string | undefined;
  verticalAlign?: React.CSSProperties["verticalAlign"] | undefined;
  lineHeight?: string | number | undefined;
  innerPadding?: string | undefined;
  width?: string | number | undefined;
  height?: string | number | undefined;
}
