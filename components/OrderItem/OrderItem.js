import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Colors } from '../../constants/colors'
import { Margin, Padding } from '../../constants/utility'
import Button from '../Button/Button'
import Body from '../Typo/Body'
import CartItem from '../../components/CartItem/CartItem'

const OrderItem = props => {

	const [showDetails, toggleShowDetails] = useState(false)

	const renderProduct = itemData => {
		return (
			<CartItem
				id={itemData.item.id}
				quantity={itemData.item.quantity}
				price={itemData.item.sum}
				editable={false}
			/>
		)
	}

	return (
		<View style={styles.orderContainer}>
			<View style={styles.orderDetailsContainer}>
				<Body lvl={1} text={props.id} style={styles.noMarginVertical} />
				<Body lvl={2} text={props.date} style={styles.noMarginVertical} />
			</View>
			<View style={styles.actionContainer}>
				<View style={styles.totalContainer}>
					<Body lvl={1} text="Total: " style={styles.noMarginVertical} />
					<Body lvl={4} text={"₹" + props.amount.toFixed(2)} style={styles.noMarginVertical} />
				</View>
				<TouchableOpacity onPress={() => { toggleShowDetails(prevState => !prevState) }}>
					<Button lvl={1} text={showDetails ? "hide details" : "show details"} />
				</TouchableOpacity>
			</View>
			{showDetails
				?
				<View style={styles.orderItemsContainer}>
					<FlatList numColumns={1} renderItem={renderProduct} data={props.items} backgroundColor={Colors.whiteLight} width={"100%"} />
				</View>
				:
				<View></View>
			}
		</View>
	)
}

const styles = StyleSheet.create({
	orderContainer: { flex: 1, alignItems: "center", justifyContent: "space-evenly", backgroundColor: Colors.whiteLight, elevation: 4, shadowColor: Colors.black, shadowOpacity: 0.25, shadowOffset: { width: 0, height: 4 }, shadowRadius: 8, marginBottom: Margin.m, paddingHorizontal: Padding.xl, paddingVertical: Padding.l },
	orderDetailsContainer: { width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: Padding.l },
	noMarginVertical: { marginVertical: 0 },
	actionContainer: { width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingBottom: Padding.s },
	totalContainer: { flexDirection: "row", alignItems: "center", justifyContent: "flex-start", borderColor: Colors.secondary, borderWidth: 2, borderRadius: 8, paddingHorizontal: Padding.l, paddingVertical: Padding.m },
	orderItemsContainer: { width: "100%", flex: 1, paddingTop: Padding.l }
})

export default OrderItem