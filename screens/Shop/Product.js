import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import Body from '../../components/Typo/Body'
import Heading from '../../components/Typo/Heading'
import Root from '../../components/Views/Root'
import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'
import Button from '../../components/Button/Button'

import { TouchableOpacity } from 'react-native-gesture-handler'

import * as cartActions from '../../store/actions/cart'

const ProductDetails = props => {

	const dispatch = useDispatch()

	const id = props.navigation.getParam('productId')
	const product = useSelector(state => state.products.availableProds.find(prod => prod.id === id))

	return (
		<Root>
			<Image source={{ uri: product.imageURL }} style={styles.image} />
			<View style={styles.productDetails}>
				<Heading lvl={2} text={product.name} />
				<Body lvl={4} text={"₹" + product.price} style={styles.price} />
			</View>
			<View style={styles.descriptionContainer}>
				<Heading lvl={3} text="Description" style={styles.descriptionHeader} />
				<Body lvl={1} text={product.desc} style={styles.description} />
			</View>
			<View style={styles.ctaContainer}>
				<TouchableOpacity onPress={()=>{ dispatch(cartActions.addToCart(product)) }}>
					<Button lvl={2} text="Add to cart" containerStyle={{ marginBottom: Margin.m }} style={{ borderRadius: 4 }} onPress/>
				</TouchableOpacity>
				<TouchableOpacity>
					<Button lvl={1} text="Buy now" style={{ borderRadius: 4 }} />
				</TouchableOpacity>
			</View>
		</Root>
	)
}

const styles = StyleSheet.create({
	image: { width: "100%", height: (Dimensions.get("window").height / 2), borderColor: Colors.white, borderWidth: 4, borderRadius: 8 },
	productDetails: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" },
	price: { fontSize: 18, backgroundColor: Colors.secondary, paddingHorizontal: Padding.s },
	descriptionContainer: { width: "100%", borderRadius: 8, backgroundColor: Colors.white, padding: Padding.s },
	descriptionHeader: { marginVertical: 0, color: Colors.blackLight },
	description: { marginBottom: 0 },
	ctaContainer: { width: "100%", alignItems: "center", justifyContent: "center", marginTop: Margin.l, flex: 1 },
})

ProductDetails.navigationOptions = navData => {
	return {
		headerTitle: navData.navigation.getParam('title')
	}
}

export default ProductDetails