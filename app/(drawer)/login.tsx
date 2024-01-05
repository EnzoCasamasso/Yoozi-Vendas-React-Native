import React, { useEffect } from "react";
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigation } from "expo-router";
import { View, Text } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import { Input, Label, Button, Theme, YStack, XStack } from "tamagui";

interface IFormLogin {
    name: string;
    email: string;
    password: string;
}

export default function LoginPage() {
    const navigation = useNavigation()
    const {
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<IFormLogin>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<IFormLogin> = (data) => console.log(data);

    const onToggleMenu = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    }

    useEffect(() => {
        // console.log('O valor do context é:',test)
    })

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Login</Text>
            <YStack padding="$3" minWidth={300} space="$4">
                <XStack alignItems="center" space="$4">
                    <Label width={90} htmlFor="name">
                        Name
                    </Label>
                    <Controller
                        control={control}
                        rules={{
                            required: true
                        }}
                        name="name"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                flex={1}
                                placeholder="Nome"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                borderColor='#4f46e5' />
                        )}
                    />
                </XStack>

                <XStack alignItems="center" space="$4">
                    <Label width={90} htmlFor="notify">
                        Email
                    </Label>
                    <Controller
                        control={control}
                        rules={{
                            required: true
                        }}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                flex={1}
                                placeholder="Email"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange} />
                        )}
                    />

                </XStack>

                <XStack alignItems="center" space="$4">
                    <Label width={90} htmlFor="notify">
                        Senha
                    </Label>
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        name="password"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Input
                                flex={1}
                                placeholder="Senha"
                                value={value}
                                onBlur={onBlur}
                                onChangeText={onChange} />
                        )}
                    />
                </XStack>
            </YStack>
            <Theme name="dark">
                <Button onPress={handleSubmit(onSubmit)}>Submit</Button>
            </Theme>
            <Button onPress={onToggleMenu}>Toggle Menu</Button>
        </View>
    )
}