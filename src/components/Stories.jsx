import Story from "./Story";
import { popularProducts } from "../data";
import styled from "styled-components";



const Container = styled.div`
margin-left:10%;
margin-top:20px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
border:solid 1px;
padding:10px;
height:70px !important;
`

export default function Stories() {
  return (
    <Container>  
      {popularProducts.map((sItems) => {
        return <Story data={sItems} key={sItems.id} />;
      })}
    </Container>
  );
}
