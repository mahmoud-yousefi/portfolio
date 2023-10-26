import {useContext} from "react";
import {Drawer} from "@mui/material";
import {SidebarContent} from "../sidebar";
import MainContext from "../../context";

const SidebarDrawer = () => {
    const {drawerOpen, setDrawerOpen} = useContext(MainContext);
    return (
        <Drawer
            open={drawerOpen}
            variant={"temporary"}
            onClose={() => setDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    width: 300
                },
                // "&.MuiDrawer-root::-webkit-scrollbar":{
                //     display: "none"
                // },
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none",
                    xl: "none"
                }
            }}
        >
            {/*Drawer*/}
            <SidebarContent />
        </Drawer>
    )
}

export default SidebarDrawer;