import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

import Body from '../Typo/Body'

const Product = props => {
	return (
		<View style={{width: "100%", flex: 1, alignItems:"center", justifyContent:"center", marginVertical: 8}}>
			<Image source={{uri: props.imageUrl}} style={{width: "80%", height: 300}}/>
			<Body lvl={1} text={props.name}/>
			<Body lvl={4} text={props.price}/>
		</View>
	)
}

const styles = StyleSheet.create({

})

export default Product