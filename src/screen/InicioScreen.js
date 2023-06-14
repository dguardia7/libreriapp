import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const InicioScreen = ({navigation}) => {
    return (
        <View style={ styles.mainView }>
            <Text style={ {color: 'red', fontSize: 20, margin:20} }>Bienvendios a la libreriApp, aqui encontraras algunos libros de Mario Mendoza</Text>
            <Button
                title="Ir a los detalles"
                onPress={ () => {
                    navigation.navigate("Detalles", {name: "El Quijote"})
                } }
            />
        </View>
    )
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default InicioScreen;