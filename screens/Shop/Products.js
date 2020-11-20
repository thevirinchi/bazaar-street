import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import Product from '../../components/Product/Product'

import PRODUCTS from '../../data/data'

import {Colors} from '../../constants/colors'

const Products = props => {

	const onProductPress = id => {
		console.log(id)
	}

	const renderProduct = itemData => {
		return (
			<Product
				onPressHandler={onProductPress}
				id={itemData.item.id}
				uid={itemData.item.uid}
				name={itemData.item.name}
				price={itemData.item.price}
				imageUrl={itemData.item.imageURL}
			/>
		)
	}

	return (
		<View style={{flex: 1, width: "100%"}}>
			<FlatList numColumns={2} renderItem={renderProduct} data={PRODUCTS} backgroundColor={Colors.whiteLight} width={"100%"} />
		</View>
	)
}

export default Products