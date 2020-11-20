import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

import Body from '../Typo/Body'
import Button from '../Button/Button'

import { Colors } from '../../constants/colors'
import { Margin } from '../../constants/utility'

const Product = props => {
	return (
		<View style={{ ...styles.container }}>
			<View style={{ ...styles.imageContainer }} onPress={() => { props.onOpenHandler(props.id) }}><Image source={{ uri: props.imageUrl }} style={{ ...styles.image }} /></View>
			<TouchableOpacity onPress={() => { props.onAddHandler(props.id) }}>
				<View style={{ ...styles.button }}>
					<Body lvl={3} text="Add to cart" />
				</View>
			</TouchableOpacity>
			<View style={{ ...styles.nameContainer }}><Body lvl={1} text={props.name} style={{ marginVertical: 0 }} /></View>
			<View style={{ ...styles.priceContainer }}><Body lvl={4} text={"₹" + props.price} /></View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { width: "100%", flex: 1, justifyContent: "center", marginHorizontal: Margin.s, marginBottom: Margin.l },
	imageContainer: { width: "100%", alignItems: "center" },
	image: { width: "100%", height: 200 },
	nameContainer: { width: "100%", alignItems: "center" },
	priceContainer: { width: "100%", alignItems: "center" },
	button: { borderColor: Colors.black, borderWidth: 1.5, width: "100%", justifyContent: "center", alignItems: "center" }
})

export default Product