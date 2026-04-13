import { View, useColorScheme } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import React from 'react'
import { colors } from '../constants/colors';

const ThemedView = ({style, safe=false, ...props}) => {
    const colorScheme = useColorScheme();
    const theme = colors[colorScheme ?? 'light'];
    if(!safe) return (
        <View 
        style={[{backgroundColor: theme.background},style]}
        {...props}
        />
    )
    const insets = useSafeAreaInsets();
    return (
        <View 
        style={[{backgroundColor: theme.background,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        },style]}
        {...props}
        />
    )
}

export default ThemedView