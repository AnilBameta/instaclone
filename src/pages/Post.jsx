import axios from 'axios';
import React, {useState} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
  align-items: center;
  justify-content: center;
    `
    const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    `
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
    border-color:#ced4da;
  }
`;
 
const Button = styled.button`
margin-top:10px;
width: 40%;
border: none;
padding: 10px 15px;
background-color: grey;
color: white;
cursor: pointer;
margin-bottom: 10px;
`
const Post =()=> {
    

const [title,setTitle] = useState("");
const [body,setBody] = useState("");
const [photo,setPhoto] = useState("");

        function selectFile(e) {
            let files = e.target.files;
            console.log(files)
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);
            reader.onload = (e)=> {
                setPhoto(e.target.result)
            }
               }
          
               function Submit(e) {
                   console.log(title,body)
                   e.preventDefault();
                   const headers = { 
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'My-Custom-Header': 'foobar'
                };
                   axios.post("http://localhost:5000/api/users/createpost",{
                       title,
                       body,
                       photo
                   },{headers})
                   .then(res=> alert("You have succesfully created the post"))
                   .catch(err=> alert(err))
               }

              
               
    return(
            <Container>
               <Wrapper>
                   <Form>
                       <Input placeholder='title' onChange={(e)=>setTitle(e.target.value)} />
                       <Input placeholder='body' type='text' onChange={(e)=>setBody(e.target.value)} />
                       <input type='file' onChange={(e)=>selectFile(e)}></input>
                       <Button onClick={(e)=>Submit(e)}>Submit</Button>
                   </Form>
               </Wrapper>
           </Container>
        
    )
}
export default Post;