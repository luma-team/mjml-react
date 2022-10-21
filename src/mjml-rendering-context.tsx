import React from "react";
import { createUseAppContext } from "./utils";

export const MjmlRenderingContext = React.createContext<{
  mode: "html" | "text";
}>({ mode: "html" });

export const useMjmlRenderingContext = createUseAppContext(
  MjmlRenderingContext,
  "MjmlRenderingContext"
);

export const renderMjml = <Props,>({
  html,
  text,
}: {
  html: React.ReactNode;
  text: React.ReactNode;
}) => {
  const { mode } = useMjmlRenderingContext();
  if (mode === "text") {
    return <>{text}</>;
  }
  return <>{html}</>;
};
