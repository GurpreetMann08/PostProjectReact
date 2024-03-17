import { Link } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container } from "@mantine/core";
import { useLoaderData } from "react-router-dom";
import useBoundStore from "../../store/Store";
import { Paper, Text, Title } from "@mantine/core";
import classes from "./PostDetailsPage.module.css";

function PostDetailsPage() {
  const post = useLoaderData();
  const userInfo = useBoundStore((state) => state);

  return (
    <>
      <Container>
        <Paper
          shadow="md"
          p="xl"
          radius="md"
          className={classes.card}
          style={{
            backgroundImage: `url(${post.image})`,
          }}
        >
          <Title order={3} className={classes.title}>
            {post.title}
          </Title>
          <Text className={classes.category} size="xs">
            Author:{userInfo.user.name}{" "}
          </Text>
          <Text className={classes.category} size="xs">
            Category : {post.category}
          </Text>
          <Text className={classes.category} size="xs">
            {post.content}
          </Text>

          <Button>
            <Link to="/posts">Back to Posts</Link>
          </Button>
          <br />
          <br />

          <Button>
            <Link to={`/PostEdit.Page/${post.id}`}>Edit</Link>
          </Button>
        </Paper>
      </Container>
    </>
  );
}

export const postDetailsLoader = async ({ params }) => {
  const res = await axios.get(`${DOMAIN}/api/posts/${params.id}`);
  console.log("I ran!, id = " + params.id);
  return res.data;
};

export default PostDetailsPage;
