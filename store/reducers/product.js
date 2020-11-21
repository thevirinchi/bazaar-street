import PRODUCTS from '../../data/data'

const initalState = {
	availableProds: PRODUCTS,
	userProds: PRODUCTS.filter(prod => prod.uid === 'u1')
}

export default (state = initalState, action) => {
	return state
}