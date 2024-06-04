import React from 'react';
import {Box} from '@mui/material';

const HStack = ({ children, gap = 2, justifyContent = 'flex-start', sx = {}, ...props }) => {
    return (
        <Box display="flex" flexDirection="row" gap={gap} justifyContent={justifyContent} sx={sx} {...props}>
            {children}
        </Box>
    );
};

export default HStack;
