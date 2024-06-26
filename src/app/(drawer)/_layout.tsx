import '@tamagui/core/reset.css'

import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from '../../components/CustomDrawerContent';

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer
                drawerContent={CustomDrawerContent}
                screenOptions={{
                    drawerHideStatusBarOnOpen: true,
                    drawerActiveTintColor: '#f59e0b',
                    drawerLabelStyle: { marginLeft: -20 },
                }}>
                <Drawer.Screen name='index' options={{
                    drawerLabel: 'Home',
                    headerTitle: 'Home',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name='home-outline' size={size} color={color} />
                    )
                }} />
                <Drawer.Screen name='login' options={{
                    drawerLabel: 'Login',
                    headerTitle: 'Login Page',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name='person-outline' size={size} color={color} />
                    )
                }} />
                <Drawer.Screen name='configuration' options={{
                    drawerLabel: 'Configurações',
                    headerTitle: 'Configurações',
                    drawerIcon: ({ size, color }) => (
                        <Ionicons name='options-outline' size={size} color={color} />
                    )
                }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}
export default DrawerLayout;
