
import React from "react";
import FlexBetween from "./FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";


type Props = {
    title: string;
    sidetext: string;
    subtitle?: string;
    icon?: React.ReactNode
}
const BoxHeader = ({title, sidetext, subtitle, icon}:Props) => {
    const { palette } = useTheme();
g
  return (
    <FlexBetween>
        <FlexBetween>
            {icon}
        <Box width="100%">
            <Typography variant="h4" mb="-0.1rem">
                {title}
            </Typography>

            <Typography variant="h6" >
                {subtitle}
            </Typography>
        </Box>
        </FlexBetween>
        <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
            {sidetext}
        </Typography>

        
    </FlexBetween>
  )
}

export default BoxHeader
