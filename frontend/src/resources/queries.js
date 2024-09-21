import { gql } from '@apollo/client'

const READ_CONTINENTS = gql`
	query Query {
		readContinents {
			id,
			name
		}
	}
`

export { READ_CONTINENTS }
