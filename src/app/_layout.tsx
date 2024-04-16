import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../../tamagui.config';
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Drawer } from 'expo-router/drawer';
import TestProvider from '../context/TesteContext';
 
const RootLayout = () => {
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
            <TestProvider>
                <Drawer>
                    <Drawer.Screen 
                        name='(drawer)' 
                        options={{ headerShown: false }} />
                </Drawer>
            </TestProvider>
        </TamaguiProvider>
    )
}

export default RootLayout