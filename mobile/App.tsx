import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Roboto_400Regular, Roboto_500Medium } from "@expo-google-fonts/roboto";
import { Ubuntu_700Bold } from "@expo-google-fonts/ubuntu";

import Routes from "./src/routes";

  export default function App() {
    const [ appReady, setAppReady ] = useState(false);

      useEffect(() => {
        (async() => {
          try {
            await SplashScreen.preventAutoHideAsync();

              await Font.loadAsync({ Roboto_400Regular });
              await Font.loadAsync({ Roboto_500Medium });
              await Font.loadAsync({ Ubuntu_700Bold });
          } catch(error) {
            console.warn(error);
          } finally {
            setAppReady(true);
          };
        })();
      }, []);
      
        if (!appReady) {
          return null;
        } else {
          SplashScreen.hideAsync();
        };

          return (
            <>
              <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
                <Routes/>
            </>
          );
  };