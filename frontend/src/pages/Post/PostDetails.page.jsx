import { Link } from "react-router-dom";
import DOMAIN from "../../services/endpoint";
import axios from "axios";
import { Button, Container } from "@mantine/core";
import { useLoaderData } from "react-router-dom";
import useBoundStore from "../../store/Store";

function PostDetailsPage() {
  const post = useLoaderData();
  const userInfo = useBoundStore((state) => state);

  return (
    <>
      <Container>
        <div>
          <h3>{post.title}</h3>
          <p>Author:{userInfo.user.name} </p>
          <p>Category : {post.category}</p>
          <p>{post.content}</p>
          <img src={post.image} alt={post.title} />
          <Button>
            <Link to="/posts">Back to Posts</Link>
          </Button>
          <br />
          <br />

          <Button>
            <Link to="/PostEdit.page">Edit</Link>
          </Button>
        </div>
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
