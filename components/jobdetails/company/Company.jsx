import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './company.style'
import { icons } from '@/constants'
import {checkImageURL} from "@/utils/checkImage"

const Company = (data) => {
  let dataParams = data?.comapanyName[0]
  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
          <Image
            source={{
              uri: dataParams?.employer_logo
            }}
            style={styles.logoImage}
          />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>{dataParams?.job_title}</Text>
      </View>

      <View style={styles.companyInfoBox}>
        <Text style={styles.companyName}>{dataParams?.employer_name} / </Text>
        <View style={styles.locationBox}>
          <Image
            source={icons.location}
            resizeMode='contain'
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>{dataParams?.job_country}</Text>
        </View>
      </View>
    </View>
  )
}

export default Company