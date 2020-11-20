import React from 'react'
import { View, StyleSheet } from 'react-native'

import { Colors } from '../../constants/colors'
import { Padding, Margin } from '../../constants/utility'

const Root = props => {
	return (
		<View style={{ ...styles.container, ...props.style }}>
			{props.children}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.whiteLight,
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		paddingVertical: Padding.m,
		paddingHorizontal: Padding.l
	},
})

export default Root