import React from "react";
import { View, Text } from "react-native";
import { Button } from 'tamagui'
import { Airplay } from '@tamagui/lucide-icons'

const HomePage = () => {
    const onClick = () => {
        console.log('Clicked')
    }
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', gap: 10}}>
            <Text>This is a real home page.</Text>
            <Button
                alignSelf="center" 
                icon={Airplay} 
                size="$6"
                onPress={onClick}>
                Funcionando
            </Button>
        </View>
    )
}

export default HomePage;