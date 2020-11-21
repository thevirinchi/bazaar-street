import React, { useEffect } from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'
import Heading from '../../components/Typo/Heading'
import Body from '../../components/Typo/Body'

const CartItem = props => {

	const product = useSelector(state => state.products.availableProds.find(prod => prod.id === props.id))

	return (
		<View style={{ flexDirection: "row", flex: 1 , backgroundColor: Colors.whiteLight, elevation: 4, margin: Margin.s, borderRadius: 8, overflow: "hidden", alignItems:"center", justifyContent: "space-between"}}>
			<Image source={{ uri: product.imageURL }} style={{ width: Dimensions.get("window").width / 5, height: Dimensions.get("window").height / 8, borderColor: Colors.white, borderWidth: 2, borderRadius: 8, marginRight: Margin.l }} />
			<View style={{justifyContent: "space-evenly", height: "100%"}}>
				<Heading lvl={2} text={product.name} style={{marginVertical: 0}}/>
				<Body lvl={1} text={"Quantity: " + props.quantity} style={{marginVertical: 0}}/>
			</View>
			<View style={{justifyContent: "space-evenly", height: "100%", alignItems: "center", paddingRight: Padding.l}}>
				<Heading lvl={3} text="Total" style={{marginVertical: 0}}/>
				<Body lvl={4} text={"₹" + product.price} style={{ fontSize: 18, backgroundColor: Colors.secondary }} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({})

export default CartItem