import faker from 'faker'

export const singularStory = {
  by: `${faker.name.firstName()} ${faker.name.lastName()}`,
  id: faker.random.uuid(),
  time: 1602510848,
  title: faker.lorem.words(5),
  url: faker.internet.url(),
}

export const storyIds = [faker.random.uuid()]

export const emptySingularStory = {
  by: undefined,
  id: undefined,
  time: undefined,
  title: undefined,
  url: undefined,
}
