import React from 'react';
import { Button, View, Text, StyleSheet, Image, Dimensions  } from 'react-native';
import { Card } from 'react-native-elements';

const DetalleScreen = ({navigation, route}) => {
    console.log(route.params)
    const params = route.params
    const books = [
        {
            id: 1,
            name: 'El libro de las revelaciones',
            uri: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1493055340i/34948716.jpg'
        },
        {
            id: 2,
            name: 'Scorpio City',
            uri: 'https://m.media-amazon.com/images/I/91rHzvyvh8L._AC_UF1000,1000_QL80_.jpg'
        },
        {
            id: 3,
            name: 'Lady Masacre',
            uri: 'https://images.cdn2.buscalibre.com/fit-in/360x360/8e/65/8e65e714676efeec30745c987c032c87.jpg'
        },
        {
            id: 4,
            name: 'Diario del fin del mundo',
            uri: 'https://images.cdn3.buscalibre.com/fit-in/360x360/04/1e/041e4636b3e0fa4d7851dc384628b558.jpg'
        },
        {
            id: 5,
            name: 'Akelarre',
            uri: 'https://image.cdn1.buscalibre.com/60e395d58463b5f3158bf3fc.__RS360x360__.jpg'
        },
    ]

    const renderBooks = () => {
        return books.map((book, index) => (
            <Card style={ styles.cardContainer} key={index}>
                <Image style={styles.image} source={book.uri} />
                <Text style={{ color: 'blue', fontSize: 20, alignSelf: "center", }}>{book.name}</Text>
            </Card>
        ))
    }

    return (
        <View style={ styles.container }>
            {/* <Text>Estos son los detalles de libreriApp</Text>
            <Text> El libro es: { params.name }</Text>
            <Image
                style={ {
                    width: 100,
                    height: 100,
                } }
                source={ {
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                } }
            />
            <Button
                title="Más detalles"
                onPress={ () => {
                    navigation.push("Detalles")
                } }
            /> */}
            {renderBooks()}
        </View>
    )
};

const windowWidth = Dimensions.get('window').width;
const cardWidth = (windowWidth - 40) / 3; // Ajustamos el espacio según sea necesario

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'space-between',
      },
      cardContainer: {
        width: cardWidth,
        marginBottom: 20,
      },
      image: {
        height: 400,
        width: 300
      },
});

export default DetalleScreen;