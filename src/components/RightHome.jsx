import { popularProducts } from "../data";

import styled from 'styled-components';

export default function RightHome() {

    const Container = styled.div`
    margin-top:20px;
    width:300px;
    `

    const Profile = styled.div`
    display:flex;
    `
    
    const Img = styled.img`
    width:60px;
    height:60px;
    flex:1;
    `

    const ProfileName = styled.h5`
    flex:1;
    `

    const ProfileLink = styled.a`
    flex:1;
    `
    const Suggestions = styled.div`
    display:flex
    `
    const SugImg = styled.img`
    flex:1;
    `
    const SugName = styled.h5`
    flex:1
    `
    const SugLink = styled.a`
    flex:1
    `
    return(
       <Container>
          <Profile>
           <Img src='D:\MERNPOC\instaclone\src\Images\send.jpg' alt='Profile Pic'></Img>
           <ProfileName>Anil Bameta</ProfileName>
           <ProfileLink>Switch</ProfileLink>
           </Profile>
       <h3>Suggestions For You</h3>
       

       <Suggestions>
           <SugImg src='D:\MERNPOC\instaclone\src\Images\send.jpg' alt='Profile Pic'></SugImg>
           <SugName>2</SugName>
           <SugLink>3</SugLink>
       </Suggestions>
         
       </Container>
        )
    
}