import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { useDispatch, useSelector } from 'react-redux'

import CartItem from '../../components/CartItem/CartItem'

import { Colors } from '../../constants/colors'

const Cart = props => {

	const cartItems = useSelector(state => {
		const transformedCartItem = []
		for (const key in state.cart.items){
			transformedCartItem.push({
				id: key,
				name: state.cart.items[key].title,
				price: state.cart.items[key].price,
				quantity: state.cart.items[key].quantity,
				sum: state.cart.items[key].sum
			})
		}
		return transformedCartItem
	})

	const renderProduct = itemData => {
		return (
			<CartItem
				onOpenHandler={()=> console.log("Opening")}
				onAddHandler={()=> console.log("Adding")}
				id={itemData.item.id}
				quantity={itemData.item.quantity}
				price={itemData.item.sum}
			/>
		)
	}

	return (
		<FlatList numColumns={1} renderItem={renderProduct} data={cartItems} backgroundColor={Colors.whiteLight} width={"100%"} />
	)
}

const styles = StyleSheet.create({

})

export default Cart;