import PRODUCTS from '../../data/data'
import ProductModel from '../../models/Product'
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from '../actions/product'

const initalState = {
	availableProds: PRODUCTS,
	userProds: PRODUCTS.filter(prod => prod.uid === 'u1')
}

export default (state = initalState, action) => {
	switch (action.type) {
		case DELETE_PRODUCT:
			return {
				...state,
				userProds: state.userProds.filter(item => item.id !== action.pid),
				availableProds: state.availableProds.filter(item => item.id !== action.pid)
			}
		case CREATE_PRODUCT:
			const date = new Date()
			const prodData = action.productData
			const prod = new ProductModel(date.toString(), 'u1', prodData.name, prodData.imageURL, prodData.desc, prodData.price)

			return {
				...state,
				availableProds: state.availableProds.concat(prod),
				userProds: state.userProds.concat(prod)
			}
		case UPDATE_PRODUCT:
			const prodIndex = state.userProds.findIndex(prod => prod.id === action.productId)
			const newProdData = action.productData
			const newProd = new ProductModel(action.productId, state.userProds[prodIndex].uid, newProdData.name, newProdData.imageURL, newProdData.desc, state.userProds[prodIndex].price)
			const updatedUserProds = [...state.userProds]
			updatedUserProds[prodIndex] = newProd
			const availableProdIndex = state.availableProds.findIndex(prod => prod.id === action.productId)
			const updatedAvailableProds = [...state.availableProds]
			updatedAvailableProds[availableProdIndex] = newProd
			return {
				...state,
				availableProds: updatedAvailableProds,
				userProds: updatedUserProds
			}
	}
	return state
}