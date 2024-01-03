import React from "react";
import { useNavigation } from "expo-router";
import { View, Text, Button } from "react-native";
import { DrawerActions } from "@react-navigation/native";

const Page = () => {
    const navigation = useNavigation()
    const onToggleMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Home</Text>
            <Button title='Toggle menu' onPress={onToggleMenu}/>
        </View>
    )
}
export default Page;