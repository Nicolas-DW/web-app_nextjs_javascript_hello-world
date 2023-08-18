"use client"; // This is a client component
import React, { useEffect } from "react";

const Editor = () => {
  useEffect(() => {
    import("quill").then((QuillModule) => {
      const Quill = QuillModule.default;
      const quill = new Quill("#editor", {
        theme: "snow",
      });
    });
  }, []);

  return <div id="editor" style={{ height: "500px" }}></div>;
};

export default Editor;
