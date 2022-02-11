import React from 'react';
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from 'react-router-dom';
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
   flex:1;
   display:flex;
   `

   const IconPallete = styled.div`
   flex:1;
   display:inline;
   display:flex;
    justify-content:space-between;
   `
    const Icon = styled.span`
    flex:1;
    `
    const ButtonSec = styled.div`
    flex:1;
    `
    const Button = styled.button`
    margin-left:5px;
    width:70px;
    height:30px;
    opacity:0.8;
    cursor:pointer;
    font-weight:700;
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
                 <ButtonSec>
                <Link to={'/register'}> <Button>SignUp</Button></Link>
                <Link to={'/login'}><Button>SignIn</Button> </Link>
                 </ButtonSec>
                 
             </Right>
         </Wrapper>
        </Container>
    )
}