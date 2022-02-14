import Story from "./Story";
import { popularProducts } from "../data";
import styled from "styled-components";




const Container = styled.div`
margin-top:10px;
display: flex;
justify-content: space-around;
border:solid 1px grey;
padding:10px;
height:90px !important;
gap:10px;
cursor:pointer;
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
