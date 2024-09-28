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

export { READ_CONTINENTS, READ_COUNTRYS_WITH_SPOTS }
