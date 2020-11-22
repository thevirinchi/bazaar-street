import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

import { useDispatch, useSelector } from 'react-redux'

import CartItem from '../../components/CartItem/CartItem'
import Body from '../../components/Typo/Body'
import Button from '../../components/Button/Button'

import { Colors } from '../../constants/colors'
import { Padding } from '../../constants/utility'

import * as orderActions from '../../store/actions/orders'

const Cart = props => {

	const dispatch = useDispatch()

	const total = useSelector(state => state.cart.totalAmount)

	const cartItems = useSelector(state => {
		const transformedCartItem = []
		for (const key in state.cart.items) {
			transformedCartItem.push({
				id: key,
				name: state.cart.items[key].title,
				price: state.cart.items[key].price,
				quantity: state.cart.items[key].quantity,
				sum: state.cart.items[key].sum
			})
		}
		return transformedCartItem.sort((a, b) =>
			a.sum > b.sum ? -1 : 1
		)
	})

	const renderProduct = itemData => {
		return (
			<CartItem
				id={itemData.item.id}
				quantity={itemData.item.quantity}
				price={itemData.item.sum}
				editable={true}
			/>
		)
	}

	return (
		(cartItems.length < 1
			?
			<View style={styles.emptyContainer}>
				<Body lvl={1} text="Its so empty here. Add items to your cart to checkout." />
			</View>
			:
			<View style={styles.cartContainer}>
				<View style={{ flex: 1, width: "100%", marginBottom: Dimensions.get("window").height / 15 }}>
					<FlatList numColumns={1} renderItem={renderProduct} data={cartItems} backgroundColor={Colors.whiteLight} width={"100%"} />
				</View>
				<View style={styles.ctaContainer}>
					<View style={styles.totalContainer}><Body lvl={1} text="Total: " style={styles.totalHeader} /><Body lvl={4} text={"₹" + total.toFixed(2)} style={styles.totalAmount} /></View>
					<TouchableOpacity onPress={() => { dispatch(orderActions.addOrder(cartItems, total)) }}>
						<Button lvl={2} text="Order now" />
					</TouchableOpacity>
				</View>
			</View>
		)
	)
}

const styles = StyleSheet.create({
	emptyContainer: { flex: 1, alignItems: "center", justifyContent: "center", padding: Padding.l },
	cartContainer: { flex: 1 },
	ctaContainer: { height: Dimensions.get("window").height / 15, flexDirection: "row", width: "100%", backgroundColor: Colors.primary, elevation: 4, shadowColor: Colors.black, shadowOpacity: 0.25, shadowOffset: { width: 0, height: 4 }, shadowRadius: 8, position: "absolute", bottom: 0, paddingHorizontal: Padding.l, paddingVertical: Padding.m, alignItems: "center", justifyContent: "space-between" },
	totalContainer: { flexDirection: "row", alignItems: "flex-start", justifyContent: "center" },
	totalHeader: { color: Colors.whiteLight },
	totalAmount: { fontSize: 18, color: Colors.whiteLight }
})

export default Cart;