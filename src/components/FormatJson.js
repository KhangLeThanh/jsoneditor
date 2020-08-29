import React from "react";
import { JSONViewer } from "react-json-editor-viewer";

export default function FormatJson({ data }) {
  const styles = {
    label: {
        color: "#000",
        marginTop: 4,
    },
    value: {
      marginLeft: 10,
    },
    root: {
      fontSize: 14,
      fontFamily: "monospace",
      textAlign: "left",
      paddingTop:'2%'
    },
    builtin: {
      color: "#00f",
    },
    text: {
      color: "#077",
    },
    number: {
      color: "#a0a",
    },
    property: {
      color: "#c00",
    },
    collapseIcon: {
      cursor: "pointer",
    },
  };
  return (
    <div>
      <JSONViewer data={data} styles={styles} />
    </div>
  );
}
