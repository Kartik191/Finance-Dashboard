// import { useTheme } from '@emotion/react';
import { Box, useMediaQuery } from '@mui/material';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';

// type Props = {};// useTheme

const gridTemplateLargeScreens = `
"a b c"
"a b c"
"a b c"
"a b f"
"d h f"
"d h f"
"d h i"
"d h i"
`;

const gridTemplateSmallScreens = `
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"f"
"f"
"f"
"h"
"h"
"h"
"h"
"i"
"i"
`;

const Dashboard = () => {
    // const { palette } = useTheme();
    const isAboveMediumScreen = useMediaQuery("(min-width: 1200px)");
    
    return (
        <Box width="100%" height="100%" display="grid" gap="1.5rem" sx={
            isAboveMediumScreen ? {   
                gridTemplateAreas: gridTemplateLargeScreens,
                gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
                gridTemplateRows: "repeat(10, minmax(60px, 1fr))"
            } : {
                gridTemplateAreas: gridTemplateSmallScreens,
                gridAutoColumns: "1fr",
                gridAutoRows: "80px"
            }
        }>
            <Row1/>
            <Row2/>
            <Row3/>
            
            
            
        </Box>
    );
};

export default Dashboard;