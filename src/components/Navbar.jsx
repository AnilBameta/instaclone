import React from 'react';
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Post from './Post';



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
height:35px;
width:250px;
border-radius:5px;
border:none;
background-color:rgb(245, 238, 238);;
`

const Right = styled.div`
flex:1;
display:flex;
`

const IconPallete = styled.div`
flex:1.5;
display:inline;
display:flex;
 justify-content:space-between;
`
 const Icon = styled.span`
 flex:1;
 cursor:pointer;
 &:hover{
     transform:scale(1.2) ;
 }
 `
 const ButtonSec = styled.div`
 flex:1;
 `
 const Buttons = styled.button`
 margin-left:5px;
 width:70px;
 height:30px;
 opacity:0.8;
 cursor:pointer;
 font-weight:700;
 border-radius:6%;
 border:none;
 &:hover{
     background-color:rgb(172, 168, 168);
     transform:scale(1.1);
 }
 `

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    height:400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 4,
  };



export default function Navbar(props) {
    console.log("navbar props",props)

    const [open, setOpen] = React.useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);


  

    function Logout() {
        window.location.reload(false);
        localStorage.clear();
        
    }
    const renderList = ()=> {
        if(localStorage.getItem('user'))
        {
          return  [
            <Link to={'/'}> <Buttons onClick={Logout}>Logout</Buttons></Link>
            ]
        }
        else 
        {
            return [
                <Link to={'/register'}> <Buttons>SignUp</Buttons></Link>,
            <Link to={'/login'}><Buttons>SignIn</Buttons> </Link>
                
            ]
        }
    }


    return (
        <Container>
            {localStorage.getItem('user') &&
             <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          
        <Box sx={style}>
        
        <Post {...props}/>
        
        </Box>
      </Modal>
            }

         <Wrapper>
             <Left>
                 <AppName>Instagram</AppName>
             </Left>
             <Middle>
            
                 <Search placeholder="   Search"></Search>
             </Middle>
             <Right>
                 <IconPallete>
                     <Icon><HomeIcon style={{fontSize:'30px'}}/></Icon>
                     <Icon><MapsUgcRoundedIcon style={{fontSize:'30px'}}/></Icon>
                     <Icon><ExploreRoundedIcon style={{fontSize:'30px'}}/></Icon>
                     <Icon><FavoriteBorderRoundedIcon style={{fontSize:'30px'}}/></Icon>
                    <Icon><AddCircleOutlineOutlinedIcon onClick={handleOpen} style={{fontSize:'30px'}}/></Icon>
                 </IconPallete>
                 <ButtonSec>
                 {renderList()}
                 </ButtonSec>
                 
             </Right>
         </Wrapper>
        </Container>
    )
}