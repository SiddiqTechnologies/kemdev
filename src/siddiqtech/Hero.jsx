import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const useStyles = makeStyles((theme) => ({
    heroContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '80vh',
        backgroundImage: 'url("https://placehold.co/1200x800")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        padding: theme.spacing(2),
        position: 'relative',
    },
    heroText: {
        maxWidth: '600px',
        position: 'relative',
        zIndex: 2,
        padding: theme.spacing(3),
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: '8px',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
    button: {
        marginTop: theme.spacing(2),
    },
}));

const HeroSection = () => {
    const classes = useStyles();

    return (
        <Box className={classes.heroContainer}>
            <div className={classes.overlay}></div>
            <Container>
                <Box className={classes.heroText}>
                    <Typography
                        variant='h3'
                        component='h1'
                        gutterBottom>
                        Welcome to Our Website
                    </Typography>
                    <Typography
                        variant='h5'
                        component='p'
                        gutterBottom>
                        We provide the best solutions for your business needs.
                    </Typography>
                    <Button
                        variant='contained'
                        color='primary'
                        endIcon={<ArrowForwardIcon />}
                        className={classes.button}>
                        Get Started
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
