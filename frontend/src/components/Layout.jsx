import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles'
import { AppBar, Toolbar, Box, Button, IconButton, Menu, MenuItem, InputBase } from '@mui/material'
import { Search as SearchIcon, AccountCircle } from '@mui/icons-material'

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25)
	},
	marginRight: theme.spacing(2),
	marginLeft: 0,
	width: '100%',
	flexGrow: 1,
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto'
	}
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	}
}))

export default function Layout() {
	const navigate = useNavigate()
	const [anchorEl, setAnchorEl] = useState(null)
	const isMenuOpen = Boolean(anchorEl)

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
	}

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<Box
							component='img'
							src='/logo.webp'
							alt='Logo'
							sx={{ height: '70px', mr: 2 }}
							onClick={() => {
								navigate('/')
							}}
						/>
						<Button
							onClick={() => {
								navigate('/spots')
							}}
							sx={{ px: 2, color: 'text.secondary', display: 'block' }}
						>
							Surf Spots
						</Button>
						<Button
							onClick={() => {
								navigate('/map')
							}}
							sx={{ px: 2, color: 'text.secondary', display: 'block' }}
						>
							Map
						</Button>
						<Search>
							<SearchIconWrapper>
								<SearchIcon />
							</SearchIconWrapper>
							<StyledInputBase placeholder='Search…' inputProps={{ 'aria-label': 'search' }} />
						</Search>
						<IconButton
							size='large'
							edge='end'
							aria-label='account of current user'
							aria-controls='primary-search-account-menu'
							aria-haspopup='true'
							onClick={handleProfileMenuOpen}
							color='inherit'
						>
							<AccountCircle />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Menu
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
					id='primary-search-account-menu'
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right'
					}}
					open={isMenuOpen}
					onClose={handleMenuClose}
				>
					<MenuItem
						onClick={() => {
							handleMenuClose
							navigate('profile')
						}}
					>
						Profile
					</MenuItem>
					<MenuItem
						onClick={() => {
							handleMenuClose
							navigate('settings')
						}}
					>
						Settings
					</MenuItem>
				</Menu>
			</Box>
			<Outlet />
		</>
	)
}
