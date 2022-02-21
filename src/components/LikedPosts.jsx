import React from "react";
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  height:60px;
  justify-content: center;
  align-items:center;
`;
const Post = styled.div`
  margin-top:25px;
  width: 100%;
  height:20px;
  padding: 20px;
  background-color: white;
  display:flex;
  align-items:center;
`;
const PostPart = styled.div`
flex:1;
text-align:center;
`
const Img = styled.img`
width:40px;
height:40px;
border-radius:50%;
`
const LikedPosts = (props) => {
  console.log(props)
  return (
    <>
      {
      props?.data?.map(likedPosts => (
        <Container>
         <Post>
         <PostPart><Img src={likedPosts?.photo} /></PostPart>
         <PostPart>{likedPosts?.title}</PostPart>
         <PostPart>{likedPosts?.postedBy?.username}</PostPart>
        </Post>
        </Container>
      )
      )
      
      }
    </>
  )
  
};

export default LikedPosts;
