import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#1E64C8'
		}
	},
	typography: {
		fontFamily: ['Montserrat', 'sans-serif'].join(',')
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					boxShadow: 'none', // Remove the default box shadow
					border: '1px solid rgba(0, 0, 0, 0.12)' // Add border for the outlined variant
				}
			},
			defaultProps: {
				variant: 'outlined' // Set the default variant to outlined
			}
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline /> {/* This is used to normalize the stylesheet */}
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
