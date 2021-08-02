import React from 'react'
import { PlayContainer } from './styles'
import { Text } from '~/components/atoms'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '~/styles/theme'

export const PlayButton = ({ onPress }) => {
  return (
    <PlayContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(12)}
        color={theme.colors.black}
      />
      <Text fontFamily="bold" size={14} >
        Play
      </Text>
    </PlayContainer>
  )
}
