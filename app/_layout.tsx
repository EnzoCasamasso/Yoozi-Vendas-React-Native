import '@tamagui/core/reset.css'
import { TamaguiProvider, Theme } from 'tamagui'

import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import tamaguiConfig from '../tamagui.config';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import CustomDrawerContent from './components/CustomDrawerContent';

const DrawerLayout = () => {
    const [loaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    });

    useEffect(() => {
        if (loaded) {
            // can hide splash screen here
        }
    }, [loaded])

    if (!loaded) {
        return null;
    }
    return (
        <TamaguiProvider config={tamaguiConfig}>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Drawer 
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
                    <Drawer.Screen name='home' options={{
                        drawerLabel: 'Real Home',
                        headerTitle: 'Real Home',
                        drawerIcon: ({ size, color }) => (
                            <Ionicons name='home-sharp' size={size} color={color} />
                        )
                    }} />
                </Drawer>
            </GestureHandlerRootView>
        </TamaguiProvider>
    )
}
export default DrawerLayout;