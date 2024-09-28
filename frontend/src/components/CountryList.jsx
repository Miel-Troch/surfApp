import { useState } from 'react'
import { Collapse, LinearProgress, List, ListItemButton, ListItemText } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { useQuery } from '@apollo/client'
import { READ_COUNTRYS_WITH_SPOTS } from '../resources/queries'

const Countrylist = ({ id }) => {
	const [open, setOpen] = useState(true)
	const [selected, setSelected] = useState(0)

	const { loading: loadingCountrys, data: countrys } = useQuery(READ_COUNTRYS_WITH_SPOTS, {
		skip: !id,
		variables: {
			continent_id: id
		},
		fetchPolicy: 'network-only',
		onError: (error) => console.log(error)
	})

	if (loadingCountrys) {
		return <LinearProgress />
	}

	return (
		<List sx={{ width: '100%', bgcolor: 'background.paper' }} component='nav'>
			{countrys.readCountrysWithSpots.map((country) => (
				<>
					<ListItemButton
						key={country.id}
						onClick={() => {
							setOpen(!open)
							setSelected(country.id)
						}}
					>
						<ListItemText primary={country.name} />
						{open && selected === country.id ? <ExpandLess /> : <ExpandMore />}
					</ListItemButton>
					<Collapse in={open && selected === country.id} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							{country.spots.map((spot) => (
								<ListItemButton sx={{ pl: 4 }}>
									<ListItemText primary={spot.name} />
								</ListItemButton>
							))}
						</List>
					</Collapse>
				</>
			))}
		</List>
	)
}

export default Countrylist
