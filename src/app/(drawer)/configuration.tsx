import { useNavigation } from "expo-router";
import { Button, Text, XStack, YStack } from "tamagui";

export default function Configuration() {
    const router = useNavigation()
    return (
        <YStack 
            flex={1} 
            justifyContent="center" 
            alignItems="center">
            <XStack 
                alignItems="center">
                <Text>Configurações</Text>
            </XStack>
            <XStack pt={10}>
                <Button
                    backgroundColor={"#f59e0b"}
                    borderCurve="circular"
                >Go to Home</Button>
            </XStack>
        </YStack>
    )
}