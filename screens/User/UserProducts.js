import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import Product from '../../components/Product/Product'
import HeaderNavButton from '../../components/Header/Button'

import { Colors } from '../../constants/colors'

import * as productActions from '../../store/actions/product'

const UserProducts = props => {

	const dispatch = useDispatch()

	const products = useSelector(state => state.products.userProds)

	const renderProduct = itemData => {
		return (
			<Product
				onEditHandler={() => { props.navigation.navigate('EditProduct', { productId: itemData.item.id, title: itemData.item.name }) }}
				onDeleteHandler={() => { dispatch(productActions.deleteProduct(itemData.item.id)) }}
				id={itemData.item.id}
				uid={itemData.item.uid}
				name={itemData.item.name}
				price={itemData.item.price}
				imageUrl={itemData.item.imageURL}
				editable={true}
			/>
		)
	}

	return (
		<FlatList numColumns={1} renderItem={renderProduct} data={products} keyExtractor={item => item.id} backgroundColor={Colors.whiteLight} width={"100%"} />
	)
}

UserProducts.navigationOptions = navData => {
	return {
		headerTitle: "Your Products",
		headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderNavButton}><Item title="Menu" iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} /></HeaderButtons>,
		headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderNavButton}><Item title="Add" iconName='ios-add' onPress={() => { navData.navigation.navigate('EditProduct', { title: "Add Product" }) }} /></HeaderButtons>,
	}
}

const styles = StyleSheet.create({

})

export default UserProducts