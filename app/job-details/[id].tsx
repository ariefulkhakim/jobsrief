import { View, Text, SafeAreaView, ScrollView, ActivityIndicator, RefreshControl } from 'react-native'
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import React, {useCallback, useState} from 'react';
import { Company, JobAbout, JobFooter, JobTabs, ScreenHeaderBtn, Specifics } from "@/components"
import { COLORS, icons, SIZES } from "@/constants"
import useFetch from '@/hook/useFetch';

const JobDetails = () => {
    const params = useLocalSearchParams();
    const router = useRouter();

    const tabs = ["About", "Qualifications", "Responsibilites"]

    const { data, isLoading, error, refetchData } = useFetch('job-details', {
        job_id: params.id,
        extended_publisher_details:false
    })

    const [refreshing, setRefreshing] = useState(false);
    const [activeTab, setActiveTab] = useState(tabs[0])

    const displayTabsContent = () => {
        if (activeTab === "Qualifications") {
            return <Specifics title="Qualifications" data={data} />
        } else if (activeTab === "About") {
            return <JobAbout data={data}/>
        } else {
            return <Specifics title="Responsibilites" data={data} />
        }
    }

    const onRefersh = useCallback(() => {
        setRefreshing(true);
        refetchData();
        setRefreshing(false);
    }, [])
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <Stack.Screen
            options={{
                headerTitle: '',
                headerShadowVisible: false,
                headerStyle: { backgroundColor: COLORS.lightWhite},
                headerBackVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.left} dimension={20} onPressed={() => router.back()}/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={icons.share} dimension={20}/>
                ),
            }}
        />

        <>
            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefersh}/>}>
                {isLoading ? 
                    <ActivityIndicator size="large" color={COLORS.primary} /> 
                : error ? 
                    <Text>Terjadi Error</Text> 
                : data.length === 0 ? 
                    <Text>Tidak Ada Detail Jobs</Text> 
                : <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
                    <Company 
                        comapanyName={data}
                    />
                    <JobTabs 
                        tabs={tabs}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />

                    {displayTabsContent()}
                </View>
                }
            </ScrollView>

            <JobFooter data={data}/>
        </>
    </SafeAreaView>
  )
}

export default JobDetails