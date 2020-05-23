import React from 'react'
import { View, StyleSheet, Text, FlatList } from "react-native"
import ListItem from '../components/ListItem'

export default function BlogList({navigation}) {
    const blogs = [
        {
            titleName: '30 CRAFTS AND ACTIVITIES TO DO WITH KIDS AT HOME',
            img: require('../images/blogImgs/amy-shamblen-pJ_DCj9KswI-unsplash.jpg'),
            profileImg: require('../images/profileimgs/Luffy.jpg'),
            author:'Monkey Luffy',
            time: '4',
            id: '1'
        },
        {
            titleName: 'HOW TO MAKE TISSUE PAPER FLOWER ART WITH KIDS',
            img: require('../images/blogImgs/photo-of-pink-flowers-1266130.jpg'),
            profileImg: require('../images/profileimgs/sanjionepiece.jpg'),
            author:'James Bond',
            time: '5',
            id: '2'
        },
        {
            titleName: 'WHAT ARE SOME COMMON DOUBLE STANDARDS?',
            img: require('../images/blogImgs/closeup-photo-of-silver-iphone-7-plus-with-earpods-1038628.jpg'),
            profileImg: require('../images/profileimgs/flashyFlash.png'),
            author:'Caped Baldy',
            time: '9',
            id: '3'
        },
        {
            titleName: 'WHAT IS THE MOST USELESS FACT YOU KNOW?',
            img: require('../images/blogImgs/green-golden-snake-plant-and-two-aloe-vera-plants-1549201.jpg'),
            profileImg: require('../images/profileimgs/genos.png'),
            author:'Chris Brown',
            time: '8',
            id: '4'
        },
        {
            titleName: 'WHAT IS THE MOST USELESS FACT YOU KNOW?',
            img: require('../images/blogImgs/white-headphones-1037999.jpg'),
            profileImg: require('../images/profileimgs/saitama.jpg'),
            author:'Mary J. Blige',
            time: '6',
            id: '5'
        },
        {
            titleName: 'WHO IS THE GREATEST PERSON HISTORY HAS FORGOTTEN?',
            img: require('../images/blogImgs/woman-holding-donut-with-sprinkles-2801980.jpg'),
            profileImg: require('../images/profileimgs/SweetMaskProfile.png'),
            author:'Steve Jobs',
            time: '3',
            id: '6'
        }
    ]
    return (
        <View style={styles.blogListContainer}>
            <FlatList 
            showsVerticalScrollIndicator={false}
            data={blogs}
            renderItem={
                ({item})=>{
                    return <ListItem item={item} navigation={navigation}/>
                }
            }
            keyExtractor={(item) => item.id}/>
        </View>
    )
}

const styles = StyleSheet.create({
    blogListContainer:{
        flex: 1,
        padding: 10,
        backgroundColor:'#fff'
    }
})

