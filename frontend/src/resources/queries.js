import { gql } from '@apollo/client'

const READ_CONTINENTS = gql`
	query Query {
		readContinents {
			id
			name
		}
	}
`

const READ_COUNTRYS = gql`
	query Query($continent_id: Int!) {
		readCountrys(continent_id: $continent_id) {
			id
			continent_id
			name
		}
	}
`

export { READ_CONTINENTS, READ_COUNTRYS }
