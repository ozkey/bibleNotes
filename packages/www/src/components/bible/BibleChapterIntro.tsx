import React, { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const BibleChapterIntro = ({
  children,
  color = "black",
}): JSX.Element => {
  const [bookChapter, setBookChapter] = useState(null);
  useEffect(() => {
    const getChapters = async (): Promise<string | null> => {
      try {
        const bookChapterUrl = useBaseUrl(
          "static/books/chapter/bookChapters1.json",
        );
        const response = await fetch(bookChapterUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const bookChapter = await response.json();
        setBookChapter(bookChapter);
      } catch (e) {
        console.error(e);
        return null;
      }
    };
    getChapters();
  }, []);

  return (
    <span
      style={{
        borderRadius: "2px",
        color: color,
        padding: "0.2rem",
      }}
    >
      {children}
      {bookChapter && <div>{JSON.stringify(bookChapter)}</div>}
    </span>
  );
};
