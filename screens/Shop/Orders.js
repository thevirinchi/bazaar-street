import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import Root from '../../components/Views/Root'
import HeaderNavButton from '../../components/Header/Button'
import OrderItem from '../../components/OrderItem/OrderItem'

const Orders = props => {

	const orders = useSelector(state => state.orders.orders)

	const renderItem = itemData => {
		console.log(itemData)
		return (
			<OrderItem
				id = {itemData.item.id}
				date = {itemData.item.stringDate}
				amount = {itemData.item.amount}
				items = {itemData.item.items}
			/>
		)
	}

	return (
		<FlatList numColumns={1} data={orders} keyExtractor={item => item.id} renderItem={renderItem}/>
	)
}

const styles = StyleSheet.create({

})

Orders.navigationOptions = navData => {
	return {
		headerTitle: navData.navigation.getParam('My Orders'),
		headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderNavButton}><Item title="Menu" iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} /></HeaderButtons>,
	}
}

export default Orders