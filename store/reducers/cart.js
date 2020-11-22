import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart'
import { ADD_ORDER } from '../actions/orders'
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
			if (state.items[addProduct.id]) {
				const updateCartItem = new CartItem(
					state.items[addProduct.id].quantity + 1,
					prodPrice,
					prodName,
					state.items[addProduct.id].sum + prodPrice
				)
				return {
					...state,
					items: { ...state.items, [addProduct.id]: updateCartItem },
					totalAmount: state.totalAmount + prodPrice
				}
			}
			else {
				const newCartItem = new CartItem(1, prodPrice, prodName, prodPrice)
				return {
					...state,
					items: { ...state.items, [addProduct.id]: newCartItem },
					totalAmount: state.totalAmount + prodPrice
				}
			}
		case REMOVE_FROM_CART:
			const qty = state.items[actions.pid].quantity
			if (qty > 1) {
				const updateCartItem = new CartItem(
					state.items[actions.pid].quantity - 1,
					state.items[actions.pid].price,
					state.items[actions.pid].title,
					state.items[actions.pid].sum - state.items[actions.pid].price
				)
				return {
					...state,
					items: { ...state.items, [actions.pid]: updateCartItem },
					totalAmount: state.totalAmount - state.items[actions.pid].price
				}
			}
			else {
				const currentItems = { ...state.items }
				delete currentItems[actions.pid]
				return {
					...state,
					items: currentItems,
					totalAmount: state.totalAmount - state.items[actions.pid].price
				}
			}
		case ADD_ORDER:
			return initState
		default:
			break;
	}
	return state
}

export default cartReducer