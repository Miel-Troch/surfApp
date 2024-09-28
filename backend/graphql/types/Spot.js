export const Spot = `
type Spot {
    id: Int,
    country_id: Int,
    name: String,
    spot: Spot,
    type: String,
	direction: String,
    bottom: String,
    difficulty: String,
    quality_rating: Int,
    lat: String,
    long: String,
}
`
