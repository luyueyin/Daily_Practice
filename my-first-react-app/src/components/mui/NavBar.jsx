import { AppBar, Container, Toolbar , Button , Box} from "@mui/material"

function NavBar() {
    return (
        <AppBar position="static">
            <Container maxWidth="x1">
                <Toolbar disableGutters>
                    <Box sx={{flexGrow: 1, display: 'flex'}}>
                        <a style={{textDecoration: 'none'}} href="#products"><Button 
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            Product
                        </Button></a>
                        <a style={{textDecoration: 'none'}} href="#cart"><Button 
                            sx={{ my: 2, color: 'white', display: 'block' }}>
                            Cart
                        </Button></a>

                    </Box>   
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBar