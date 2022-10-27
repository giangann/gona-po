import { Box } from "@mui/material"
import { BANNER_TITLE } from "~/constants/constants"
import { BannerTitleText } from "~/styles/styled/styled"

export const BannerTitle = () =>{
    return (
        <Box>
            <BannerTitleText>{BANNER_TITLE}</BannerTitleText>
        </Box>
    )
}