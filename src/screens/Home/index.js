import React from 'react'
import { ScreenScrollContainer, HomeList, Hero } from '~/components'

const FAKE_DATA_CHARACTERS = [
  {
    id: 0,
    image_url:
      'https://th.bing.com/th/id/R.2f51dcfac77e4887a45c498b6138cb41?rik=55Hu9Z3D0N0CAA&riu=http%3a%2f%2fcdn.collider.com%2fwp-content%2fuploads%2f2018%2f04%2fsolo-a-star-wars-story-uk-poster.jpg&ehk=UW54Vof%2frnhcq39GNrotNECdyE8v5qMlSgYzyv9aQGo%3d&risl=&pid=ImgRaw',
    title: 'Han Solo',
    type:'Filme',
    subtitle: 'Han',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum nisi nec porta tincidunt. Duis tempus sem quis congue pellentesque. Sed imperdiet nunc non nulla faucibus luctus vel quis nulla. Aenean eget sagittis quam, nec sollicitudin risus. Aliquam ut nisi cursus, tincidunt neque et, malesuada leo. In vestibulum sollicitudin est accumsan consectetur. Maecenas augue tortor, scelerisque in maximus ut, rhoncus a dolor. Vivamus eu magna leo. Nulla ac dolor quis massa egestas tincidunt consequat ut mi. Nulla in dui ac felis lacinia fermentum eu sit amet metus. Ut tempor diam nec ligula sollicitudin, eget lacinia nisi aliquam. Ut venenatis risus nec arcu blandit, a vestibulum diam iaculis. Nunc sollicitudin sagittis orci. Mauris magna felis, efficitur sed dapibus at, vestibulum in dui. Sed a leo risus.',
  },
  {
    id: 1,
    image_url:
      'https://th.bing.com/th/id/R.d60e471a4b85ece1aae553aad93c2584?rik=hTCJgSwyvteTUQ&pid=ImgRaw',
    title: 'Han Solo',
    type:'Filme',
    subtitle: 'Han',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum nisi nec porta tincidunt. Duis tempus sem quis congue pellentesque. Sed imperdiet nunc non nulla faucibus luctus vel quis nulla. Aenean eget sagittis quam, nec sollicitudin risus. Aliquam ut nisi cursus, tincidunt neque et, malesuada leo. In vestibulum sollicitudin est accumsan consectetur. Maecenas augue tortor, scelerisque in maximus ut, rhoncus a dolor. Vivamus eu magna leo. Nulla ac dolor quis massa egestas tincidunt consequat ut mi. Nulla in dui ac felis lacinia fermentum eu sit amet metus. Ut tempor diam nec ligula sollicitudin, eget lacinia nisi aliquam. Ut venenatis risus nec arcu blandit, a vestibulum diam iaculis. Nunc sollicitudin sagittis orci. Mauris magna felis, efficitur sed dapibus at, vestibulum in dui. Sed a leo risus.',
  },
  {
    id: 2,
    image_url:
      'https://th.bing.com/th/id/R.47f20007ea460ac782507bf00c50f984?rik=MsuH2hrR1lTSDA&pid=ImgRaw',
    title: 'Han Solo',
    type:'Filme',
    subtitle: 'Han',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum nisi nec porta tincidunt. Duis tempus sem quis congue pellentesque. Sed imperdiet nunc non nulla faucibus luctus vel quis nulla. Aenean eget sagittis quam, nec sollicitudin risus. Aliquam ut nisi cursus, tincidunt neque et, malesuada leo. In vestibulum sollicitudin est accumsan consectetur. Maecenas augue tortor, scelerisque in maximus ut, rhoncus a dolor. Vivamus eu magna leo. Nulla ac dolor quis massa egestas tincidunt consequat ut mi. Nulla in dui ac felis lacinia fermentum eu sit amet metus. Ut tempor diam nec ligula sollicitudin, eget lacinia nisi aliquam. Ut venenatis risus nec arcu blandit, a vestibulum diam iaculis. Nunc sollicitudin sagittis orci. Mauris magna felis, efficitur sed dapibus at, vestibulum in dui. Sed a leo risus.',
  },
  {
    id: 3,
    image_url:
      'https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg',
    title: 'Han Solo',
    type:'Personagens',
    subtitle: 'Han',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum nisi nec porta tincidunt. Duis tempus sem quis congue pellentesque. Sed imperdiet nunc non nulla faucibus luctus vel quis nulla. Aenean eget sagittis quam, nec sollicitudin risus. Aliquam ut nisi cursus, tincidunt neque et, malesuada leo. In vestibulum sollicitudin est accumsan consectetur. Maecenas augue tortor, scelerisque in maximus ut, rhoncus a dolor. Vivamus eu magna leo. Nulla ac dolor quis massa egestas tincidunt consequat ut mi. Nulla in dui ac felis lacinia fermentum eu sit amet metus. Ut tempor diam nec ligula sollicitudin, eget lacinia nisi aliquam. Ut venenatis risus nec arcu blandit, a vestibulum diam iaculis. Nunc sollicitudin sagittis orci. Mauris magna felis, efficitur sed dapibus at, vestibulum in dui. Sed a leo risus.',
  },
  {
    id: 4,
    image_url:
      'https://th.bing.com/th/id/R.e65b58fa021571f830f737d0b84108df?rik=tkT%2fPSXIDDZQvg&pid=ImgRaw',
    title: 'Han Solo',
    type:'Personagens',
    subtitle: 'Han',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum nisi nec porta tincidunt. Duis tempus sem quis congue pellentesque. Sed imperdiet nunc non nulla faucibus luctus vel quis nulla. Aenean eget sagittis quam, nec sollicitudin risus. Aliquam ut nisi cursus, tincidunt neque et, malesuada leo. In vestibulum sollicitudin est accumsan consectetur. Maecenas augue tortor, scelerisque in maximus ut, rhoncus a dolor. Vivamus eu magna leo. Nulla ac dolor quis massa egestas tincidunt consequat ut mi. Nulla in dui ac felis lacinia fermentum eu sit amet metus. Ut tempor diam nec ligula sollicitudin, eget lacinia nisi aliquam. Ut venenatis risus nec arcu blandit, a vestibulum diam iaculis. Nunc sollicitudin sagittis orci. Mauris magna felis, efficitur sed dapibus at, vestibulum in dui. Sed a leo risus.',
  },
  {
    id: 5,
    image_url:
      'https://th.bing.com/th/id/OIP.xSTJqlBK4iSk5c2fmvo7GwHaEK?pid=ImgDet&w=1920&h=1080&rs=1',
    title: 'Han Solo',
    type:'Personagens',
    subtitle: 'Han',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum nisi nec porta tincidunt. Duis tempus sem quis congue pellentesque. Sed imperdiet nunc non nulla faucibus luctus vel quis nulla. Aenean eget sagittis quam, nec sollicitudin risus. Aliquam ut nisi cursus, tincidunt neque et, malesuada leo. In vestibulum sollicitudin est accumsan consectetur. Maecenas augue tortor, scelerisque in maximus ut, rhoncus a dolor. Vivamus eu magna leo. Nulla ac dolor quis massa egestas tincidunt consequat ut mi. Nulla in dui ac felis lacinia fermentum eu sit amet metus. Ut tempor diam nec ligula sollicitudin, eget lacinia nisi aliquam. Ut venenatis risus nec arcu blandit, a vestibulum diam iaculis. Nunc sollicitudin sagittis orci. Mauris magna felis, efficitur sed dapibus at, vestibulum in dui. Sed a leo risus.',
  },
]

export const Home = () => {
  return (
    <ScreenScrollContainer>
      <Hero item={{
        title: 'Episódio VII',
        subtitle: 'O Despertar da Força',
        type: 'Filme',
        image_url: 'https://th.bing.com/th/id/R.b09963151a059d27ef2985562b1571b9?rik=9HhOwPjkxN9Qvg&pid=ImgRaw',
      }}/>
      <HomeList title="Filmes" data={FAKE_DATA_CHARACTERS} />
      <HomeList title="Personagens" data={FAKE_DATA_CHARACTERS} />
    </ScreenScrollContainer>
  )
}
