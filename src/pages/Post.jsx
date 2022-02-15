import axios from "axios";
import { ref,getDownloadURL, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import styled from "styled-components";
import {storage} from '../firebase';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
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
  &:focus {
    outline: none;
    border-color: #ced4da;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  width: 40%;
  border: none;
  padding: 10px 15px;
  background-color: grey;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Post = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [photo, setPhoto] = useState("");
  const [file,setFile] = useState("");
  const [progress,setProgress] = useState(0);
  
  const postDetails = (e) => {
    e.preventDefault();
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
         .then(url => {
             setPhoto(url)
         console.log(url)
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
            .then((res) => alert("You have succesfully created the post"))
            .catch((err) => alert(err));
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
            onChange={(e) => setFile(e.target.files[0])}
          ></input>
          <Button onClick={(e) => postDetails(e)}>Submit</Button>
        </Form>
      </Wrapper>
      <h3>Uploaded {progress} %</h3>
    </Container>
  );
};
export default Post;

