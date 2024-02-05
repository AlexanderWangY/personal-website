import TerminalLine from "./TerminalLine";
import TerminalInput from "./TerminalInput";
import TerminalResponse from "./TerminalResponse";
import { useState } from "react";
import { commandHandler } from "./actions/command";

export const App = () => {
  const [data, setData] = useState([
    {
      text: "Welcome to Alexander Wang's Portfolio Website!",
      type: "response",
    },
    {
      text: "I'm glad you're here! Take a look around using commands.",
      type: "response",
    },
    {
      text: "Type 'help' for a list of commands.",
      type: "response",
    },
  ]);
  const [easterEgg, setEasterEgg] = useState(0);
  const [text, setText] = useState("");
  const [directory, setDirectory] = useState("~");

  const submitText = () => {
    const command = text.trim();
    commandHandler(command, setData, setText, directory, setDirectory, easterEgg, setEasterEgg);

    setText("");
  };
  return (
    <div>
      <div style={styles.mainContainer}>
        <div style={styles.contentContainer}>
          {data.map(({ text, type, directory }, index) =>
            type === "user" ? (
              <TerminalLine key={index} text={text} directory={directory} />
            ) : (
              <TerminalResponse key={index} text={text} />
            )
          )}
          <TerminalInput
            text={text}
            onChangeText={(e) => setText(e.target.value)}
            onSubmit={submitText}
            directory={directory}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    backgroundColor: "black",
    color: "#149414",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "10px",
    paddingBottom: "10px",
    paddingLeft: "7px",
    paddingRight: "10px",
    // border: "1px solid #149414",
  },
};

export default App;
