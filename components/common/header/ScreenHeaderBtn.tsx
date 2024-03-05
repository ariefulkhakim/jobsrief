import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'
import { SIZES } from '@/constants'

interface ScreenHeaderBtnParams {
  iconUrl?: string | any,
  dimension?: number,
  onPressed?: () => void
}
const ScreenHeaderBtn = ({iconUrl, dimension, onPressed}: ScreenHeaderBtnParams) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPressed}>
      <Image
        source={iconUrl}
        resizeMode='cover'
        style={{width: dimension, height: dimension, borderRadius: SIZES.small / 1.25,}}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn