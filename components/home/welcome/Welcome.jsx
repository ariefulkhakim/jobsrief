import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '@/constants'

import styles from './welcome.style'

const Welcome = (props) => {
  const router = useRouter();
  const { searchTerm, setSearchTerm } = props
  const [activeJobType, setActiveJobType] = useState('Full-Time')

  const jobTypes = ["Full-Time", "Part Time", "Freelance", "Contractor"];
  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName}>Hello Arieful Khakim</Text>
          <Text style={styles.welcomeMessage}>Find your perfect jobs</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={() => {
                router.push(`/search/${searchTerm}`)
                setSearchTerm('');
              }}>
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

export default Welcome