import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Hero from './siddiqtech/Hero';
import Header from './siddiqtech/Header';

function App() {
    return (
        <ThemeProvider>
            <CssBaseline />
            <Header />
            <Hero />
        </ThemeProvider>
    );
}

export default App;
