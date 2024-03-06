import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import { COLORS, SIZES } from '@/constants'
import NearByJobCard from "@/components/common/cards/nearby/NearbyJobCard"

import useFetch from "@/hook/useFetch";

import styles from './nearbyjobs.style'

const NearByjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  })

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? 
          <ActivityIndicator size="large" color={COLORS.primary} /> 
        : error ? 
        <Text>Terjadi Error</Text> : 
          // <FlatList
          //   data={data}
          //   renderItem={({item}) => (
          //     <NearByJobCard item={item} handleCardPress={() => router.push(`job-details/${item.job_id}`)}/>
          //   )}
          //   keyExtractor={item => item?.job_id}
          //   contentContainerStyle={{ rowGap: SIZES.medium}}
          // />
          data.map((item, index) => (
            <NearByJobCard key={item + index} item={item} handleCardPress={() => router.push(`job-details/${item.job_id}`)}/>
          ))
        }
      </View>
    </View>
  )
}

export default NearByjobs