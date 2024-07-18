import styled from 'styled-components'

<<<<<<< HEAD
export const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bgColor};
  min-height: 92vh;
  margin-top: 60px;
  margin-bottom: 60px;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
    margin-bottom: 0px;
  }
`

export const NotFoundVideosView = styled.div`
=======
export const FailedView = styled.div`
>>>>>>> origin/main
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
`

<<<<<<< HEAD
export const NotFoundVideosImage = styled.img`
=======
export const FailedImage = styled.img`
>>>>>>> origin/main
  width: 200px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`
<<<<<<< HEAD
export const NotFoundVideosHeading = styled.h1`
=======
export const FailedHeading = styled.h1`
>>>>>>> origin/main
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.headingColor};
  text-align: center;
`

<<<<<<< HEAD
export const NotFoundVideosNote = styled.p`
=======
export const FailedNote = styled.p`
>>>>>>> origin/main
  font-family: Roboto;
  font-size: 18px;
  color: ${props => props.noteColor};
  text-align: center;
`
<<<<<<< HEAD
=======

export const RetryButton = styled.button`
  border: none;
  background-color: #4f46e5;
  border-radius: 3px;
  color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-family: Roboto;
  font-size: 15px;
`
>>>>>>> origin/main
