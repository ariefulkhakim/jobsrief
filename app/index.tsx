import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { COLORS, icons, images, SIZES } from "@/constants"
import { ScreenHeaderBtn, Nearbyjobs, Popularjobs, Welcome } from "@/components"
import { useRouter, Stack } from 'expo-router'

const Home = () => {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen
          options={{
              statusBarColor: '#333',
              headerStyle: {
                  backgroundColor: COLORS.lightWhite
              },
              headerShadowVisible: false,
              headerLeft: () => (
                  <ScreenHeaderBtn iconUrl={icons.menu} dimension={20} />
              ),
              headerRight: () => (
                  <ScreenHeaderBtn iconUrl={images.profile} dimension={30} />
              ),
              headerTitle: ''
          }}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flex: 1, padding: SIZES.medium}}>
              <Welcome 
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                handleClik={() => {
                  if (searchTerm) {
                    router.push(`/`);
                  }
                }}
              />
              <Popularjobs/>
              <Nearbyjobs/>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}

export default Home