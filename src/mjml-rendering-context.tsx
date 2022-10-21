import React, { useContext } from "react";

export type MjmlRenderingMode = "mjml" | "textHtml";

export const MjmlRenderingContext = React.createContext<{
  mode: MjmlRenderingMode;
}>({ mode: "mjml" });

export const renderTo = ({
  mjml,
  textHtml,
}: {
  mjml: React.ReactNode;
  textHtml: React.ReactNode;
}) => {
  const { mode } = useContext(MjmlRenderingContext);

  if (mode === "textHtml") {
    return <>{textHtml}</>;
  }

  return <>{mjml}</>;
};
