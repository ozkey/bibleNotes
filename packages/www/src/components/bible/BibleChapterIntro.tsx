import React, { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const BibleChapterIntro = ({
  children,
  color = "black",
}): JSX.Element => {
  return (
    <span
      style={{
        borderRadius: "2px",
        color: color,
        padding: "0.2rem",
      }}
    >
      {children}
    </span>
  );
};
