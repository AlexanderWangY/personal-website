import TerminalLine from "./TerminalLine";
import TerminalInput from "./TerminalInput";
import TerminalResponse from "./TerminalResponse";
import { useState } from "react";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const App = () => {
  const [data, setData] = useState([
    {
      text: "Welcome to Alexander Wang's Portfolio Website!",
      type: "response",
    },
    {
      text: "Type 'help' for a list of commands.",
      type: "response",
    },
  ]);
  const [text, setText] = useState("");

  const submitText = () => {
    const command = text.trim();
    let response = [{ text: command, type: "user" }];
    if (command === "clear") {
      setData([]);
      setText("");
      return;
    } else if (command === "help") {
      response.push({
        text: "ALEX bash, version 0.0.1(1)-release (x86_64-pc-linux-gnu)\n\nThese shell commands are defined internally.  Type `help' to see this list.\nType 'help {name}' to find out more about that command.\n\nhelp\nclear\ngit\nlinkedin\ncontact",
        type: "response",
      });
    } else if (command === "git") {
      response.push({
        text: "Redirecting to my GitHub...",
        type: "response",
      });
    } else {
      response.push({ text: "Command not found", type: "response" });
    }

    setData((prevData) => [...prevData, ...response]);

    if (command === "git") {
      sleep(1000).then(() => {
        window.open("https://github.com/AlexanderWangY", "_blank");
      });
    }

    setText("");
  };
  return (
    <div>
      <div style={styles.mainContainer}>
        <div style={styles.contentContainer}>
          {data.map(({ text, type }, index) =>
            type === "user" ? (
              <TerminalLine key={index} text={text} />
            ) : (
              <TerminalResponse key={index} text={text} />
            )
          )}
          <TerminalInput
            text={text}
            onChangeText={(e) => setText(e.target.value)}
            onSubmit={submitText}
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
