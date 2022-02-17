import axios from "axios";
import { ref,getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import styled from "styled-components";
import {storage} from '../firebase';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
`;
const Wrapper = styled.div`
  margin-top:25px;
  width: 50%;
  padding: 20px;
  background-color: white;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.textarea`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  &:focus {
    outline: none;
    border-color: #ced4da;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  width: 40%;
  height:35px;
  opacity:0.8;
  cursor:pointer;
  font-weight:700;
  border-radius:8%;
  border:none;
  &:hover{
      background-color:rgb(172, 168, 168);
      transform:scale(1.05);
  }
`;
const Post = (props) => {
console.log("post",props)
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photo, setPhoto] = useState("");
  const [file,setFile] = useState("");
  const [progress,setProgress] = useState(0);
  
  const addFile = (e) => {
    setFile(e.target.files[0])
     const uploadFiles = (file) => {
         if(!file) return;
         const storageRef = ref(storage, `/files/${file.name}`);
         const uploadTask = uploadBytesResumable(storageRef, file)

         uploadTask.on("state_changed" ,
         (snapshot) => {
           const prog = Math.round(
               (snapshot.bytesTransferred/snapshot.totalBytes)*100
           );
           setProgress(prog);  
         }, (err)=> console.log(err),
         ()=>
         getDownloadURL(uploadTask.snapshot.ref)
         .then( url => {
             setPhoto(url)
            
         console.log(url)
         }
         )
         )
        
     };

     uploadFiles(file)

    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("upload_preset", "insta-clone");
    // formData.append("cloud_name", "anilb");

    // axios
    //   .post("http://api.cloudinary.com/v1_1/anilb/file/upload", formData)
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    
    
}

const postDetails = (e) => {
  e.preventDefault();
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "My-Custom-Header": "foobar",
  };
  axios
    .post(
      "http://localhost:5000/api/users/createpost",
      {
        title,
        body,
        photo
      },
      { headers }
    )
    .then((res) => {
      console.log("postData is",res)
      props.sendNewPost(res?.data?.result)
      alert("You have succesfully created the post")
      // window.location.reload(false);
    })
      
    .catch((err) => alert(err)); 
}


  return (
    <Container>
      <Wrapper>
        <Form>
          <Input
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            placeholder="body"
            type="text"
            onChange={(e) => setBody(e.target.value)}
          />
          <input
            type="file"
            onChange={addFile}
          ></input>
          <h3>Uploaded {progress} %</h3>
          <Button onClick={(e) => postDetails(e)}>Submit</Button>
        </Form>
      </Wrapper>
      
    </Container>
  );
};
export default Post;

