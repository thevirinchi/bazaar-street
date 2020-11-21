import { ADD_TO_CART } from '../actions/cart'
import CartItem from '../../models/CartItem'
import { add } from 'react-native-reanimated'

const initState = {
	items: {},
	totalAmount: 0
}

const cartReducer = (state = initState, actions) => {
	switch (actions.type) {
		case ADD_TO_CART:
			const addProduct = actions.product
			const prodPrice = addProduct.price
			const prodName = addProduct.name
			if(state.items[addProduct.id]){
				const updateCartItem = new CartItem(
					state.items[addProduct.id].quantity+1,
					prodPrice,
					prodName,
					state.items[addProduct.id].sum + prodPrice
				)
				return {
					...state,
					items: {...state.items, [addProduct.id]: updateCartItem},
					totalAmount: state.totalAmount + prodPrice
				}
			}
			else{
				const newCartItem = new CartItem(1, prodPrice, prodName, prodPrice)
				return {
					...state,
					items: {...state.items, [addProduct.id]: newCartItem},
					totalAmount: state.totalAmount + prodPrice
				}
			}
		default:
			break;
	}
	return state
}

export default cartReducer