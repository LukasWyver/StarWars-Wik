import React from 'react'
import { FlatList } from 'react-native'
import { Card } from '../../molecules'

const FAKE_DATA = [
  {
    id: 0,
    image_url:
      'https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg',
  },
  {
    id: 1,
    image_url:
      'https://th.bing.com/th/id/R.e65b58fa021571f830f737d0b84108df?rik=tkT%2fPSXIDDZQvg&pid=ImgRaw',
  },
  {
    id: 2,
    image_url:
      'https://th.bing.com/th/id/OIP.xSTJqlBK4iSk5c2fmvo7GwHaEK?pid=ImgDet&w=1920&h=1080&rs=1',
  },
]

export const HomeList = () => {
  return (
    <FlatList
      horizontal
      data={FAKE_DATA}
      renderItem={({ item }) => <Card item={item} />}
      keyExtractor={(item) => String(item.id)}
    />
  )
}
