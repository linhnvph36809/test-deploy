import { Box } from "@mui/material";
import { Outlet } from "react-router-dom"

const Layout = () => {
    return(
        <>
        <Box>
            <header>HEader</header>
            <Box width={'1200px'} margin={"0 auto"}>
                <Outlet />
            </Box>
            <footer>
                Footer 
            </footer>
        </Box>
        </>
    )
}

export default Layout ; 