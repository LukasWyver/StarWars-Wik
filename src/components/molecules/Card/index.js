import React from 'react'
import { CardContainer, CardImage } from './styles'
import { useNavigation } from '@react-navigation/native'

export const Card = ({ item }) => {
  const navigation = useNavigation()
  return (
    <CardContainer onPress={() => navigation.navigate('Datail')}>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}
