import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './nearbyjobcard.style'

const NearByJobCard = ({item, handleCardPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleCardPress}
    >
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: item.employer_logo
          }}
          resizeMode='contain'
          style={styles.logImage}
        />
      </TouchableOpacity>

      {/* <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text> */}

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>{item.job_title}</Text>
        <Text style={styles.jobType} numberOfLines={1}>{item.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearByJobCard