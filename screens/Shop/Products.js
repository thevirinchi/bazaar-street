import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import Root from '../../components/Views/Root'

import Product from '../../components/Product/Product'

import PRODUCTS from '../../data/data'

import { Colors } from '../../constants/colors'

const Products = props => {

	const onAddHandler = id => {
		console.log(id)
	}

	const onOpenHandler = id => {
		console.log(id)
	}

	const renderProduct = itemData => {
		return (
			<Product
				onOpenHandler={onOpenHandler}
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
		<Root>
			<FlatList numColumns={2} renderItem={renderProduct} data={PRODUCTS} backgroundColor={Colors.whiteLight} width={"100%"} />
		</Root>
	)
}

export default Products