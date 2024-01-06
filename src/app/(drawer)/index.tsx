import React from "react";
import { Button, Theme, YStack, Text } from 'tamagui'
import { Home } from '@tamagui/lucide-icons'

export default function HomePage() {
    const onClick = () => {
        console.log('Button home page has been clicked')
    }
    return (
        <YStack>
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
        </YStack>
    )
}

