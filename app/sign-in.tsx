import icons from '@/constants/icons'
import images from '@/constants/images'
import { login } from '@/lib/appwrite'
import { useGlobalContext } from '@/lib/global-provider'
import { Redirect } from 'expo-router'
import React from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Auth = () => {

    const { refetch, loading, isLogged } = useGlobalContext();

    if (!loading && isLogged) return <Redirect href="/" />;

    const handleLogin = async () => {
        const result = await login();
        if (result) {
            refetch();
        } else {
            Alert.alert("Error", "Failed to login");
        }
    };

    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView className='h-full'>
                <View className="w-full items-center mt-3">
                    <Image
                        source={images.onboarding}
                        className="w-full h-[500px]"
                        resizeMode="contain"
                    />
                </View>
                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-200">
                        Welcome To COLO
                    </Text>
                    <Text className="text-2xl font-rubik-bold text-black-300 text-center mt-2">
                        Let&apos;s Get You Closer To {"\n"}
                        <Text className="text-primary-300">Your Ideal Home</Text>
                    </Text>

                    <Text className="text-lg font-rubik text-black-200 text-center mt-8">
                        Login to COLO with Google
                    </Text>
                    <TouchableOpacity
                        onPress={handleLogin}
                        className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-3 mt-3"
                    >
                        <View className="flex flex-row items-center justify-center">
                            <Image
                                source={icons.google}
                                className="w-5 h-5"
                                resizeMode="contain"
                            />
                            <Text className="text-lg font-rubik-medium text-black-300 ml-2">
                                Continue with Google
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Auth