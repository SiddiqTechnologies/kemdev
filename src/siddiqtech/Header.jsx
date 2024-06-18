import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton
                    edge='start'
                    color='inherit'
                    aria-label='menu'>
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant='h6'
                    style={{ flexGrow: 1 }}>
                    Kem Muhammad ~ Software Developer
                </Typography>
                <img
                    src='https://placehold.co/50x50'
                    alt='Header'
                />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
