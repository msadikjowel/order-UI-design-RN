import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, ImageBackground, Pressable } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Details = () => {
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.imageArea}>
                <ImageBackground source={require('../../assets/images/leaves.png')} resizeMode="cover" style={styles.image} />
            </View>
            <View style={styles.textArea}>
                <Text style={styles.textHeadline}>Boston Lettuce</Text>
                <View style={styles.combineText}>
                    <Text style={styles.price}>1.10</Text>
                    <Text style={styles.priceTag}>€ / piece</Text>
                </View>

                <Text style={styles.perPrice}>~ 150 gr/ piece</Text>

                <Text style={styles.headline2}>Spain</Text>
                <Text style={styles.textDetails}>Lettuce is an annual plant of the daisy family, Asteraceae. It is most often grown as a leaf vegetable, but sometimes for its stem and seeds. Lettuce is most often used for salads, althoght it is also seen in other kinds of food, such as soups, sandwiches, and wraps. It can also be grilled.</Text>

                <View>

                    <Pressable style={styles.button}>
                        <AntDesign name="shoppingcart" size={24} color="black" />
                        <Text style={styles.buttonText}>ADD TO CART</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageArea: {
        height: '40%'
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    textArea: {
        backgroundColor: colors.whiteAsh,
        height: '70%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingVertical: spacing[10],
        paddingHorizontal: spacing[5],
        marginTop: -45
    },
    textHeadline: {
        fontSize: spacing[8],
        fontFamily: typography.PrimaryBold,
        fontWeight: 'bold',
        color: colors.navy,
        marginVertical: spacing[5]
    },
    combineText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: spacing[2]
    },
    price: {
        marginRight: spacing[4],
        fontSize: spacing[8],
        fontWeight: 'bold'
    },
    priceTag: {
        fontSize: spacing[6],
        fontWeight: '400',
        color: colors.violetLight,
    },
    perPrice: {
        color: colors.softGreen,
        fontSize: spacing[4],
        marginBottom: spacing[4]
    },
    headline2: {
        fontWeight: 'bold',
        fontSize: spacing[6],
        marginVertical: spacing[4]
    },
    textDetails: {
        textAlign: 'justify',
        color: colors.navy,
        fontSize: spacing[4],
        marginBottom: spacing[10],
        lineHeight: spacing[5],
    },
    button: {
        backgroundColor: colors.softGreen,
        width: "100%",
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: colors.white,
        fontWeight: 'bold',
        fontSize: spacing[4],
        marginLeft: spacing[5]
    },

})