import React from 'react'

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'

import Products from '../../screens/Shop/Products'
import ProductDetails from '../../screens/Shop/Product'
import Cart from '../../screens/Shop/Cart'
import Orders from '../../screens/Shop/Orders'
import UserProducts from '../../screens/User/UserProducts'
import EditProduct from '../../screens/User/EditProduct'

import { Colors } from '../../constants/colors';

import { Ionicons } from '@expo/vector-icons'

const ShopNavigator = createStackNavigator({
	Products: Products,
	ProductDetails: ProductDetails,
	Cart: Cart
}, {
	navigationOptions: {
		drawerIcon: drawerConfig => <Ionicons name="ios-cart" size={23} color={drawerConfig.tintColor} />
	},
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Colors.primary
		},
		headerTintColor: Colors.whiteLight
	}
})

const OrdersNavigator = createStackNavigator({
	Orders: Orders
}, {
	navigationOptions: {
		drawerIcon: drawerConfig => <Ionicons name="ios-list" size={23} color={drawerConfig.tintColor} />
	},
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Colors.primary
		},
		headerTintColor: Colors.whiteLight
	}
})

const UserNavigator = createStackNavigator({
	UserProducts: UserProducts,
	EditProduct: EditProduct
}, {
	navigationOptions: {
		drawerIcon: drawerConfig => <Ionicons name="ios-create" size={23} color={drawerConfig.tintColor} />
	},
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Colors.primary
		},
		headerTintColor: Colors.whiteLight
	}
})


const DrawerNavigator = createDrawerNavigator({
	Products: ShopNavigator,
	Orders: OrdersNavigator,
	User: UserNavigator
})

export default createAppContainer(DrawerNavigator)