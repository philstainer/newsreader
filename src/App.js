import React from 'react'

import {StoriesContainer} from './containers/StoriesContainer'
import {GlobalStyles} from './styles/GlobalStyles'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <StoriesContainer />
    </>
  )
}
