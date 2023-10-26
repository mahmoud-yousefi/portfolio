import {useState, useEffect} from "react";
import { Helmet } from "react-helmet-async";
import {
    Card, CardContent,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {TerminalRounded} from "@mui/icons-material";
import {CustomDivider} from "../components/common";
import {ShowCourses} from "../components/pages";

const Courses = ({helmetTitle}) => {
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
            }}
        >
            <Helmet>
                <title>{helmetTitle}</title>
            </Helmet>
            <CardContent>
                <CustomDivider
                    bColor={"primary.main"}
                    cColor={"primary"}
                    icon={<TerminalRounded/>}
                    align={"center"}
                    text={"نمونه کارها"}
                />

                <Grid2 container sx={{mx: 3, mt: 3}}>
                    <ShowCourses loading={loading}/>
                </Grid2>
            </CardContent>
        </Card>
    )
}

export default Courses;