import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { SvgUri } from "react-native-svg";

    const Points = () => {
        const navigation = useNavigation();

            function handleNavigateBack() {
                navigation.goBack();
            };

                return (
                    <>
                        <View
                            style={ styles.container }
                        >
                            <TouchableOpacity
                                onPress={ handleNavigateBack }
                            >
                                <Icon
                                    name="log-out"
                                    size={ 25 }
                                    color="#34CB79"
                                />
                            </TouchableOpacity>
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
                                                initialRegion={ {
                                                    latitude: -28.968611980477235,
                                                    longitude: -51.065032482147224,
                                                    latitudeDelta: 0.014,
                                                    longitudeDelta: 0.014
                                                } }
                                        >
                                            <Marker
                                                coordinate={ {
                                                    latitude: -28.968611980477235,
                                                    longitude: -51.065032482147224
                                                } }
                                            />
                                        </MapView>
                                    </View>
                        </View>
                        <View
                            style={ styles.itemsContainer }
                        >
                            <ScrollView
                                horizontal
                                    showsHorizontalScrollIndicator={ false }
                                        contentContainerStyle={ {
                                            paddingHorizontal: 30
                                        } }
                            >
                                <TouchableOpacity
                                    style={ styles.item }
                                        onPress={ () => {} }
                                >
                                    <SvgUri
                                        height={ 42 }
                                            width={ 42 }
                                                uri="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg"
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
                                        height={ 42 }
                                            width={ 42 }
                                                uri="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg"
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
                                        height={ 42 }
                                            width={ 42 }
                                                uri="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg"
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
                                        height={ 42 }
                                            width={ 42 }
                                                uri="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg"
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
                                        height={ 42 }
                                            width={ 42 }
                                                uri="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg"
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
                                        height={ 42 }
                                            width={ 42 }
                                                uri="http://192.168.1.101:3333/uploads/lampadas_iluminacao.svg"
                                    />
                                        <Text
                                            style={ styles.itemTitle }
                                        >
                                            Lâmpadas
                                        </Text>
                                </TouchableOpacity>
                            </ScrollView>   
                        </View>
                    </>
                );
    };

    const styles = StyleSheet.create({
        container: {
            paddingTop: 20 + Constants.statusBarHeight,
            paddingBottom: 30,
            paddingHorizontal: 30,
            flex: 1
        },
        title: {
            marginTop: 24,
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

        },






        itemsContainer: {
            flexDirection: 'row',
            marginTop: 0,
            marginBottom: 32,
          },

          item: {
            backgroundColor: '#fff',
            borderWidth: 2,
            borderColor: '#eee',
            height: 120,
            width: 120,
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingTop: 20,
            paddingBottom: 16,
            marginRight: 8,
            alignItems: 'center',
            justifyContent: 'space-between',
        
            textAlign: 'center',
          },
          itemTitle: {
            fontFamily: 'Roboto_400Regular',
            textAlign: 'center',
            fontSize: 13,
          },
    });

        export default Points;