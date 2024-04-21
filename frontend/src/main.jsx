import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: { main: '#CAE5EB' },
		secondary: { main: '#E7A201' },
		text: { primary: '#012333' }
	},
	typography: {
		fontFamily: ['Montserrat', 'sans-serif'].join(',')
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					border: '1px solid rgba(0, 0, 0, 0.12)'
				}
			},
			defaultProps: {
				variant: 'outlined'
			}
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<CssBaseline /> {/* This is used to normalize the stylesheet */}
		<App />
	</ThemeProvider>
)
