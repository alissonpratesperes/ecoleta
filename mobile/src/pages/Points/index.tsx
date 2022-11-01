import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { SvgUri } from "react-native-svg";

    const Points = () => {
        const navigation = useNavigation();

            function handleNavigateBack() {
                navigation.goBack();
            };
            function handleNavigateToDetail() {
                navigation.navigate(
                    "Detail" as never
                );
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
                                    <Text
                                        style={ styles.title }
                                    >
                                        😃 Bem-vindo.
                                    </Text>
                                    <Text
                                        style={ styles.description }
                                    >
                                        Encontre no mapa um ponto de coleta.
                                    </Text>
                                        <View
                                            style={ styles.mapContainer }
                                        >
                                            <MapView
                                                style={ styles.map }
                                                    initialRegion={{
                                                        latitude: -28.968611980477235,
                                                        longitude: -51.065032482147224,
                                                        latitudeDelta: 0.014,
                                                        longitudeDelta: 0.014
                                                    }}
                                            >
                                                <Marker
                                                    style={ styles.mapMarker }
                                                        coordinate={{
                                                            latitude: -28.968611980477235,
                                                            longitude: -51.065032482147224
                                                        }}
                                                            onPress={ handleNavigateToDetail }
                                                >
                                                    <View
                                                        style={ styles.mapMarkerContainer }
                                                    >
                                                        <Image
                                                            style={ styles.mapMarkerImage }
                                                                source={{
                                                                    uri: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                                                                }}
                                                        />
                                                            <Text
                                                                style={ styles.mapMarkerTitle }
                                                            >
                                                                Mercado
                                                            </Text>
                                                    </View>
                                                </Marker>
                                            </MapView>
                                        </View>
                                </View>
                        </View>
                            <View
                                style={ styles.subContainerItems }
                            >
                                <View
                                    style={ styles.itemsContainer }
                                >
                                    <ScrollView
                                        horizontal
                                            showsHorizontalScrollIndicator={ false }
                                                contentContainerStyle={{
                                                    paddingHorizontal: 30
                                                }}
                                    >
                                        <TouchableOpacity
                                            style={ styles.item }
                                                onPress={ () => {} }
                                        >
                                            <SvgUri
                                                height={ 50 }
                                                    width={ 50 }
                                                        uri="http://192.168.1.103:3333/uploads/lampadas_iluminacao.svg"
                                            />
                                                <Text
                                                    style={ styles.itemTitle }
                                                >
                                                    Lâmpadas
                                                </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={ styles.item }
                                                onPress={ () => {} }
                                        >
                                            <SvgUri
                                                height={ 50 }
                                                    width={ 50 }
                                                        uri="http://192.168.1.103:3333/uploads/lampadas_iluminacao.svg"
                                            />
                                                <Text
                                                    style={ styles.itemTitle }
                                                >
                                                    Lâmpadas
                                                </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={ styles.item }
                                                onPress={ () => {} }
                                        >
                                            <SvgUri
                                                height={ 50 }
                                                    width={ 50 }
                                                        uri="http://192.168.1.103:3333/uploads/lampadas_iluminacao.svg"
                                            />
                                                <Text
                                                    style={ styles.itemTitle }
                                                >
                                                    Lâmpadas
                                                </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={ styles.item }
                                                onPress={ () => {} }
                                        >
                                            <SvgUri
                                                height={ 50 }
                                                    width={ 50 }
                                                        uri="http://192.168.1.103:3333/uploads/lampadas_iluminacao.svg"
                                            />
                                                <Text
                                                    style={ styles.itemTitle }
                                                >
                                                    Lâmpadas
                                                </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={ styles.item }
                                                onPress={ () => {} }
                                        >
                                            <SvgUri
                                                height={ 50 }
                                                    width={ 50 }
                                                        uri="http://192.168.1.103:3333/uploads/lampadas_iluminacao.svg"
                                            />
                                                <Text
                                                    style={ styles.itemTitle }
                                                >
                                                    Lâmpadas
                                                </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity
                                            style={ styles.item }
                                                onPress={ () => {} }
                                        >
                                            <SvgUri
                                                height={ 50 }
                                                    width={ 50 }
                                                        uri="http://192.168.1.103:3333/uploads/lampadas_iluminacao.svg"
                                            />
                                                <Text
                                                    style={ styles.itemTitle }
                                                >
                                                    Lâmpadas
                                                </Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                </View>
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

        title: {
            fontFamily: "Ubuntu_700Bold",
            fontSize: 20
        },

        description: {
            marginTop: 12,
            fontFamily: "Roboto_400Regular",
            fontSize: 16,
            color: "#6C6C80"
        },

        mapContainer: {
            marginTop: 24,
            width: "100%",
            flex: 1,
            borderRadius: 10,
            overflow: "hidden"
        },

        map: {
            height: "100%",
            width: "100%"
        },

        mapMarker: {
            height: 80,
            width: 90
        },

        mapMarkerContainer: {
            height: 70,
            width: 90,
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#34CB79",
            borderRadius: 10,
            overflow: "hidden"
        },

        mapMarkerImage: {
            height: 45,
            width: 90,
            resizeMode: "cover",
        },

        mapMarkerTitle: {
            flex: 1,
            fontFamily: "Roboto_400Regular",
            fontSize: 14,
            color: "#FFF",
            lineHeight: 23
        },

        subContainerItems: {
            marginHorizontal: 15,
            marginBottom: 30,
            paddingTop: 15,
            paddingBottom: 30,
            backgroundColor: "#FFFFFF",
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10
        },

        itemsContainer: {
            marginTop: 0,
            marginBottom: 0,
            flexDirection: "row"
        },

        item: {
            marginRight: 15,
            padding: 30,
            height: 150,
            width: 150,
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
            backgroundColor: "#F0F0F5",
            borderWidth: 2,
            borderColor: "#F0F0F5",
            borderRadius: 10 
        },

        itemTitle: {
            fontFamily: "Roboto_400Regular",
            fontSize: 14,
            textAlign: "center",
        },

        selectedItem: {
            backgroundColor: "#E1FAEC",
            borderWidth: 2,
            borderColor: "#34CB79"
        }
    });

        export default Points;