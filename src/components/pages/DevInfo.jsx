import {Typography} from "@mui/material";
import {KeyboardArrowLeftRounded} from "@mui/icons-material";

const Info = ({children}) => {
    return (
        <Typography variant={"body1"} color={"black"} textAlign={"left"} sx={{mt: 2}}>
            {children}
            <KeyboardArrowLeftRounded sx={{verticalAlign: "bottom", color: "primary.main"}}/>
        </Typography>
    )
}


const DevInfo = () => {
    return (
        <>
            <Info>نام و نام خانوادگی: محمود یوسفی</Info>
            <Info>سن: 21</Info>
            <Info>شهر: تهران</Info>
            <Info>mufimf14@gmail.com :آدرس ایمیل</Info>
            <Info>شماره موبایل: 09902635947</Info>
        </>
    )
}
export default DevInfo;