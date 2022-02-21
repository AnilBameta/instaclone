import Story from "./Story";
import { popularProducts } from "../data";
import styled from "styled-components";




const Container = styled.div`
margin-top:10px;
display: flex;
justify-content: space-around;
box-shadow: 0.5px -1px 10px #888888;
padding:10px;
height:90px !important;
gap:10px;
cursor:pointer;
`

 const Stories = () => {
  
  return (
    <Container>  
      {popularProducts.map((sItems) => {
        return <Story data={sItems} key={sItems.id} />;
      })}
    </Container>
  );
}
export default Stories;
