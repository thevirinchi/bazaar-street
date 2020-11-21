import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'

import { useSelector } from 'react-redux'
import Body from '../../components/Typo/Body'
import Heading from '../../components/Typo/Heading'
import Root from '../../components/Views/Root'
import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'
import Button from '../../components/Button/Button'

import PRODUCTS from '../../data/data'

const ProductDetails = props => {

	const id = props.navigation.getParam('productId')
	const product = useSelector(state => state.products.availableProds.find(prod => prod.id === id))

	useEffect(() => { console.log(props.navigation.getParam('title')) })

	return (
		<Root>
			<Image source={{ uri: product.imageURL }} style={{ width: "100%", height: (Dimensions.get("window").height / 2), borderColor: Colors.white, borderWidth: 4, borderRadius: 8 }} />
			<View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
				<Heading lvl={2} text={product.name} />
				<Body lvl={4} text={"₹" + product.price} style={{ fontSize: 18, backgroundColor: Colors.secondary, paddingHorizontal: Padding.s }} />
			</View>
			<View style={{ width: "100%", borderRadius: 8, backgroundColor: Colors.white, padding: Padding.s }}>
				<Heading lvl={3} text="Description" style={{ marginVertical: 0, color: Colors.blackLight }} />
				<Body lvl={1} text={product.desc} style={{ marginBottom: 0 }} />
			</View>
			<View style={{ width: "100%", alignItems: "center", justifyContent: "center", marginTop: Margin.l }}>
				<Button lvl={2} text="Add to cart" containerStyle={{ width: "80%", marginBottom: Margin.m }} style={{ borderRadius: 4 }} />
				<Button lvl={1} text="Buy now" containerStyle={{ width: "80%" }} style={{ borderRadius: 4 }} />
			</View>
		</Root>
	)
}

const styles = StyleSheet.create({

})

ProductDetails.navigationOptions = navData => {
	return {
		headerTitle: navData.navigation.getParam('title')
	}
}

export default ProductDetails