import React, { useContext, useEffect } from "react";
import { useNavigation } from "expo-router";
import { View, Text, Button } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import CustomButton from '../../components/ui/CustomButton'
import { TesteContext } from "../../context/TesteContext";

const Page = () => {
    const navigation = useNavigation()
    const {value, test} = useContext(TesteContext)
    const onToggleMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }

    useEffect(() => {
        console.log('O valor do context é:',test)
    })

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <Text>Login</Text>
            <Text>O valor do context é : {test}</Text>
            <Button title='Toggle menu' onPress={onToggleMenu}/>
            <CustomButton 
                label='Custom Button' 
                color='#fcd34d'/>
        </View>
    )
}
export default Page;