import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { View, StyleSheet, TouchableOpacity, Text, Image, Linking } from "react-native";
import { Feather as Icon, FontAwesome as FaIcon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import * as MailComposer from "expo-mail-composer";

import Param from "../../interfaces/Param";
import Data from "../../interfaces/Data";
import api from "../../services/api";

    const Detail = () => {
        const [ data, setData ] = useState<Data>({} as Data);
        const navigation = useNavigation();
        const route = useRoute();
        const routeParams = route.params as Param;
        const message = "Interesse na coleta de resíduos.";

            useEffect(() => {
                api.get(
                    `/points/${routeParams.point_id}`
                ).then(response => {
                    setData(response.data);
                });
            }, []);

                function handleNavigateBack() {
                    navigation.goBack();
                };
                function handleComposeWhatsApp() {
                    Linking.openURL(
                        `whatsapp://send?phone=${data.point.whatsapp}&text=${message}`
                    );
                };
                function handleComposeMail() {
                    MailComposer.composeAsync({
                        recipients: [ data.point.email ],
                            subject: message
                    });
                };

                    if(!data.point) {
                        return null;
                    };  

                        return (
                            <>
                                <View style={ styles.container }>
                                    <TouchableOpacity style={ styles.navigation } onPress={ handleNavigateBack }>
                                        <Icon name="log-out" size={ 25 } color="#34CB79"/>
                                            <Text style={ styles.navigationText }>
                                                Voltar
                                            </Text>
                                    </TouchableOpacity>
                                        <View style={ styles.subContainerContent }>
                                            <Image style={ styles.pointImage } source={{ uri: data.point.image_url }}/>
                                                <Text style={ styles.pointName }>
                                                    { data.point.name }
                                                </Text>
                                                <Text style={ styles.pointItems }>
                                                    { data.items.map(item =>
                                                        item.title
                                                    ).join(
                                                        ", "
                                                    ) }
                                                </Text>
                                                    <View style={ styles.address }>
                                                        <Text style={ styles.addressTitle }>
                                                            Endereço
                                                        </Text>
                                                        <Text style={ styles.addressContent }>
                                                            { data.point.city }, { data.point.uf }
                                                        </Text>
                                                    </View>
                                        </View>
                                </View>
                                <View style={ styles.footer }>
                                    <RectButton style={ styles.button } onPress={ handleComposeWhatsApp }>
                                        <FaIcon name="whatsapp" size={ 25 } color="#FFFFFF"/>
                                            <Text style={ styles.buttonText }>
                                                WhatsApp
                                            </Text>
                                    </RectButton>
                                    <RectButton style={ styles.button } onPress={ handleComposeMail }>
                                        <Icon name="mail" size={ 25 } color="#FFFFFF"/>
                                            <Text style={ styles.buttonText }>
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