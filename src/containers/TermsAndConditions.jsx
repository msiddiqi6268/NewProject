import React, {useState, useEffect, useRef} from 'react';
import { Typography, List, ListItem, ListItemText, Box } from '@mui/material';
import OrangeButton from '../components/mui/OrangeButtons';
function TermsAndConditions({accept, decline}) {
    const divRef = useRef(null);
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const handleScroll = (e) => {
        const bottom = Math.round((e.target.scrollHeight - e.target.scrollTop)/10)*10 === Math.round(parseInt(e.target.clientHeight)/10)*10;
        setButtonDisabled(!bottom)
    };
    return (
        <Box className='terms-inner-container'>
        <Typography variant="h4">Terms and Conditions</Typography>
            <Box className='terms-content' onScroll={handleScroll}>
            <List>
                <ListItem> 
                    <ListItemText
                        primary="1. Acceptance of Terms"
                        secondary="By accessing and using this website, you agree to be bound by these Terms and Conditions."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="2. Intellectual Property"
                        secondary="All content on this website, including text, images, and logos, is the intellectual property of [Your Company Name]."
                    />
                </ListItem>

            </List>
            </Box>
            <Box className='terms-buttons'>
                <OrangeButton onClick = {decline}>Decline</OrangeButton>
                <OrangeButton onClick = {accept}
                disabled = {isButtonDisabled}>Accept</OrangeButton>
            </Box>
        </Box>
    );
}

export default TermsAndConditions;
