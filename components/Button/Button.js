import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Body from '../Typo/Body'

import { Colors } from '../../constants/colors'

const Button = props => {

	const button = () => {
		switch (props.lvl) {
			case 1:
				return <View style={{ ...styles.buttonPrimary, ...props.style }}><Body lvl={3} text={props.text} style={{ color: Colors.whiteLight }} /></View>
			case 2:
				return <View style={{ ...styles.buttonSecondary, ...props.style }}><Body lvl={3} text={props.text} style={{ color: Colors.primary }} /></View>
			default:
				break;
		}
	}

	return (
		<View style={{ ...props.containerStyle }}>{button()}</View>
	)
}

const styles = StyleSheet.create({
	buttonPrimary: { backgroundColor: Colors.primary, borderColor: Colors.primary, borderRadius: 25, borderWidth: 1.5, minWidth: "40%", justifyContent: "center", alignItems: "center", elevation: 1, shadowColor: Colors.black, shadowOpacity: 0.25, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8 },
	buttonSecondary: { backgroundColor: Colors.whiteLight, borderColor: Colors.primary, borderRadius: 25, borderWidth: 1.5, minWidth: "40%", justifyContent: "center", alignItems: "center", elevation: 1, shadowColor: Colors.black, shadowOpacity: 0.25, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8 },
})

export default Button