import { Text, XStack, YStack } from "tamagui";

export default function Configuration() {
    return (
        <YStack 
            flex={1} 
            justifyContent="center" 
            alignItems="center">
            <XStack alignItems="center">
                <Text>Configurações</Text>
            </XStack>
        </YStack>
    )
}