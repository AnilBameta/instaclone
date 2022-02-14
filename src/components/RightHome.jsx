import { popularProducts } from "../data";
import profilepic from '../Images/send.jpg'

import styled from 'styled-components';

const Container = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:start;
    `

    const Wrapper = styled.div`
    width:250px;
    `

    const Profile = styled.div`
    display:flex;
    text-align:center;
    `
    
    const Img = styled.img`
    height:60px;
    border-radius:50%;
    flex:1;
    `

    const ProfileName = styled.h5`
    flex:2;
    text-align:center;
    `

    const ProfileLink = styled.a`
    flex:1;
    display:flex;
    align-items:center;
    cursor:pointer;
    color:blue;
    `
    const Suggestions = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    `
    const SugImg = styled.img`
    flex:1;
    height:40px;
    border-radius:50%;
    border:solid 1px grey;
    `
    const SugName = styled.h5`
    flex:3;
    `
    const SugLink = styled.a`
    flex:2;
    color:blue;
    cursor:pointer;
    font-size:14px;
    font-weight:500;
    `
export default function RightHome() {
    
    return(
       <Container>
         <Wrapper>
          <Profile>
           <Img src={profilepic} alt='Profile Pic'></Img>
           <ProfileName>Anil Bameta</ProfileName>
           <ProfileLink>Switch</ProfileLink>
           </Profile>
       <h3>Suggestions For You</h3>
       
      {popularProducts.map((pProducts) =>(
        <Suggestions>
        <SugImg src={pProducts.img}></SugImg>
        <SugName>{pProducts.name}</SugName>
        <SugLink>Follow</SugLink>
    </Suggestions>)
      )
       }
       
       </Wrapper> 
       </Container>
        )
    
}