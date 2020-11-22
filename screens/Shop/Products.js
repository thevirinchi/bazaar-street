import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useDispatch, useSelector } from 'react-redux'

import HeaderNavButton from '../../components/Header/Button'

import Product from '../../components/Product/Product'

import { Colors } from '../../constants/colors'

import * as cartActions from '../../store/actions/cart'

const Products = props => {

	const dispatch = useDispatch()

	const products = useSelector(state => state.products.availableProds)

	const renderProduct = itemData => {
		return (
			<Product
				onOpenHandler={() => { props.navigation.navigate('ProductDetails', { productId: itemData.item.id, title: itemData.item.name }) }}
				onAddHandler={() => { dispatch(cartActions.addToCart(itemData.item)) }}
				id={itemData.item.id}
				uid={itemData.item.uid}
				name={itemData.item.name}
				price={itemData.item.price}
				imageUrl={itemData.item.imageURL}
				editable={false}
			/>
		)
	}

	return (
		<FlatList numColumns={1} renderItem={renderProduct} data={products} keyExtractor={item => item.id} backgroundColor={Colors.whiteLight} width={"100%"} />
	)
}

Products.navigationOptions = navData => {
	return {
		headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderNavButton}><Item title="Menu" iconName='ios-menu' onPress={() => { navData.navigation.toggleDrawer() }} /></HeaderButtons>,
		headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderNavButton}><Item title="Cart" iconName='ios-cart' onPress={() => { navData.navigation.navigate('Cart') }} /></HeaderButtons>
	}
}

export default Products