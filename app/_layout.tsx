import { Slot } from "expo-router";
import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import { Roboto_400Regular as Roboto } from "@expo-google-fonts/roboto";
import { Cairo_400Regular as Cairo } from "@expo-google-fonts/cairo";
import * as SplashScreen from 'expo-splash-screen';

export default function Layout () {
    const [fontsLoaded] = useFonts({
        Roboto,
        Cairo
    });

    useEffect(()=> {
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }

        prepare();
    }, []);

    const onLayoutView = useCallback(async ()=> {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Slot onLayout={onLayoutView} />
    );
}