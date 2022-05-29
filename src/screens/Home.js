import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Pressable } from 'react-native';
import { colors } from '../theme/colors';
import { spacing } from '../theme/spacing';
import { typography } from '../theme/typography';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.logoArea}>
                <View style={styles.logoImage}>
                    <Image
                        source={require('./../../assets/images/logo.png')}
                    />
                </View>
            </View>
            <View style={styles.textArea}>
                <View style={styles.textImage}>
                    <Image
                        source={require('./../../assets/images/rectangle.png')}
                    />
                </View>
                <Text style={styles.textHeadline}>Non-Contact {"\n"} Deliveries</Text>
                <Text style={styles.textDetails}>When placing an order, select the option "Contactless delivery" and the courier will leave your order at the door.</Text>

                <Pressable style={styles.button}
                    onPress={() => {
                        navigation.navigate("Details");
                    }}
                >
                    <Text style={styles.buttonText}>ORDER NOW</Text>
                </Pressable>

                <Text style={styles.dismissText}>Dismiss</Text>
            </View>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.violet,
    },
    logoArea: {
        height: '40%',
    },
    logoImage: {
        marginTop: 70,
        marginLeft: 35,
        backgroundColor: colors.greenSoft,
        padding: spacing[8],
        width: 90,
        borderRadius: 50
    },
    textArea: {
        backgroundColor: colors.whiteAsh,
        height: '60%',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        padding: spacing[10],
        alignItems: 'center',
        // justifyContent: 'center',
    },
    textImage: {
        backgroundColor: colors.white,
        padding: spacing[8],
        width: 100,
        borderRadius: 50
    },
    textHeadline: {
        textAlign: 'center',
        marginVertical: spacing[5],
        fontSize: spacing[8],
        fontFamily: typography.PrimaryBold,
        fontWeight: 'bold',
        color: colors.navy,
    },
    textDetails: {
        textAlign: 'center',
        color: colors.navy,
        fontSize: spacing[4],
        marginBottom: spacing[10],
        lineHeight: spacing[5],
    },
    button: {
        backgroundColor: colors.softGreen,
        width: "100%",
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonText: {
        textAlign: 'center',
        color: colors.white,
        fontWeight: 'bold',
        fontSize: spacing[4],
    },
    dismissText: {
        color: colors.navy,
        fontSize: spacing[4],
        marginTop: spacing[8],
        textTransform: 'uppercase'
    }
})

