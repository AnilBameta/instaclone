import styled from "styled-components";

const Container = styled.div`
  display: inline !important;
`;

const OneStory = styled.div`
  height: 60px;
  width: 60px;
  border: solid 2px;
  border-radius: 50%;
  border-color: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  flex: 1;
  height: 50px;
  width: 50px;
  margin-top: 50px;
`;
const ImgName = styled.p`
  flex: 1;
  text-align: center;
  font-size: 10px;
`;
const Story = (props) => {
  return (
    <Container>
      <OneStory>
        <Img src={props.data.img} />
        <ImgName>{props.data.name}</ImgName>
      </OneStory>
    </Container>
  );
};
export default Story;
