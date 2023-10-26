import {useState, useEffect} from "react";
import { Helmet } from "react-helmet-async";
import { Typography, Card, CardContent, Slide } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import { devEdu } from "../constants/details";
import {SettingsEthernetRounded, HomeRepairServiceRounded, SchoolRounded} from "@mui/icons-material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineConnector
} from "@mui/lab";
import {CustomDivider} from "../components/common";
import {DevEduTimeline, DevExpTimeline} from "../components/pages";

const Resume = ({helmetTitle}) => {
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
                        bColor={"error.main"}
                        cColor={"error"}
                        icon={<SettingsEthernetRounded/>}
                        align={"center"}
                        text={"رزومه من"}
                    />
                <Grid2 container>
                    <Grid2 xs={6}>
                        <CustomDivider
                            bColor={"warning.main"}
                            cColor={"warning"}
                            icon={<HomeRepairServiceRounded/>}
                            align={"center"}
                            text={"تجربیات"}
                        />
                        <DevExpTimeline loading={loading}/>
                    </Grid2>
                    <Grid2 xs={6}>
                        <CustomDivider
                            bColor={"info.main"}
                            cColor={"info"}
                            icon={<SchoolRounded/>}
                            align={"center"}
                            text={"تحصیلات"}
                        />
                        <DevEduTimeline loading={loading}/>
                    </Grid2>
                </Grid2>
            </CardContent>
        </Card>
    )
}

export default Resume;