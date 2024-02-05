import { useState, useRef, useEffect } from "react";

const TerminalInput = ({ directory, text, onChangeText, onSubmit, lastCommand }) => {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    } else if (e.key === "ArrowUp") {
      onChangeText({ target: { value: lastCommand } });
    }
  };

  return (
    <div style={styles.terminalLineContainer}>
      <span style={styles.terminalText}>
        alexanderwang@alexander-Lenovo-YOGA-700: 
        <span style={{ color: "#007aa5" }}>{directory}</span>$
      </span>
      <input
        autoComplete="off"
        autoCorrect="off"
        autoFocus={true}
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
