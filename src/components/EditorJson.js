import React from "react";
import { JSONEditor } from "react-json-editor-viewer";

export default function FormatJson({ json }) {
  const styles = {
    root: {
      fontSize: 14,
      margin: 5,
      fontFamily: "monospace",
      lineHeight: 1.25,
      paddingTop: "2%",
    },
    label: {
      color: "rgb(204, 0, 0)",
      fontWeight: "600",
      marginBottom: "10px",
    },
    value: {
      marginLeft: 10,
      marginBottom: "15px",
    },
    row: {
      display: "flex",
    },
    withChildrenLabel: {
      color: "#000",
    },
    select: {
      borderRadius: 3,
      borderColor: "grey",
      backgroundColor: "#fff",
      color: "#000",
      fontWeight: "600",
    },
    input: {
      borderRadius: 3,
      border: "1px solid #272822",
      padding: 2,
      fontFamily: "monospace",
      fontSize: 12,
      backgroundColor: "#fff",
      color: "#000",
      width: "200%",
    },
    builtin: {
      color: "#00f",
    },
  };
  const onJsonChange = (key, value, parent, data) => {
    localStorage.setItem("myJsonInLocalStorage", JSON.stringify(data));
  };
  return (
    <div>
      <JSONEditor data={json} onChange={onJsonChange} styles={styles} />{" "}
    </div>
  );
}
