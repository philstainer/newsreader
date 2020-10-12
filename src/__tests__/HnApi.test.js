import axios from 'axios'
import {getStoryIds, getStory, newStoriesUrl, storyUrl} from '../services/hnApi'
import {singularStory, storyIds, emptySingularStory} from '../fixtures'

jest.mock('axios')

test('getStoryIds calls api to get latest storys', async () => {
  axios.get.mockImplementation(() => Promise.resolve({data: storyIds}))

  const entity = await getStoryIds()

  expect(axios.get).toHaveBeenCalledWith(newStoriesUrl)
  expect(entity).toEqual(storyIds)
})

test('getStory calls api to get story', async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({data: {...singularStory}}),
  )

  const entity = await getStory(1)

  expect(axios.get).toHaveBeenCalledWith(`${storyUrl}/1.json`)
  expect(entity).toEqual(singularStory)
})

test('getStory receives empty story', async () => {
  axios.get.mockImplementation(() =>
    Promise.resolve({data: emptySingularStory}),
  )

  const entity = await getStory(2)

  expect(axios.get).toHaveBeenCalledWith(`${storyUrl}/2.json`)
  expect(entity).toEqual(emptySingularStory)
})
