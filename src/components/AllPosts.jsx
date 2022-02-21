import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CardHeader from "@mui/material/CardHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { mobile } from "../responsive";

const Container = styled.div`
${mobile({ justifyContent:'center'})}
`;
const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  text-align: center;
`;

const AllPosts = (props) => {
  console.log("allposts", props?.data?.Value?.postData);
  const [postData, setPostData] = useState();
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "My-Custom-Header": "foobar",
      };
      axios
        .get("http://localhost:5000/api/users/postByUser", { headers })
        .then((res) => setPostData(res.data.post))
        .catch((err) => alert(err));
    } else {
      axios
        .get("http://localhost:5000/api/users/allpost")
        .then((res) => setPostData(res.data.post))
        .catch((err) => alert(err));
    }
  }, []);

  console.log("postdata", postData);

  useEffect(() => {
    if (props !== null) {
      let nData = [];
      nData.push(props?.data?.Value?.postData);
      console.log("nData1", nData);
      postData?.map((item) => nData.push(item));
      console.log("ndata", nData);
      setPostData(nData);
    }
  }, [props]);

  const deletePost = (postId) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "My-Custom-Header": "foobar",
    };
    axios
      .delete(`http://localhost:5000/api/users/${postId}`, { headers })
      .then((res) => {
        const newData = postData.filter((item) => {
          return item._id !== postId;
        });
        setPostData(newData);
        alert("Post deleted Successfully");
        console.log("newdata", newData);
        console.log("postdata", postData);
      })
      .catch((err) => console.log(err));
  };

  const like = (postId) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "My-Custom-Header": "foobar",
    };

    axios
      .put(`http://localhost:5000/api/users/${postId}`, null , { headers })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Wrapper>
        {postData?.map((postdata) => (
          <Card sx={{ maxWidth: 530, marginTop: 5 }}>
            {localStorage.getItem("user") ? (
              <CardHeader
                style={{ height: "5px" }}
                action={
                  <IconButton
                    style={{ marginTop: "-12px" }}
                    aria-label="settings"
                    onClick={() => deletePost(postdata._id)}
                  >
                    <DeleteOutlinedIcon />
                  </IconButton>
                }
              />
            ) : (
              <CardHeader
                sx={{ height: 5, marginRight: 60, marginBottom: 1 }}
                action={
                  <Typography variant="h6" color="text.secondary">
                    {postdata?.postedBy?.username}
                  </Typography>
                }
              />
            )}
            <CardMedia
              component="img"
              height="300"
              image={postdata?.photo}
              alt="Photo not available"
            />
            <CardContent sx={{ height: 35 }}>
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                textAlign="left"
              >
                {postdata?.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                textAlign="left"
              >
                {postdata?.body}
              </Typography>
            </CardContent>
            <CardActions border="1px" style={{ marginTop: "7px" }}>
              <Button size="small" style={{ marginLeft: "-5px" }}>
                {localStorage.getItem("user") ? (
                  postdata?.like ? (
                    <FavoriteIcon
                      style={{ color: "black" }}
                      onClick={() => like(postdata._id)}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      style={{ color: "black" }}
                      onClick={() => like(postdata._id)}
                    />
                  )
                ) : postdata?.like ? (
                  <FavoriteIcon style={{ color: "black" }} />
                ) : (
                  <FavoriteBorderIcon style={{ color: "black" }} />
                )}
              </Button>
              <Button size="small" style={{ marginLeft: "1px" }}>
                <ModeCommentOutlinedIcon style={{ color: "black" }} />
              </Button>
            </CardActions>
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default AllPosts;
