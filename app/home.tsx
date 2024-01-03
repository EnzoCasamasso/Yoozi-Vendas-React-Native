import React from "react";
import { View, Text } from "react-native";
import { Button } from 'tamagui'
import { Home } from '@tamagui/lucide-icons'

const HomePage = () => {
    const onClick = () => {
        console.log('Button home page has been clicked')
    }
    return (
        <View style={{flex:1, alignItems: 'center', justifyContent: 'center', gap: 10}}>
            <Text>This is a real home page.</Text>
            <Button
                alignSelf="center" 
                variant="outlined"
                pressTheme={true}
                shadowColor='black'
                pressStyle={{
                    backgroundColor: 'black'
                }}
                color='white'
                backgroundColor='purple'
                icon={Home} 
                size="$6"
                onPress={onClick}>
                Funcionando
            </Button>
        </View>
    )
}

export default HomePage;