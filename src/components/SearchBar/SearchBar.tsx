import React from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import SearchIcon from '../../assets/svg/SearchIcon';

const SearchBar = () => (
    <View style={styles.searchContainer}>
        <SearchIcon/>
        <TextInput
          placeholder="Search Product.."
        />
    </View>
);

const styles = StyleSheet.create({
    searchContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 8,
    }
});

export default SearchBar;