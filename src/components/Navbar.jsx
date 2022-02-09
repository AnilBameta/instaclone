import React from 'react';

import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
export default function Navbar() {

   const Container = styled.div`
   height:70px;
   border-bottom:solid 1px grey;
   `

   const Wrapper = styled.div`
      display:flex;
      align-items: center;
      text-align:center;
   `

   const Left = styled.div`
   flex:1;
   `

   const AppName = styled.h2`
   font-family: cursive;
   `

   const Middle = styled.div`
   flex:1;
   `

   const Search = styled.input`
   height:25px;
   width:200px;
   border-radius:5px;
   border-width:0.5px;
   border-color:red;
 `

   const Right = styled.div`
   flex:1
   `

   const IconPallete = styled.div`
   display:flex;
    justify-content:space-between;
    width:250px;
   `
    const Icon = styled.span`
    flex:1;
    `

    return (
        <Container>
         <Wrapper>
             <Left>
                 <AppName>Instagram</AppName>
             </Left>
             <Middle>
            
                 <Search placeholder=' Search'></Search>
             </Middle>
             <Right>
                 <IconPallete>
                     <Icon><HomeIcon/></Icon>
                     <Icon><MapsUgcRoundedIcon /></Icon>
                     <Icon><ExploreRoundedIcon /></Icon>
                     <Icon><FavoriteBorderRoundedIcon /></Icon>
                     <Icon><AddCircleOutlineOutlinedIcon /></Icon>
                     
                 </IconPallete>
             </Right>
         </Wrapper>
        </Container>
    )
}