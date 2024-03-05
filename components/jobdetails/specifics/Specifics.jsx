import React from 'react'
import { View, Text } from 'react-native'

import styles from './specifics.style'

const Specifics = (props) => {
  let dataParams = props?.data[0].job_highlights?.Qualifications ?? ['N/A']
  let dataParamsRes = props?.data[0].job_highlights?.Responsibilities ?? ['N/A']

  let dataFinal = props.title === "Qualifications" ? dataParams : dataParamsRes;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>

      <View style={styles.pointsContainer}>
        {dataFinal.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot}></View>
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}

      </View>
    </View>
  )
}

export default Specifics