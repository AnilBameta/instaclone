import Avatar from "@mui/material/Avatar";
import styled from "styled-components";
import { popularProducts } from "../data";
import { red } from "@mui/material/colors";
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
`;

const Wrapper = styled.div`
  width: 250px;
`;

const Profile = styled.div`
  display: flex;
  text-align: center;
`;

const Img = styled.div`
  height: 60px;
  border-radius: 50%;
  flex: 1;
  display: flex;
  align-items: center;
`;

const ProfileName = styled.h5`
  flex: 2;
  text-align: start;
`;

const ProfileLink = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  color: blue;
`;
const Suggestions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const SugImg = styled.img`
  flex: 1;
  height: 40px;
  border-radius: 50%;
  border: solid 1px grey;
`;
const SugName = styled.h5`
  flex: 3;
`;
const SugLink = styled.a`
  flex: 2;
  color: blue;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
`;
const RightHome = () => {
  return (
    <Container>
      <Wrapper>
        <Profile>
          {localStorage.getItem("user") ? (
            <>
              <Img>
                {
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {localStorage.getItem("user").charAt(0)}
                  </Avatar>
                }
              </Img>
              <ProfileName>{localStorage.getItem("user")}</ProfileName>
            </>
          ) : (
            <>
              <Img>
                {
                  <Avatar
                    sx={{ bgcolor: red[500] }}
                    aria-label="recipe"
                  ></Avatar>
                }
              </Img>
              <ProfileName>User</ProfileName>
            </>
          )}

          <ProfileLink>Switch</ProfileLink>
        </Profile>
        <h3>Suggestions For You</h3>

        {popularProducts.map((pProducts) => (
          <Suggestions>
            <SugImg src={pProducts.img}></SugImg>
            <SugName>{pProducts.name}</SugName>
            <SugLink>Follow</SugLink>
          </Suggestions>
        ))}
      </Wrapper>
    </Container>
  );
};
export default RightHome;
