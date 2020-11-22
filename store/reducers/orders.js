import { interpolate } from "react-native-reanimated"
import Order from "../../models/Order";
import { ADD_ORDER } from "../actions/orders";

const initState = {
	orders: []
}

export default (state = initState, action) => {
	switch (action.type) {
		case ADD_ORDER:
			const date = new Date()
			const order = new Order(date.toString(), action.orderData.items, action.orderData.amount, date)
			return {...state, orders: state.orders.concat(order)}
		default:
			break;
	}

	return state
}