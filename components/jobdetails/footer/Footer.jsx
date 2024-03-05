import React from 'react'
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native'

import styles from './footer.style'
import { icons } from '@/constants'

const Footer = (props) => {
  let dataParams = props?.data[0]?.job_google_link ?? ""
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.applyBtn} onPress={() => {
        if (dataParams === "") {
          alert("Link Tidak Tersedia")
        } else {
          Linking.openURL(dataParams);
        }
      }}>
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Footer