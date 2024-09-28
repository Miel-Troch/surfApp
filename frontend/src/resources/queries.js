import { gql } from '@apollo/client'

const READ_CONTINENTS = gql`
	query Query {
		readContinents {
			id
			name
		}
	}
`

const READ_COUNTRYS_WITH_SPOTS = gql`
	query Query($continent_id: Int!) {
		readCountrysWithSpots(continent_id: $continent_id) {
			id
			continent_id
			name
			spots {
				id
				name
			}
		}
	}
`

const READ_SPOT = gql`
	query Query($id: Int!) {
		readSpot(id: $id) {
			id
			country_id
			name
			type
			direction
			bottom
			difficulty
			quality_rating
			lat
			long
		}
	}
`

export { READ_CONTINENTS, READ_COUNTRYS_WITH_SPOTS, READ_SPOT }
