import React from 'react'

import {getStoryIds} from '../services/hnApi'
import {Story} from '../components/Story'
import {StoriesContainerWrapper} from '../styles/StoryContainerStyles'
import {useInfiniteScroll} from '../hooks/useInfiniteScroll'

export const StoriesContainer = () => {
  const {count} = useInfiniteScroll()
  const [storyIds, setStoryIds] = React.useState([])

  React.useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data))
  }, [])

  return (
    <StoriesContainerWrapper data-testid="stories-container">
      <h1>News Stories</h1>
      {storyIds?.slice(0, count).map((storyId) => (
        <Story key={storyId} storyId={storyId} />
      ))}
    </StoriesContainerWrapper>
  )
}
