import Pdf from "./Resume.pdf";
import oscChat from "./OSC-Proximity-Chat.txt"
import mechEnvision from "./MechEnvision.txt"
import spotifyRecommender from "./SpotifyRecommender.txt"
import geoMatrix from "./GeoMatrix.txt"
import javaWordle from "./JavaWordle.txt"

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const commandHandler = (command, setData, setText, directory, setDirectory, easterEgg, setEasterEgg) => {
  const response = [{ text: command, type: "user", directory: directory }];

  const input = command.split(" ");

  if (input[0] === "help") {
    if (input[1] === undefined) {
        response.push({
            text: "ALEX bash, version 0.0.1(1)-release (x86_64-pc-linux-gnu)\n\nSystem:\n-Architecture: x86_64\n-OS: Ubuntu 20.04 Focal Fossa\n\nThis is the help page for custom bash shell ALEX\n\nThese shell commands are defined internally.  Type `help' to see this list.\n\n-- NAVIGATION COMMANDS --\ncd\nls\npwd\nopen\n\n-- MISC. COMMANDS --\nwhoami\nskills\neducation\nexperience\nresume\ngithub\nlinkedin\nemail\n\nType 'help {command_name}' to find out how to use each command.",
            type: "response",
            directory: directory,
          });
    } else {
        switch (input[1]) {
            case "cd":
                response.push({ text: "cd: cd [directory] or [..]\nChange the shell working directory. Use 'cd ..' to move back a directory.", type: "response", directory: directory });
                break;
            case "ls":
                response.push({ text: "ls: ls\nLists current directory contents.", type: "response", directory: directory });
                break;
            case "pwd":
                response.push({ text: "pwd: pwd\nPrints the name of the current working directory.", type: "response", directory: directory });
                break;
            case "open":
                response.push({ text: "open: open [file]\nOpens a file. Use this on .txt files.", type: "response", directory: directory });
                break;
            case "whoami":
                response.push({ text: "whoami: whoami\nPrints out information about me (Alexander Wang).", type: "response", directory: directory });
                break;
            case "skills":
                response.push({ text: "skills: skills\nPrints a list of my technical skills!", type: "response", directory: directory });
                break;
            case "education":
                response.push({ text: "education: education\nPrints out my education!", type: "response", directory: directory });
                break;
            case "experience":
                response.push({ text: "experience: experience\nPrint a list of my work experience(s).", type: "response", directory: directory });
                break;
            case "resume":
                response.push({ text: "resume: resume\nOpens my resume.", type: "response", directory: directory });
                break;
            case "github":
                response.push({ text: "github: github\nRedirects you to my GitHub.", type: "response", directory: directory });
                break;
            case "linkedin":
                response.push({ text: "linkedin: linkedin\nRedirects you to my LinkedIn.", type: "response", directory: directory });
                break;
            case "email":
                response.push({ text: "email: email\nPrints my email address so you can contact me", type: "response", directory: directory });
                break;
            case "me":
                response.push({ text: "Can't help you there :/", type: "response", directory: directory });
                break;
            default:
                response.push({ text: "Command not found! Type 'help' for more commands", type: "response", directory: directory });
                break;
        }
    }
  } else if (input[0] === "clear") {
    setData([]);
    setText("");
    return;
  } else if (input[0] === "cd" && input[1] !== undefined && directory === "~") {
    switch (input[1]) {
        case "projects":
          setDirectory("~/projects");
          break;
        case "blog":
            setDirectory("~/blog");
            break;
        default:
            response.push({ text: "Directory not found! Please try again or use `ls` to find more files and directories", type: "response", directory: directory });
            break;
    }
    
    } else if (input[0] === "cd" && input[1] !== undefined && directory !== "~") {
      switch (input[1]) {
        case "..":
          setDirectory("~");
          break;
        default:
            response.push({ text: "Incorrect usage of 'cd'. Type 'help cd' to find out more.", type: "response", directory: directory });
            break;
      }

    } else if (input[0] === "ls") {
        if (input[1] === undefined) {
        switch (directory) {
            case "~":
                response.push({ text: "projects\nblog", type: "response", directory: directory });
                break;
            case "~/projects":
                response.push({ text: "OSC-Proximity-Chat.txt\nMechEnvision.txt\nSpotifyRecommender.txt\nGeoMatrix.txt\nJavaWordle.txt", type: "response", directory: directory });
                break;
            case "~/blog":
                response.push({ text: "", type: "response", directory: directory });
                break;
            default:
                response.push({ text: "No files or directories here!", type: "response", directory: directory });
                break;
        }
    } else {
        response.push({ text: "Incorrect usage of 'ls'. Use 'help ls' to learn more.", type: "response", directory: directory });
    }
    } else if (input[0] === "pwd") {
        if (input[1] === undefined && directory !== "~") {
            response.push({ text: `/home/alex/${directory.slice(2)}`, type: "response", directory: directory });
        } else if (input[1] === undefined && directory === "~") {
            response.push({ text: `/home/alex`, type: "response", directory: directory });
        } else {
            response.push({ text: "Incorrect usage of 'pwd'. Use 'help pwd' to learn more.", type: "response", directory: directory });
        }
    } else if (input[0] === "whoami") {
        if (input[1] === undefined) {
            response.push({ text: "I'm Alexander Wang!\n\nI'm currently a 1st year computer science student at the University of Florida\n\nI love riding motorcycles, cooking, playing video games, and CODING! 🖥️\n\nI'm definitely working on a cool project right now! Reach out to me if you want to help me!", type: "response", directory: directory });
        } else {
            response.push({ text: "Incorrect usage of 'whoami'. Use 'help whoami' to learn more.", type: "response", directory: directory });
        }
    } else if (input[0] === "skills") {
        if (input[1] === undefined) {
            response.push({ text: "I'm a full-stack web/mobile and robotics developer with experience in JavaScript/Typescript, React, React Native, Firebase, Python, Java, and C++.\n\nI also work on computer vision and ML projects with YOLOv8, OpenCV, and a lot of MATH!\n\nI'm currently learning about PyTorch and ROS (Robot Operating System).", type: "response", directory: directory });
        } else {
            response.push({ text: "Incorrect usage of 'skills'. Use 'help skills' to learn more.", type: "response", directory: directory });
        }
    } else if (input[0] === "education") {
        if (input[1] === undefined) {
            response.push({ text: "I'm pursuing my B.S in Computer Science at the University of Florida 🐊\nI am also in the Machine Intelligence Lab as a developer at UF 🤖\nWe make crazy cool autonomous robots!", type: "response", directory: directory });
        } else {
            response.push({ text: "Incorrect usage of 'education'. Use 'help education' to learn more.", type: "response", directory: directory });
        }
    } else if (input[0] === "experience") {
        if (input[1] === undefined) {
            response.push({ text: "Lead Software Developer --------- UF Open Source Club ----------- 2023 -> Present", type: "response", directory: directory });
            response.push({ text: "Software Developer --------------- UF Machine Intelligence Lab ---- 2023 -> Present", type: "response", directory: directory });
            response.push({ text: "Project Lead Developer ---------- UF Verizon Hackathon --------------------- 2023", type: "response", directory: directory });
        } else {
            response.push({ text: "Incorrect usage of 'experience'. Use 'help experience' to learn more.", type: "response", directory: directory });
        }
    } else if (input[0] === "resume") {
        if (input[1] === undefined) {
            response.push({ text: "Opening resume...", type: "response", directory: directory });
            sleep(1000).then(() => {
                window.open(Pdf, "_blank");
            });
        } else {
            response.push({ text: "Incorrect usage of 'resume'. Use 'help resume' to learn more.", type: "response", directory: directory });
        }
    } else if (input[0] === "github") {
        if (input[1] === undefined) {
            response.push({ text: "Redirecting to my GitHub...", type: "response", directory: directory });
            sleep(1000).then(() => {
                window.open("http://github.com/AlexanderWangY", "_blank");});
        } else {
            response.push({ text: "Incorrect usage of 'github'. Use 'help github' to learn more.", type: "response", directory: directory });
        }
    } else if (input[0] === "linkedin") {
        if (input[1] === undefined) {
            response.push({ text: "Redirecting to my LinkedIn...", type: "response", directory: directory });
            sleep(1000).then(() => {
                window.open("https://www.linkedin.com/in/alexanderwangy/", "_blank");});
        } else {
            response.push({ text: "Incorrect usage of 'linkedin'. Use 'help linkedin' to learn more.", type: "response", directory: directory });
        }
    } else if (input[0] === "email") {
        if (input[1] === undefined) {
            response.push({ text: "alexander.yisu.wang@outlook.com", type: "response", directory: directory });
        } else {
            response.push({ text: "Incorrect usage of 'email'. Use 'help email' to learn more.", type: "response", directory: directory });
        
        }
    } else if (input[0] === "open") {
        if (input[1] === undefined) {
            response.push({ text: "Incorrect usage of 'open'. Use 'help open' to learn more.", type: "response", directory: directory });
        } else {
            if (directory === "~/projects") {
                switch (input[1]) {
                    case "OSC-Proximity-Chat.txt":
                        response.push({ text: "Opening file...", type: "response", directory: directory });
                        sleep(1000).then(() => {
                            window.open(oscChat, "_blank");})
                        break;
                    case "MechEnvision.txt":
                        response.push({ text: "Opening file...", type: "response", directory: directory });
                        sleep(1000).then(() => {
                            window.open(mechEnvision, "_blank");})
                        break;
                    case "SpotifyRecommender.txt":
                        response.push({ text: "Opening file...", type: "response", directory: directory });
                        sleep(1000).then(() => {
                            window.open(spotifyRecommender, "_blank");})
                        break;
                    case "GeoMatrix.txt":
                        response.push({ text: "Opening file...", type: "response", directory: directory });
                        sleep(1000).then(() => {
                            window.open(geoMatrix, "_blank");})
                        break;
                    case "JavaWordle.txt":
                        response.push({ text: "Opening file...", type: "response", directory: directory });
                        sleep(1000).then(() => {
                            window.open(javaWordle, "_blank");})
                        break;
                    default:
                        response.push({ text: "File not found! Please try again or use `ls` to find more files and directories", type: "response", directory: directory });
                        break;
                };
            }
        }
    } else if (command === "how are you?" || command === "How are you?") {
        response.push({ text: "I'm a computer program, I don't have feelings...", type: "response", directory: directory });
        response.push({ text: "But I'm doing great! Thanks for asking!", type: "response", directory: directory });
        setEasterEgg(easterEgg + 1);
    } else if (input[0] === "games") {
        response.push({ text: "I'm a computer program, I don't play games...", type: "response", directory: directory });
        response.push({ text: "But I do! - Alex", type: "response", directory: directory });
        response.push({ text: "I'm Peak Plat in Valorant and I used to stream Minecraft :)", type: "response", directory: directory });
        setEasterEgg(easterEgg + 1);
    } else if (input[0] === "pookie") {
        response.push({ text: "I love my pookie, P_Money69! ❤️❤️❤️", type: "response", directory: directory });
        setEasterEgg(easterEgg + 1);
    } else if (command === "easter egg" || command === "Easter egg" || command === "Easter Egg") {
        
        response.push({ text: `You've found ${easterEgg}/5 easter eggs!`, type: "response", directory: directory });
    } else if (input[0] === "touch" && directory === "~/projects") {
        response.push({ text: "Woah there! You don't have the necessary permissions to add/edit files.", type: "response", directory: directory });
        response.push({ text: "But you can always help out on the current projects!", type: "response", directory: directory });
        setEasterEgg(easterEgg + 1);
    } else if (input[0] === "sudo" && directory === "~/projects" && input[1] === "touch") {
        response.push({ text: "Dude. Not cool! I worked hard to put together this 'file' structure.", type: "response", directory: directory });
        response.push({ text: "Please do nottttt try to edit it!", type: "response", directory: directory });
        setEasterEgg(easterEgg + 1);
    } else {
        response.push({ text: "Command not found! Type 'help' for more commands", type: "response", directory: directory });
    }

    setData((prevData) => [...prevData, ...response]);

};