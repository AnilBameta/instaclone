import Navbar from '../components/Navbar'
import Stories from '../components/Stories';
import RightHome from '../components/RightHome';
import AllPosts from '../components/AllPosts';
import styled from 'styled-components'

const Container = styled.div`
   display:flex;
   gap:80px; 
   justify-content:center;
`
const Div = styled.div`
margin-top:10px;
display:flex;
justify-content:space-around;
align-items:start;
`

const Wrapper = styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content:center;
`
const LeftPart = styled.div`
`
export default function Home(props) {
    console.log("Homeprops",props)
    return (
        <>
        <Navbar {...props} />
        <Container>
            <Div>
            <Wrapper>
                <LeftPart>        
        <Stories />
        </LeftPart>
        <LeftPart>
            <AllPosts />
        </LeftPart>
        </Wrapper>
        </Div>
        <Div>
        <Wrapper>
        <RightHome />
        </Wrapper>
        </Div>
        </Container>
        </>
    )
}