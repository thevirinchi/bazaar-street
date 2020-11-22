import React, { useCallback, useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Root from '../../components/Views/Root'
import { Margin, Padding } from '../../constants/utility'
import { Colors } from '../../constants/colors'
import { useDispatch, useSelector } from 'react-redux'

import * as productActions from '../../store/actions/product'
import Button from '../../components/Button/Button'

const EditProduct = props => {

	const dispatch = useDispatch()

	const pid = props.navigation.getParam('productId')
	const prod = useSelector(state => state.products.userProds.filter(prod => prod.id === pid))[0]

	const [name, setName] = useState("")
	const [imageURL, setImageURL] = useState("")
	const [desc, setDesc] = useState("")
	const [price, setPrice] = useState("")

	const onSubHandler = () => {
		if (pid) {
			dispatch(productActions.updateProduct(pid, (name ? name : prod.name), (desc ? desc : prod.desc), (imageURL ? imageURL : prod.imageURL)))
		}
		else {
			dispatch(productActions.createProduct(name, desc, imageURL, price))
		}
	}

	return (
		(pid
			?
			<Root>
				<View style={styles.inputContinaer}>
					<Text>Name</Text>
					<TextInput value={name} onChangeText={value => setName(value)} placeholder={prod.name} style={styles.input} />
				</View>
				<View style={styles.inputContinaer}>
					<Text>Image URL</Text>
					<TextInput value={imageURL} onChangeText={value => setImageURL(value)} placeholder={prod.imageURL} style={styles.input} />
				</View>
				<View style={styles.inputContinaer}>
					<Text>Description</Text>
					<TextInput value={desc} onChangeText={value => setDesc(value)} placeholder={prod.desc} style={styles.input} />
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={onSubHandler}>
						<Button lvl={1} text="Add" />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => { props.navigation.pop() }}>
						<Button lvl={2} text="cancel" />
					</TouchableOpacity>
				</View>
			</Root>
			:
			<Root>
				<View style={styles.inputContinaer}>
					<Text>Name</Text>
					<TextInput value={name} onChangeText={value => setName(value)} style={styles.input} />
				</View>
				<View style={styles.inputContinaer}>
					<Text>Image URL</Text>
					<TextInput value={imageURL} onChangeText={value => setImageURL(value)} style={styles.input} />
				</View>
				<View style={styles.inputContinaer}>
					<Text>Description</Text>
					<TextInput value={desc} onChangeText={value => setDesc(value)} style={styles.input} />
				</View>
				<View style={styles.inputContinaer}>
					<Text>Price</Text>
					<TextInput value={price} onChangeText={value => setPrice(value)} style={styles.input} />
				</View>
				<View style={styles.buttonContainer}>
					<TouchableOpacity onPress={onSubHandler}>
						<Button lvl={1} text="Add" />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => { props.navigation.pop() }}>
						<Button lvl={2} text="cancel" />
					</TouchableOpacity>
				</View>
			</Root>
		)
	)
}

const styles = StyleSheet.create({
	inputContinaer: { width: "100%", marginTop: Margin.m },
	input: { paddingHorizontal: Padding.s, paddingVertical: Padding.m, borderBottomColor: Colors.secondary, borderBottomWidth: 2 },
	buttonContainer: { flexDirection: "row", width: "100%", alignItems: "flex-end", justifyContent: "space-between", paddingTop: Padding.xl, flex: 1 }
})

EditProduct.navigationOptions = navData => {

	return {
		headerTitle: navData.navigation.getParam('title')
	}
}

export default EditProduct