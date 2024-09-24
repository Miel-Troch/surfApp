import { LinearProgress, List, ListItemButton, ListItemText } from '@mui/material'
import { useQuery } from '@apollo/client'
import { READ_COUNTRYS } from '../resources/queries'

const Countrylist = ({ id }) => {
	const { loading: loadingCountrys, data: countrys } = useQuery(READ_COUNTRYS, {
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
			{countrys.readCountrys.map((country) => (
				<ListItemButton key={country.id}>
					<ListItemText primary={country.name} />
				</ListItemButton>
			))}
		</List>
	)
}

export default Countrylist
