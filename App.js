import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import ShopNavigator from './navigation/Shop/ShopNavigator'

import productsReducer from './store/reducers/product'
import cartReducer from './store/reducers/cart';
import orderReducer from './store/reducers/orders'

const rootReducer = combineReducers({
	products: productsReducer,
	cart: cartReducer,
	orders: orderReducer
})

const store = createStore(rootReducer)

let fonts = {
	'major-regular': require('./assets/fonts/MajorMonoDisplay-Regular.ttf'),
	'nunito-black': require('./assets/fonts/NunitoSans-Black.ttf'),
	'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
	'nunito-extra-bold': require('./assets/fonts/NunitoSans-ExtraBold.ttf'),
	'nunito-italic': require('./assets/fonts/NunitoSans-Italic.ttf'),
	'nunito-light': require('./assets/fonts/NunitoSans-Light.ttf'),
	'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
	'nunito-semi-bold': require('./assets/fonts/NunitoSans-SemiBold.ttf')
};

export default function App() {

	const [dataLoaded, setDataLoaded] = useState(false)

	const loadFonts = async () => {
		await Font.loadAsync(fonts)
		setDataLoaded(true)
	}

	useEffect(() => {
		loadFonts()
	}, [])

	return (
		(dataLoaded
			?
			<Provider store={store}><ShopNavigator /></Provider>
			:
			<AppLoading />
		)
	);
}