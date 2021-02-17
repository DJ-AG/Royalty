import styled from 'styled-components'


export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin:0 50px 30px 50px;
  @media screen and (max-width: 800px) {
    margin:0 0 30px 0;
    align-items: center;
    padding:unset;
  }
`
export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`
export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`
  