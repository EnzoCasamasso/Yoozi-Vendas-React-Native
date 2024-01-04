import '@tamagui/core/reset.css'

import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from '../../components/CustomDrawerContent';

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer 
                drawerContent={CustomDrawerContent}
                screenOptions={{
                    drawerHideStatusBarOnOpen: true,
                    drawerActiveTintColor: '#4f46e5',
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
                        <Ionicons name='home-sharp' size={size} color={color} />
                    )
                }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}
export default DrawerLayout;