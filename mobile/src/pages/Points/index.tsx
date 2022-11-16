import React, { useState, useEffect } from "react";
import Constants from "expo-constants";
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Image, Alert } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { SvgUri } from "react-native-svg";
import * as Location from "expo-location";

import Params from "../../interfaces/Params";
import Point from "../../interfaces/Point";
import Item from "../../interfaces/Item";
import api from "../../services/api";

    const Points = () => {
        const [ points, setPoints ] = useState<Point[]>([]);
        const [ items, setItems ] = useState<Item[]>([]);
        const [ selectedItems, setSelectedItems ] = useState<number[]>([]);
        const [ initialPosition, setInitialPosition ] = useState<[number, number]>([0, 0]);
        const navigation = useNavigation();
        const route = useRoute();
        const routeParams = route.params as Params;

            useEffect(() => {
                async function loadPosition() {
                    const {
                        status
                    } = await Location.requestForegroundPermissionsAsync();

                        if(status !== "granted") {
                            Alert.alert(
                                "Ooops...",
                                "Precisamos da sua permissão para obtermos a localização."
                            );

                                return;
                        }

                    const location = await Location.getCurrentPositionAsync();
                    const {
                        latitude,
                        longitude
                    } = location.coords;

                        setInitialPosition([
                            latitude,
                            longitude
                        ]);
                };

                    loadPosition();
            }, []);
            useEffect(() => {
                api.get("/points", {
                    params: {
                        city: routeParams.typedCity,
                        uf: routeParams.typedFederativeUnit,
                        items: selectedItems
                    }
                }).then(response => {
                    setPoints(
                        response.data.points
                    );
                });
            }, [ selectedItems ]);
            useEffect(() => {
                api.get(
                    "/items"
                ).then(response => {
                    setItems(
                        response.data.serializedItems
                    );
                });
            }, []);

                function handleNavigateBack() {
                    navigation.goBack();
                };
                function handleNavigateToDetail(id: number) {
                    navigation.navigate(
                        "Detail" as never,
                            {
                                point_id: id
                            } as never
                    );
                };
                function handleSelectItem(id: number) {
                    const alreadySelectedItem = selectedItems.findIndex(
                        item => item === id
                    );

                        if(alreadySelectedItem >= 0) {
                            const filteredItems = selectedItems.filter(
                                item => item !== id
                            );

                                setSelectedItems(
                                    filteredItems
                                );
                        } else {
                            setSelectedItems([
                                ...selectedItems,
                                    id
                            ]);
                        };
                    
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
                                                { initialPosition[0] !== 0 && (
                                                    <MapView
                                                        style={ styles.map }
                                                            initialRegion={{
                                                                latitude: initialPosition[0],
                                                                longitude: initialPosition[1],
                                                                    latitudeDelta: 0.014,
                                                                    longitudeDelta: 0.014
                                                            }}
                                                    >
                                                        { points.map(point => (
                                                            <Marker
                                                                style={ styles.mapMarker }
                                                                    key={ String(point.id) }
                                                                        coordinate={{
                                                                            latitude: point.latitude,
                                                                            longitude: point.longitude
                                                                        }}
                                                                            onPress={ () => handleNavigateToDetail(point.id) }
                                                            >
                                                                <View
                                                                    style={ styles.mapMarkerContainer }
                                                                >
                                                                    <Image
                                                                        style={ styles.mapMarkerImage }
                                                                            source={{
                                                                                uri: point.image
                                                                            }}
                                                                    />
                                                                        <Text
                                                                            style={ styles.mapMarkerTitle }
                                                                        >
                                                                            { point.name }
                                                                        </Text>
                                                                </View>
                                                            </Marker>
                                                        )) }
                                                    </MapView>
                                                ) }
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
                                        { items.map(item => (
                                            <TouchableOpacity
                                                style={[
                                                    styles.item,
                                                        selectedItems.includes(item.id) ? styles.selectedItem : { }
                                                ]}
                                                    activeOpacity={ 0.6 }
                                                        key={ String(item.id) }
                                                            onPress={ () => handleSelectItem(item.id) }
                                            >
                                                <SvgUri
                                                    height={ 50 }
                                                        width={ 50 }
                                                            uri={ item.image_url }
                                                />
                                                    <Text
                                                        style={ styles.itemTitle }
                                                    >
                                                        { item.title }
                                                    </Text>
                                            </TouchableOpacity>
                                        )) }
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
                paddingTop: 15,
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
                paddingVertical: 15,
                backgroundColor: "#FFFFFF",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
            },

            itemsContainer: {
                flexDirection: "row"
            },

            item: {
                marginRight: 15,
                padding: 25,
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