import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import Products from '../../screens/Shop/Products'

const ProductsNavigator = createStackNavigator({
	Products: Products
})

export default createAppContainer(ProductsNavigator)