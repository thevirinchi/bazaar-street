import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import HeaderNavButton from '../../components/Header/Button'

import Product from '../../components/Product/Product'

import { Colors } from '../../constants/colors'

const Products = props => {

	const products = useSelector(state => state.products.availableProds)

	const onAddHandler = id => {
		console.log(id)
	}

	const renderProduct = itemData => {
		return (
			<Product
				onOpenHandler={() => { props.navigation.navigate('ProductDetails', { productId: itemData.item.id, title: itemData.item.name }) }}
				onAddHandler={onAddHandler}
				id={itemData.item.id}
				uid={itemData.item.uid}
				name={itemData.item.name}
				price={itemData.item.price}
				imageUrl={itemData.item.imageURL}
			/>
		)
	}

	return (
		<FlatList numColumns={1} renderItem={renderProduct} data={products} keyExtractor={item => item.id} backgroundColor={Colors.whiteLight} width={"100%"} />
	)
}

Products.navigationOptions = navData => {
	return {
		headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderNavButton}><Item title="Menu" iconName='ios-menu' onPress={() => { console.log("drawer") }} /></HeaderButtons>,
		headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderNavButton}><Item title="Menu" iconName='ios-cart' onPress={() => { console.log("cart") }} /></HeaderButtons>
	}
}

export default Products