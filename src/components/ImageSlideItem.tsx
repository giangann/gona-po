import { Box } from "@mui/material"
import { Container } from "@mui/system"

export const ImageSlideItem = () =>{
    return(
        <Container sx={{height:'100vh', width:'100vw'}}>
            <Box component="img">
                <img src="https://eqx-assets-prod.imgix.net/images/ca7c4f87aef6432f9f902af5a921ef64-costa-rica-hero-image.jpg?auto=format&fit=crop&ixlib=react-8.6.4&w=1678"/>
            </Box>

        </Container>
    )
}