import Navbar from '../components/Navbar'
import Stories from '../components/Stories';
import RightHome from '../components/RightHome';

import styled from 'styled-components'

const Container = styled.div`
   display:flex;
   gap:20px;
`
export default function Home() {
    return (
        <>
        <Navbar />
        <Container>
        <Stories />
        <RightHome />
        </Container>
        </>
    )
}