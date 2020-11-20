import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import Products from '../../screens/Shop/Products'
import ProductDetails from '../../screens/Shop/Product'
import { Colors } from '../../constants/colors';

const ShopNavigator = createStackNavigator({
	Products: Products
}, {
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Colors.primary
		},
		headerTintColor: Colors.whiteLight
	}
})

export default createAppContainer(ShopNavigator)