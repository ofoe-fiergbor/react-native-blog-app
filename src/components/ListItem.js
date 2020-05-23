import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native'

export default function ListItem({ item, navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { navigation.navigate("blog", { item }) }}>
                <View style={styles.cardContainer}>
                    <View style={styles.left}>
                        <View style={styles.pinksBG}></View>
                        <View style={styles.whiteBG}></View>
                        <Image source={item.img} style={styles.blogImg} />
                    </View>
                    <View style={styles.right}>
                        <Text style={styles.title}>{item.titleName}</Text>
                        <View style={styles.rightBottom}>
                            <View style={styles.authorContainer}>
                                <Image source={item.profileImg} style={{ width: 25, height: 25, borderRadius: 20, marginRight: 5, alignSelf: 'center' }} />
                                <Text style={{ fontSize: 10, color: 'grey', fontFamily: 'serif', alignSelf: 'center', fontWeight: 'bold' }}>{item.author}</Text>
                            </View>
                            <View style={{ height: 5, width: 5, borderRadius: 10, backgroundColor: 'grey', alignSelf: 'center' }}></View>
                            <Text style={{ fontSize: 8, color: 'grey', fontFamily: 'serif', alignSelf: 'center', fontWeight: '700' }}>{item.time} mins read</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 120,
        marginTop: 5,
        backgroundColor: '#fff',
        elevation: 8,
        marginBottom: 15

    },
    cardContainer: {
        flexDirection: 'row'
    },
    left: {
        flex: 1
    },
    right: {
        flex: 2,
        paddingHorizontal: 15,
        marginVertical: 8
    },
    pinksBG: {
        width: 65,
        height: 75,
        position: "absolute",
        backgroundColor: 'pink'
    },
    whiteBG: {
        height: 90,
        width: 80,
        marginLeft: 9,
        marginTop: 6,
        backgroundColor: '#fff',
        position: 'absolute',

    },
    blogImg: {
        height: 95,
        width: 80,
        marginLeft: 15,
        marginTop: 12
    },
    title: {
        fontSize: 15,
        fontFamily: 'serif',
        fontWeight: 'bold',
        flex: 3,
        textTransform: 'capitalize'
    },
    rightBottom: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between'
    },
    authorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})
