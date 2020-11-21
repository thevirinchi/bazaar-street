import React, { useEffect } from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'
import Heading from '../../components/Typo/Heading'
import Body from '../../components/Typo/Body'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import * as cartActions from '../../store/actions/cart'

const CartItem = props => {

	const dispatch = useDispatch()

	const product = useSelector(state => state.products.availableProds.find(prod => prod.id === props.id))

	return (
		<View style={styles.itemContainer}>
			<View style={styles.detailsContainer}>
				<Image source={{ uri: product.imageURL }} style={styles.image} />
				<View style={styles.specificsContainer}>
					<Heading lvl={3} text={product.name} style={styles.name} />
					<Body lvl={1} text={"Quantity: " + props.quantity} style={styles.quantity} />
					<View style={styles.priceContainer}><Body lvl={1} text="Total: " style={styles.priceHeader} /><Body lvl={4} text={"₹" + props.price.toFixed(2)} style={styles.priceAmount} /></View>
				</View>
			</View>
			<TouchableOpacity style={styles.deleteContainer} onPress={() => { dispatch(cartActions.removeFromCart(product.id)) }}>
				<Ionicons name="ios-trash" size={24} color={Colors.secondary} />
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	itemContainer: { flexDirection: "row", flex: 1, backgroundColor: Colors.whiteLight, elevation: 4, margin: Margin.s, borderRadius: 8, overflow: "hidden", alignItems: "center", justifyContent: "space-between" },
	detailsContainer: { height: "100%", flexDirection: "row" },
	image: { width: Dimensions.get("window").width / 5, height: Dimensions.get("window").height / 8, borderColor: Colors.white, borderWidth: 2, borderRadius: 8, marginRight: Margin.l },
	specificsContainer: { justifyContent: "space-evenly", height: "100%" },
	name: { marginVertical: 0, color: Colors.primary, fontSize: 18 },
	quantity: { marginVertical: 0 },
	priceContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
	priceHeader: { marginVertical: 0 },
	priceAmount: { fontSize: 16, marginVertical: 0 },
	deleteContainer: { justifyContent: "space-evenly", height: "100%", alignItems: "center", paddingRight: Padding.xl }
})

export default CartItem