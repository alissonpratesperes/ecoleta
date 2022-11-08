import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Feather as Icon, FontAwesome as FaIcon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

    const Detail = () => {
        const navigation = useNavigation();
        const route = useRoute();
            console.log(route.params);

            function handleNavigateBack() {
                navigation.goBack();
            };

                return (
                    <>
                        <View
                            style={ styles.container }
                        >
                            <TouchableOpacity
                                style={ styles.navigation }
                                    onPress={ handleNavigateBack }
                            >
                                <Icon
                                    name="log-out"
                                        size={ 25 }
                                            color="#34CB79"
                                />
                                    <Text
                                        style={ styles.navigationText }
                                    >
                                        Voltar
                                    </Text>
                            </TouchableOpacity>
                                <View
                                    style={ styles.subContainerContent }
                                >
                                    <Image
                                        style={ styles.pointImage }
                                            source={{ uri: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" }}
                                    />
                                        <Text
                                            style={ styles.pointName }
                                        >
                                            Mercadão do João
                                        </Text>
                                        <Text
                                            style={ styles.pointItems }
                                        >
                                            Lâmpadas, Óleo de Cozinha
                                        </Text>
                                            <View
                                                style={ styles.address }
                                            >
                                                <Text
                                                    style={ styles.addressTitle }
                                                >
                                                    Endereço
                                                </Text>
                                                <Text
                                                    style={ styles.addressContent }
                                                >
                                                    Rio do Sul, SC
                                                </Text>
                                            </View>
                                </View>
                        </View>
                        <View
                            style={ styles.footer }
                        >
                            <RectButton
                                style={ styles.button }
                                    onPress={ () => {} }
                            >
                                <FaIcon
                                    name="whatsapp"
                                        size={ 25 }
                                            color="#FFFFFF"
                                />
                                    <Text
                                        style={ styles.buttonText }
                                    >
                                        WhatsApp
                                    </Text>
                            </RectButton>
                            <RectButton
                                style={ styles.button }
                                    onPress={ () => {} }
                            >
                                <Icon
                                    name="mail"
                                        size={ 25 }
                                            color="#FFFFFF"
                                />
                                    <Text
                                        style={ styles.buttonText }
                                    >
                                        E-mail
                                    </Text>
                            </RectButton>
                        </View>
                    </>
                );
    };

        const styles = StyleSheet.create({
            container: {
                paddingTop: 20 + Constants.statusBarHeight,
                paddingHorizontal: 15,
                flex: 1
            },
            
            navigation: {
                marginLeft: 8,
                flexDirection: "row",
                alignItems: "center"
            },

            navigationText: {
                marginLeft: 7.5,
                fontFamily: "Roboto_500Medium",
                fontSize: 16,
                color: "#6C6C80"
            },

            subContainerContent: {
                marginTop: 24,
                paddingVertical: 15,
                paddingHorizontal: 15,
                flex: 1,
                backgroundColor: "#FFFFFF",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
            },

            pointImage: {
                height: 150,
                width: "100%",
                resizeMode: "cover",
                borderRadius: 10
            },

            pointName: {
                marginTop: 30,
                color: "#322153",
                fontSize: 30,
                fontFamily: "Ubuntu_700Bold"
            },

            pointItems: {
                marginTop: 12,
                fontFamily: "Roboto_400Regular",
                fontSize: 16,
                lineHeight: 23,
                color: "#6C6C80"
            },

            address: {
                marginTop: 30
            },

            addressTitle: {
                fontFamily: "Ubuntu_700Bold",
                fontSize: 20,
                color: "#34CB79"
            },

            addressContent: {
                marginTop: 12,
                fontFamily: "Roboto_400Regular",
                fontSize: 16,
                color: "#6C6C80"
            },

            footer: {
                marginHorizontal: 15,
                marginBottom: 30,
                paddingVertical: 15,
                paddingHorizontal: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#FFFFFF",
                borderTopWidth: StyleSheet.hairlineWidth,
                borderColor: "#F0F0F5",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
            },

            button: {
                height: 50,
                width: '46%',
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#34CB79",
                borderRadius: 10
            },

            buttonText: {
                marginLeft: 10,
                fontFamily: "Roboto_500Medium",
                fontSize: 16,
                color: "#FFFFFF"
            }
        });

            export default Detail;