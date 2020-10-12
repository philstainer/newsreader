import React from 'react'

import {MAX_STORIES, STORY_INCREMENT} from '../constants'
import {debounce} from '../utils/debounce'

export const useInfiniteScroll = () => {
  const [loading, setLoading] = React.useState(false)
  const [count, setCount] = React.useState(STORY_INCREMENT)

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false
    }

    setLoading(true)
  }, 500)

  React.useEffect(() => {
    if (!loading) return

    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES)
    } else {
      setCount(count + STORY_INCREMENT)
    }

    setLoading(false)
  }, [loading])

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return {count}
}
