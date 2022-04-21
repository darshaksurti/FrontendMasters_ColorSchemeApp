import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
    const { colors, paletteName } = route.params;
    return (
        <View style={styles.viewContainer}>
            <Text style={styles.headingText}>{paletteName}</Text>
            <FlatList
                data={colors}
                keyExtractor={item => item.colorName}
                renderItem={({ item }) => <ColorBox colorName={item.colorName} colorHex={item.hexCode} />}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    viewContainer: {
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: 'white'
    },
    headingText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
});

export default ColorPalette;