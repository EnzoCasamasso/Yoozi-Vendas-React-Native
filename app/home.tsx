import React from "react";
import { View, Text } from "react-native";
import { Button, Theme } from 'tamagui'
import { Home } from '@tamagui/lucide-icons'

const HomePage = () => {
    const onClick = () => {
        console.log('Button home page has been clicked')
    }
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', gap: 10}}>
            <Text>This is a real home page.</Text>
            <Theme name='dark'>
                <Button
                    alignSelf="center" 
                    pressTheme={true}
                    icon={Home} 
                    size="$6"
                    onPress={onClick}>
                    Funcionando
                </Button>
            </Theme>
        </View>
    )
}

export default HomePage;