import {useEffect, useRef, useCallback, useState} from "react";
import {Box, Typography} from "@mui/material";
import Typed from "typed.js";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import bg02 from "../assets/bg02.jpeg";
import {links} from "../constants/particles";
import TextTransition, {presets} from "react-text-transition";
import {Helmet} from "react-helmet-async";

const Home = ({helmetTitle}) => {
    const [index, setIndex] = useState(0);
    const nameEl = useRef(null);
    // const infoEl = useRef(null);

    const strings = [
        "یک توسعه دهنده ریکت هستم",
        "یک علاقه مند به حوزه برنامه نویسی هستم",
        "از کسب تجربه های جدید لذت می برم",
        "یک فریلنسر هستم"
    ];

    useEffect(() => {
        const typedName = new Typed(nameEl.current, {
            strings: [" محمود یوسفی "],
            typeSpeed: 110,
            backSpeed: 80,
            backDelay: 50,
            showCursor: false
        });

        // const typedInfo = new Typed(infoEl.current, {
        //     strings,
        //     startDelay: 1500,
        //     typeSpeed: 80,
        //     backSpeed: 50,
        //     backDelay: 50,
        //     loop: true,
        //     showCursor: false
        // });

        const stringsTransition = setInterval(() => {
            setIndex(index => index + 1);
        }, 3000)

        return () => {
            typedName.destroy();
            // typedInfo.destroy();
            clearInterval(stringsTransition);
        }
    }, []);

    const partclesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

  return (
      <Box sx={{
          backgroundImage: `url(${bg02})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
      }}>
          <Helmet>
              <title>{helmetTitle}</title>
          </Helmet>
          <Particles id={"tsparticles"} init={partclesInit} loaded={particlesLoaded} options={links}/>
          <Box component={"div"} sx={{display: "flex"}}>
              <Typography variant={"h3"} color={"#FD4494"}>
                  {"{{"}
              </Typography>
              <Typography ref={nameEl} variant={"h3"} color={"tomato"}>
              </Typography>
              <Typography variant={"h3"} color={"#FD4494"}>
                  {"}}"}
              </Typography>
          </Box>
          <Box component={"div"} sx={{display: "flex"}}>
              <TextTransition springConfig={presets.wobbly}>
                  <Typography /*ref={infoEl}*/ variant={"h4"} color={"whitesmoke"} sx={{
                      mt: 4,
                      textDecoration: "underline",
                      textDecorationColor: "#FD4494"
                  }}>
                      {strings[index % strings.length]}
                  </Typography>
              </TextTransition>
              <Typography variant={"h4"} color={"whitesmoke"} sx={{mt: 4, mr: 1}}>
                  من
              </Typography>
          </Box>
      </Box>
  )
}

export default Home;