import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Body from '../Typo/Body'

import {Colors} from '../../constants/colors'

const Button = props => {
	return (
		<TouchableOpacity>
			<View style={{...styles.container}}>
				<Body lvl={3} text={props.text}/>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		borderColor: Colors.black,
		borderWidth: 1.5,
		width: "100%",
		justifyContent: "center",
		alignItems: "center"
	}
})

export default Button