import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from "react-native";
import { Ionicons, AntDesign, Feather, EvilIcons } from "@expo/vector-icons";

export default function Blog({ route, navigation }) {
    const { item } = route.params
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerLeft}
                    onClick={() => { navigation.navigate('blogList') }}>
                    <Ionicons name="ios-arrow-back" size={30} color="black" style={{ marginHorizontal: 10, }} />
                    <Text style={styles.headerText}>Beauty</Text>
                </TouchableOpacity>
                <View style={styles.headerRight}>
                    <TouchableOpacity style={{ marginHorizontal: 7 }}>
                        <Feather name="headphones" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginHorizontal: 7 }}>
                        <AntDesign name="hearto" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <EvilIcons name="share-google" size={30} color="black" style={{ marginHorizontal: 7 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.pinkBG}></View>
                <View style={styles.main}>
                    <View style={styles.whiteBG}></View>
                    <Image
                        source={item.img}
                        style={styles.blogImg}
                    />
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>{item.titleName}</Text>
                        <View style={styles.subTitleCtn}>
                            <View style={styles.authorCtn}>
                                <Image source={item.profileImg} style={styles.profileImg} />
                                <Text style={styles.authorName}>{item.author}</Text>
                            </View>
                            <View style={styles.dot}></View>
                            <Text style={styles.time}>{item.time} minutes read</Text>
                        </View>
                    </View>
                    <View style={styles.text}>
                        <Text style={styles.blogArticle}>
                            George Clooney spends his life travelling from company to company firing people. That’s his job. When a company doesn’t have the guts to handle firing itself, it can outsource the task to the company Clooney works for.{'\n'} {'\n'}Clooney is proud of his professionalism. He does his job efficiently and, in a relentlessly spooky way, humanely. He handles the heartbreak he inflicts every day with icy calm and « look on the bright side » pseudo-compassion.{'\n'} {'\n'}In a hire-and-fire economy, someone has to do this kind of thing, so Clooney does it.
                        Out of the blue his employer decides to go digital. From now on the firing will be done remotely via a Skype-like app, a “modernisation” personified by new employee Anna Kendrick.{'\n'}{'\n'} Before the remote firing begins, though, Clooney takes her on a few trips to teach her the psychological ropes of destroying an employee’s life, whether face to face or via a screen.{'\n'} {'\n'}
                        The movie explores the paradox of an experienced human defending old-style human ways of damaging humans.{'\n'} {'\n'} Under Clooney’s wing, Kendrick begins to realise how profoundly destructive her job is going to be, not only to the fired individuals but to herself.{'\n'} {'\n'} She also realises how inadequate her geeky, techy, solutionist outlook on life is. Along the way she discovers how Clooney mitigates or ducks the soullessness of his existence.{'\n'} {'\n'} He has turned airports and efficient travel into a hobby—in fact they’ve come to define him—and gives gimmicky self-help talks in airport lounges. The superficiality of his existence is brought home to him when he falls deeply in love with a fellow frequent flyer who is unwilling to let him, or their relationship, become anything other than superficial.
                        Clooney and Kendrick are outstanding in this disturbing movie.
                    </Text>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 100,
        backgroundColor:'#fff'
    },
    header: {
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between',
    },
    headerLeft: {
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'center',
        flex: 1.2,
        backgroundColor: 'pink'
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
        flex: 1,
        justifyContent: 'flex-end',
        paddingTop: 20,

    },
    headerText: {
        fontFamily: "serif",
        fontSize: 18,
        fontWeight: '700'
    },
    pinkBG: {
        width: 191,
        height: 160,
        backgroundColor: 'pink',
        position: 'absolute'
    },
    whiteBG: {
        height: 200,
        width: 200,
        position: 'absolute',
        backgroundColor: 'white',
        marginLeft: 27,
        marginTop: 12
    },
    main: {
        paddingHorizontal: 30
    },
    blogImg: {
        height: 230,
        width: 290,
        alignSelf: 'center',
        marginTop: 20,
    },
    blogArticle: {
        lineHeight: 19,
    },
    titleText: {
        fontSize: 20,
        fontFamily: 'serif',
        fontWeight: 'bold',
        marginVertical: 5,
    },
    profileImg: {
        height: 25, width: 25,
        borderRadius: 50
    },
    subTitleCtn: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    authorCtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1.1,
        alignItems: 'center',
    },
    dot: {
        width: 5,
        height: 5,
        backgroundColor: 'grey',
        borderRadius: 20,
        alignSelf: 'center',
        marginHorizontal: 10,
    },
    authorName: {
        fontFamily: 'serif',
        fontWeight: '600',
        fontSize: 13,
    },
    time: {
        fontFamily: 'serif',
        alignSelf: 'center',
        flex: 1.6,
        fontSize: 12,
        color: 'grey'

    }
});
