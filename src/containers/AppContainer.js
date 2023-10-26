import {useState, useEffect} from "react";
import MainLayout from "../layouts/MainLayout";
// import Header from "./components/ui/Header";
import {Sidebar} from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import {Page} from "../components/pages";
import {useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { DrawerActionButton } from "../components/drawer";
import SwipeableViews from "react-swipeable-views";
import {Home, About, Resume, Courses, Comments, Contact} from "../pages";

function AppContainer() {
    const [pageNumber, setPageNumber] = useState(0);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mode, setMode] = useState();

    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("sm"));
    const prefersDarkMode = useMediaQuery('prefers-color-schema: dark');

    useEffect(() => {
        setMode(prefersDarkMode ? "dark" : "light");
    }, [])

    useEffect(() => {
        if(isMdUp){
            setDrawerOpen(false);
        }
    }, [isMdUp])
    const handlePageNumber = (event, newValue) => {
        console.log("Page Number Event:", event);
        console.log("Page Number:", newValue);
        setPageNumber(newValue);
    }

    const handlePageChange = index => {
        setPageNumber(index);
    }
    const handleThemeChange = () => {
        setMode(prevMode => prevMode === "light"? "dark" : "light");
    };

  return (
      <MainContext.Provider value={{pageNumber, handlePageNumber, handleThemeChange, drawerOpen, setDrawerOpen}}>
          <MainLayout mode={mode}>
              <SidebarContainer>
                  <Sidebar />
              </SidebarContainer>
              <DrawerActionButton/>
              <PagesContainer>
                  <SwipeableViews
                      index={pageNumber}
                      onChangeIndex={handlePageChange}
                  >
                      <Page pageNumber={pageNumber} index={0}>
                          <Home helmetTitle={"وب سایت محمود یوسفی | صفحه اصلی"}/>
                      </Page>
                      <Page pageNumber={pageNumber} index={1}>
                          <About helmetTitle={"وب سایت محمود یوسفی | درباره من"}/>
                      </Page>
                      <Page pageNumber={pageNumber} index={2}>
                          <Resume helmetTitle={"وب سایت محمود یوسفی | رزومه من"}/>
                      </Page>
                      <Page pageNumber={pageNumber} index={3}>
                          <Courses helmetTitle={"وب سایت محمود یوسفی | نمونه کارها"}/>
                      </Page>
                      <Page pageNumber={pageNumber} index={4}>
                          <Comments helmetTitle={"وب سایت محمود یوسفی | نظرات"}/>
                      </Page>
                      <Page pageNumber={pageNumber} index={5}>
                          <Contact helmetTitle={"وب سایت محمود یوسفی | ارتباط با من"}/>
                      </Page>
                  </SwipeableViews>
              </PagesContainer>
          </MainLayout>
      </MainContext.Provider>
  );
}

export default AppContainer;
