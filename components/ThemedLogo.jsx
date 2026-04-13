import { View, Text, Image, useColorScheme } from 'react-native'
import React from 'react'
import LogoDark from '../assets/images/fav1.png'
import LogoLight from '../assets/images/favicon.png'
import { colors } from '../constants/colors';

const ThemedLogo = ({style, ...props}) => {
    const colorScheme = useColorScheme();
    const logo = colorScheme === 'dark' ? LogoDark : LogoLight;
  return (
    <Image source={logo} style={style} {...props} />
  )
}

export default ThemedLogo