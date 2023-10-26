import {useState, useEffect} from "react";
import {
    Typography,
    Card,
    CardContent,
    Slide,
} from "@mui/material";

import Grid2 from "@mui/material/Unstable_Grid2";
import {AccountCircle} from "@mui/icons-material";
import {Helmet} from "react-helmet-async";
import worldMap from "../assets/map.svg";
import {CustomDivider} from "../components/common";
import {ContactForm} from "../components/pages";

const Contact = ({helmetTitle}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        return () => {
            setLoading(false);
        }
    }, []);

    return (
        <Card
            sx={{
                height: "100vh",
                backgroundColor: "whitesmoke",
                overflowY: "auto",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor={"warning.main"}
                    cColor={"warning"}
                    icon={<AccountCircle/>}
                    align={"center"}
                    text={"ارتباط با من"}
                />
                <Grid2 container>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading? "200ms" : "0ms"
                        }}
                    >
                        <Grid2 xs={12} sm={12} md={8}>
                            <Card
                                sx={{
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <ContactForm/>
                            </Card>
                        </Grid2>
                    </Slide>
                    <Slide
                        direction="up"
                        in={loading}
                        style={{
                            transitionDelay: loading? "200ms" : "0ms"
                        }}
                    >
                        <Grid2 xs={0} sm={0} md={4}
                               sx={{
                                   textAlign: "center",
                                   backgroundImage: `url(${worldMap})`,
                                   backgroundRepeat: "no-repeat",
                                   backgroundPosition: "center"
                               }}
                        >
                            <Typography variant={"h6"} color={"black"}
                                        sx={{
                                            fontFamily: "vazir",
                                            mt: 4,
                                            display: {
                                                xs: "none",
                                                sm: "none",
                                                md: "block"
                                            }
                                        }}
                            >
                                بیا در مورد همه چیز با هم صحبت کنیم
                            </Typography>
                            <Typography variant={"body1"} color={"black"}
                                        sx={{
                                            fontFamily: "vazir",
                                            mt: 4,
                                            display: {
                                                xs: "none",
                                                sm: "none",
                                                md: "block"
                                            }
                                        }}
                            >
                                👋{" "}
                                <a href={"mailto:mufimf14@gmail.com"}
                                   alt={"email"}
                                   style={{
                                       color: "tomato"
                                   }}>ایمیل</a>{" "}
                                بزن به من
                            </Typography>
                        </Grid2>
                    </Slide>
                </Grid2>
            </CardContent>
        </Card>
    )
}

export default Contact;