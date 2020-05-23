import React from 'react'
import { View, StyleSheet, Text } from "react-native"
import ListItem from '../components/ListItem'

export default function BlogList() {
    return (
        <View style={styles.blogListContainer}>
            <ListItem/>
        </View>
    )
}

const styles = StyleSheet.create({
    blogListContainer:{
        flex: 1,
        padding: 10
    }
})

