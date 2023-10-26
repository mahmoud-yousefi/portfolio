import {useState} from "react";
import {Typography} from "@mui/material";
import avatar from "../../assets/avatar.jpg";
import {RandomReveal} from "react-random-reveal";
import {alphabetPersian} from "../../constants/alphabetPersian";
import ThemeActionButton from "../ThemeActionButton";
import {CustomAvatar} from "../common";
import SocialMediaIcons from "../SocialMediaIcons";

const SidebarHeader = () => {
    const [start, setStart] = useState(false);
    return (
        <>
            <ThemeActionButton/>
            <CustomAvatar
                avatar={avatar}
                size={200}
                fallback={"MY"}
            />
            <Typography variant={"h6"} color={"#FD4494"} sx={{textAlign: "center"}}>
                <Typography variant={"caption"} color={"tomato"}>{" {{ "}</Typography>
                <RandomReveal isPlaying characters={"محمود یوسفی"} characterSet={alphabetPersian} duration={4}
                              onComplete={() => setStart(true)}
                />
                <Typography variant={"caption"} color={"tomato"}>{" }} "}</Typography>
            </Typography>
            {start && (
                <Typography variant={"caption"} color={"gray"} sx={{textAlign: "center"}}>
                    <Typography variant={"caption"} color={"tomato"}>[[{" "}</Typography>
                    <RandomReveal isPlaying characters={"توسعه دهنده React"} duration={4} characterSet={alphabetPersian}/>
                    <Typography variant={"caption"} color={"tomato"}>{" "}]]</Typography>
                </Typography>
            )}
            <SocialMediaIcons/>
        </>
    )
}

export default SidebarHeader;