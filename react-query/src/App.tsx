import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
interface Props {}
const posts = [
  { id: 1, title: "hey" },
  { id: 2, title: "there" },
  { id: 3, title: "where" },
];
const App: React.FC<Props> = () => {
  const client = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async ({ queryKey }) => {
      return posts;
    },
  });
  const { mutate, isLoading: loading } = useMutation({
    mutationFn: async (variable: { title: string }) => {
      const post = { id: posts.length, title: variable.title };
      posts.push(post);
      return post;
    },
    onMutate: (variable) => {
      return {
        ctx: 2,
      };
    },
  });
  const [title, setTitle] = React.useState<string>("");
  const addPost = async () => {
    if (title) {
      await mutate(
        { title },
        {
          onSuccess(data, variables, context) {
            client.invalidateQueries(["posts"], { exact: true });
          },
        }
      );
    }
  };
  if (isLoading) return <p>loading...</p>;
  if (error) return <pre>{JSON.stringify({ error }, null, 2)}</pre>;

  return (
    <div className="App">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />{" "}
      <button disabled={loading} onClick={addPost}>
        add post
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default App;
