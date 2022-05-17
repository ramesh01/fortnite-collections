import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
    return(<>
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
            >
            Made with Love <Link color="inherit" target="_blank" href="https://twitter.com/Rameshhb1">
                Ramesh 
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
      </>);
}

export default Footer;