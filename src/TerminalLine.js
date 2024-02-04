export const TerminalLine = ({ text }) => {
  return (
    <div style={styles.terminalLineContainer}>
      <span style={styles.terminalText}>
        alexanderwang@alexander-Lenovo-YOGA-700:
        <span style={{ color: "blue" }}>~</span>$
      </span>
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
};
export default TerminalLine;
