import React from 'react'
import { Container, HomeList, Hero } from '../../components'

export const Home = () => {
  return (
    <Container align="flex-start" justify="center">
      <Hero />
      <HomeList />
    </Container>
  )
}
