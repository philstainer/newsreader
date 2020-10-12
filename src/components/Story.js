import React from 'react'

import {getStory} from '../services/hnApi'
import {StoryWrapper} from '../styles/StoryStyles'
import {mapTime} from '../mappers/mapTime'

export const Story = ({storyId}) => {
  const [story, setStory] = React.useState()

  React.useEffect(() => {
    getStory(storyId).then((data) => setStory(data))
  }, [storyId])

  if (!story?.url) return null

  return (
    <StoryWrapper data-testid="story">
      <StoryWrapper.Title>
        <a
          href={story.url}
          target="_blank"
          without="true"
          rel="noopener noreferrer"
        >
          {story.title}
        </a>
      </StoryWrapper.Title>
      <StoryWrapper.Meta>
        <span data-testid="story-by">
          <StoryWrapper.MetaElement color="#000">By:</StoryWrapper.MetaElement>
          {story.by}
        </span>

        <span data-testid="story-time">
          <StoryWrapper.MetaElement color="#000">
            Posted:
          </StoryWrapper.MetaElement>
          {mapTime(story.time)}
        </span>
      </StoryWrapper.Meta>
    </StoryWrapper>
  )
}
