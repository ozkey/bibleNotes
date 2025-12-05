import React, { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const BibleText = ({
  children,
  color = "black",
  verse = 0,
}): JSX.Element => {
  return (
    <>
      <p
        style={{
          borderRadius: "2px",
          color: color,
          padding: "0.0rem",
          margin: "0.5rem",
        }}
      >
        <a style={{ position: "relative", top: -100 }} id={`${verse}`} />
        <span style={{ fontWeight: "bold", fontSize: "0.5rem" }}>
          {verse}
        </span>{" "}
        {children}
      </p>
    </>
  );
};
