import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const DrawerLayout = () => {
    return(
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer screenOptions={{}}>
                <Drawer.Screen name='index' options={{
                    drawerLabel: 'Home'
                }} />
                <Drawer.Screen name='home' options={{
                    drawerLabel: 'Real Home'
                }} />
            </Drawer>
        </GestureHandlerRootView>
    )
}
export default DrawerLayout;