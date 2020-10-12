import styled from 'styled-components'

export const StoryWrapper = styled.section`
  padding-top: 10px;
  margin-bottom: 20px;
  border-top: 1px solid #cccccc;

  &:first-of-type {
    border-top: none;
  }

  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

StoryWrapper.Title = styled.h2`
  margin-bottom: 5px;
  font-size: 18px;
  line-height: 1.8;
  margin: 0;
  text-decoration: none;

  a {
    color: #2e2e2e;
    background-color: #f8dc3d;
    text-decoration: none;
  }
`

StoryWrapper.Meta = styled.div`
  font-style: italic;

  > span:not(:first-child):before {
    content: '🔯';
    margin: 0 7px;
  }

  .story__meta-bold {
    font-weight: bold;
  }
`

StoryWrapper.MetaElement = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || 'red'};
  margin-right: 2px;
`
