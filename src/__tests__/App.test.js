import React from 'react'
import {render, waitFor} from '@testing-library/react'

import {App} from '../App'
import {storyIds, singularStory} from '../fixtures'
import {getStory, getStoryIds} from '../services/hnApi'
import {useInfiniteScroll} from '../hooks/useInfiniteScroll'
import {STORY_INCREMENT} from '../constants'

jest.mock('../hooks/useInfiniteScroll')
jest.mock('../services/hnApi', () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}))

test('renders the application', async () => {
  useInfiniteScroll.mockImplementation(() => ({count: STORY_INCREMENT}))
  getStory.mockImplementation(() => Promise.resolve(singularStory))
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds))

  const {findByText, getByText, getByTestId} = render(<App />)

  expect(getByText('News Stories')).toBeTruthy()
  expect(await findByText(singularStory.title)).toBeTruthy()
  expect(getByTestId('story-by')).toHaveTextContent(singularStory.by)
})
