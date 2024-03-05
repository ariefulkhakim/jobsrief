import React from 'react'
import { View, Text } from 'react-native'

import styles from './about.style'

const About = (props) => {
  let dataParams = props?.data[0].job_description ?? "Tidak ada deskripsi nya"
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>
      
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{dataParams}</Text>
      </View>
    </View>
  )
}

export default About