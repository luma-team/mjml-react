import React, { useContext } from "react";

export const MjmlRenderingContext = React.createContext<{
  mode: "html" | "text";
}>({ mode: "html" });

export const renderTo = ({
  html,
  text,
}: {
  html: React.ReactNode;
  text: React.ReactNode;
}) => {
  const { mode } = useContext(MjmlRenderingContext);

  if (mode === "text") {
    return <>{text}</>;
  }

  return <>{html}</>;
};
