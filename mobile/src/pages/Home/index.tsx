import React, { useState } from "react";
import { View, Image, StyleSheet, Text, ImageBackground, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

    const Home = () => {
        const [ typedFederativeUnit, setTypedFederativeUnit ] = useState("");
        const [ typedCity, setTypedCity ] = useState("");
        const navigation = useNavigation();

            function handleNavigateToPoints() {
                navigation.navigate(
                    "Points" as never,
                        {
                            typedFederativeUnit,
                            typedCity
                        } as never
                );
            };

                return (
                    <ImageBackground style={ styles.container } source={ require("../../assets/home-background.png") } imageStyle={{ height: 368, width: 274 }}>
                        <View style={ styles.main }>
                            <Image source={ require("../../assets/logo.png") }/>
                                <Text style={ styles.slogan }>
                                    Seu marketplace de coleta de resíduos.
                                </Text>
                                <Text style={ styles.description }>
                                    Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
                                </Text>
                        </View>
                            <View>
                                <TextInput style={[ styles.firstInput, styles.input ]} placeholder="Digite o Estado" maxLength={ 2 } autoCapitalize="characters" autoCorrect={ false } value={ typedFederativeUnit } onChangeText={ setTypedFederativeUnit }/>
                                <TextInput style={ styles.input } placeholder="Digite a Cidade" autoCorrect={ false } value={ typedCity } onChangeText={ setTypedCity }/>
                                    <RectButton style={ styles.button } onPress={ handleNavigateToPoints }>
                                        <View style={ styles.buttonIcon }>
                                            <Text>
                                                <Icon name="log-in" size={ 25 } color="#FFFFFF"/>
                                            </Text> 
                                        </View>
                                            <Text style={ styles.buttonText }>
                                                Entrar
                                            </Text>
                                    </RectButton>
                            </View>
                    </ImageBackground>
                );
    };

        const styles = StyleSheet.create({
            container: {
                padding: 30,
                flex: 1
            },

            main: {
                flex: 1,
                justifyContent: "center"
            },

            slogan: {
                marginTop: 60,
                maxWidth: 260,
                fontFamily: "Ubuntu_700Bold",
                fontSize: 27,
                color: "#322153"
            },

            description: {
                marginTop: 24,
                maxWidth: 260,
                fontFamily: "Roboto_400Regular",
                fontSize: 16,
                color: "#6C6C80",
                lineHeight: 24
            },

            firstInput: {
                marginBottom: 15
            },

            input: {
                paddingHorizontal: 24,
                height: 60,
                fontSize: 16,
                backgroundColor: "#FFFFFF",
                borderRadius: 10
            },

            button: {
                marginTop: 30,
                height: 70,
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#34CB79",
                borderRadius: 10,
                overflow: "hidden"
            },

            buttonIcon: {
                height: 70,
                width: 70,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#31B971"
            },
            
            buttonText: {
                flex: 1,
                textAlign: "center",
                justifyContent: "center",
                fontFamily: "Roboto_500Medium",
                fontSize: 18,
                color: "#FFFFFF"
            }
        });

            export default Home;