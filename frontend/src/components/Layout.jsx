import { Outlet } from 'react-router-dom'
import { useTheme, useMediaQuery, CssBaseline } from '@mui/material'

const Layout = () => {
	const theme = useTheme()
	const isXl = useMediaQuery(theme.breakpoints.up('xl'))
	const isXs = useMediaQuery(theme.breakpoints.only('xs'))
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

	return (
		<>
			<CssBaseline />
			<main
				style={{
					padding: isXl ? theme.spacing(4) : isXs ? theme.spacing(2.5) : theme.spacing(3),
					marginTop: 64,
					marginLeft: isDesktop ? 240 : 0
				}}
			>
				<Outlet />
			</main>
		</>
	)
}

export default Layout
