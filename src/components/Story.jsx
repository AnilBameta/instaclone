import styled from 'styled-components';

export default function Story(props) {

    console.log(props.data.img)
    const Container = styled.div`
    display:inline !important;
    `

    const OneStory = styled.div`
    height:60px;
    width:60px;
    border:solid 2px;
    border-radius:50%;
    border-color:red;
    display:flex;
    justify-content:center;
    align-items:center;

    `
    const Img = styled.img`
    height:50px;
    width:50px;
    `
  return(
      <Container>
          <OneStory>
      <Img src= {props.data.img} />
      </OneStory>
      </Container>
  )
}