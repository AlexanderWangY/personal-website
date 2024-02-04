import React from "react";

const TerminalResponse = ({ text }) => {
  return (
    <div style={styles.terminalLineContainer}>
      <span style={styles.terminalTypedText}>{String(text)}</span>
    </div>
  );
};

const styles = {
  terminalLineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "50%",
    marginTop: "3px",
    whiteSpace: "pre-line",
  },
  terminalText: {
    marginRight: "10px",
    fontSize: `1.3em`,
  },
  terminalTypedText: {
    color: "#4AF626",
    marginRight: "10px",
    fontSize: `1.3em`,
  },
};

export default TerminalResponse;
