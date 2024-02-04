import { useState } from "react";

const TerminalInput = ({ text, onChangeText, onSubmit }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div style={styles.terminalLineContainer}>
      <span style={styles.terminalText}>
        alexanderwang@alexander-Lenovo-YOGA-700:
        <span style={{ color: "blue" }}>~</span>$
      </span>
      <input
        onChange={onChangeText}
        value={text}
        style={styles.terminalInput}
        onKeyDown={handleKeyPress}
        spellCheck="false"
      ></input>
    </div>
  );
};

const styles = {
  terminalLineContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: "3px",
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
  terminalInput: {
    color: "#4AF626",
    fontSize: `1.3em`,
    backgroundColor: "black",
    padding: "0",
    border: "none",
    outline: "none",
    fontFamily: "inherit",
    flex: 1,
  },
};

export default TerminalInput;
