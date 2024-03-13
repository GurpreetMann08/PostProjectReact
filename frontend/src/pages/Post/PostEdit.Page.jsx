import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { TextInput, Button, Group, Box } from "@mantine/core";
import DOMAIN from "../../services/endpoint";

import { useForm } from "@mantine/form";
import { useNavigate } from "react-router-dom";

function PostEdit() {
  const post = useLoaderData();

  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      title: post.title || "",
      category: post.category || "",
      image: post.image || "",
      content: post.content || "",
    },
  });

  const handleSubmit = async (values) => {
    const res = await axios.post(`${DOMAIN}/api/posts`, values);
    if (res?.data.success) {
      navigate("/posts");
    }
  };

  return (
    <Box maw={300} mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Title"
          placeholder="Enter a Title"
          value={form.values.title}
          onChange={(e) => form.updateValues({ title: e.target.value })}
        />

        <TextInput
          label="Category"
          placeholder="Enter a Category"
          value={form.values.category}
          onChange={(e) => form.updateValues({ category: e.target.value })}
        />
        <TextInput
          label="Image"
          placeholder="Enter an Image"
          value={form.values.image}
          onChange={(e) => form.updateValues({ image: e.target.value })}
        />

        <TextInput
          label="Content"
          placeholder="Enter some content"
          value={form.values.content}
          onChange={(e) => form.updateValues({ content: e.target.value })}
        />
        <Group position="right" mt="md">
          <Button type="submit">Update</Button>
        </Group>
      </form>
    </Box>
  );
}
export const postEditLoader = async () => {
  const res = await axios.get(`${DOMAIN}/api/posts`);
  console.log("I ran! ");
  return res.data;
};

export default PostEdit;
