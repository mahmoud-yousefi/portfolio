import {useState, useEffect} from "react";
import {Skill} from "./index";
import {devSkills} from "../../constants/skills";

const Skills = () => {
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [javascript, setJavascript] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    const [git, setGit] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setHtml((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 86);
            });

            setCss((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 78);
            });

            setJavascript((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 72);
            });

            setReactJs((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 75);
            });

            setNodeJs((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 30);
            });

            setGit((oldProgress) => {
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 62);
            });
        }, 200);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } = devSkills;

    return (
        <>
            <Skill name={htmlSkill.name} value={html} color={htmlSkill.color} icon={htmlSkill.icon} />
            <Skill name={cssSkill.name} value={css} color={cssSkill.color} icon={cssSkill.icon} />
            <Skill name={jsSkill.name} value={javascript} color={jsSkill.color} icon={jsSkill.icon} />
            <Skill name={reactSkill.name} value={reactJs} color={reactSkill.color} icon={reactSkill.icon} />
            <Skill name={nodeSkill.name} value={nodeJs} color={nodeSkill.color} icon={nodeSkill.icon} />
            <Skill name={gitSkill.name} value={git} color={gitSkill.color} icon={gitSkill.icon} />
        </>
    )
}

export default Skills;