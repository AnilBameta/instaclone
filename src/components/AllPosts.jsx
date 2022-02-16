import { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import * as React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CardHeader from '@mui/material/CardHeader';


const Container = styled.div`
`
const Wrapper = styled.div`
margin-top:20px;
width:100%;
text-align:center;
`

export default function AllPosts(props) {
console.log("props are here yoho",props)
const [postData,setPostData] = useState();
useEffect(()=>{
    if(localStorage.getItem('user')) {
        const headers = { 
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'My-Custom-Header': 'foobar'
        };
        async function fetchData(){
            const info = await axios.get("http://localhost:5000/api/users/postByUser",{headers})
            setPostData(info?.data?.post)
            console.log("postdata",postData)
             }
             fetchData(); 
    }
    else
    { 
  async function fetchData(){
 const info = await axios.get("http://localhost:5000/api/users/allpost")
 setPostData(info?.data?.post)
 console.log("allpost", postData)
  }
  fetchData(); 
}

},[])


function deletePost(postId) {
    const headers = { 
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'My-Custom-Header': 'foobar'
    };
    axios.delete(`http://localhost:5000/api/users/${postId}`,{headers})
    .then(res => {
       
        const newData = postData.filter(item => {
            return item._id !== postId
        })
        setPostData(newData)
        alert("Post deleted Successfully");
        console.log("newdata",newData)
        console.log("postdata",postData)
    })
    .catch(err => console.log(err))
}
console.log("post",postData?.post)
return(
    
    <Container>
    <Wrapper>
    {
        postData?.map(postdata => 
        <Card sx={{ maxWidth: 530 ,marginTop: 5}}>
         {localStorage.getItem('user') &&
        <CardHeader
        sx={{ height: 10}}
        action={
          <IconButton  aria-label="settings" onClick={()=>deletePost(postdata._id)}>
           < DeleteOutlinedIcon />
          </IconButton>
        }
      />
    }
        <CardHeader
        
        sx={{ height: 5, marginRight:60, marginBottom:1}}
        action={<Typography variant="h6" color="text.secondary" >
           {postdata?.postedBy?.username}
          </Typography>
        }
      />
         
        <CardMedia
          component="img"
          height="300"
          image={postdata?.photo}
          alt="Photo not uploaded"
        />
        <CardContent sx={{ height: 35}} >
          <Typography gutterBottom variant="h6" component="div" textAlign='left'>
            {postdata?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign='left'>
           {postdata?.body}
          </Typography>
        </CardContent>
        <CardActions border='1px'>
          <Button size="small" ><FavoriteBorderIcon /></Button>
          <Button size="small"><ModeCommentOutlinedIcon /></Button>
        </CardActions>
      </Card>
    ) 
     }
    </Wrapper>
    </Container>
  
)
}