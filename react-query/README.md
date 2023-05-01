### react-query

In this one we will learn how to use `react-query` to query data in react apps.

### installation

First we need to install `react-query` as follows:

```shell
yarn add @tanstack/react-query

# installing dev tools
yarn add @tanstack/react-query-devtools
```

Then we need to wrap our app in `QueryClientProvider` as follows:

```ts
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
```

Now if we want to enable devtools we need to add `<ReactQueryDevtools/>` component just before the closing tag of `QueryClientProvider` as follows.

```ts
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
```

### Querying Data

First we want to learn how to query data using `useQuery` hook. The data that we are going to query will be coming from `json-placeholder` api.

```ts
import React from "react";
import { useQuery } from "@tanstack/react-query";
interface Props {}
const App: React.FC<Props> = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: async (val) => {
      console.log(val);
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) return <p>loading...</p>;
  if (error) return <pre>{JSON.stringify({ error }, null, 2)}</pre>;
  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
export default App;
```

Let's say we want to get a single post that has an id of `1` we can change our `useQuery` and utilize the `queryKey` and pass the id of the todo in the `url` as follows:

```ts
const { data, error, isLoading } = useQuery({
  queryKey: ["todos", 1],
  queryFn: async ({ queryKey }) => {
    const [, id] = queryKey;
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await res.json();
    return data;
  },
});
```

### Mutating Data

Let's say we want to mutate data, for that we can use the `useMutation` hook. Let's create a form that allows us to add new post to the one that exists.

```ts
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
```

So what is going on in this code, first we are querying the `post` from the `posts` list and then render them on the browser. The `addPost` function allows us to add a new post from the existing on and on sucess we are invalidating the `posts` queries and we are setting `exact` option to true telling `react-query` that we want to only invalidate queries that matches the `queryKey` post, this will allows us to fetch new post and render them again.

```ts
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
```

`onSuccess` message returns `3` guys `data`,`variables` and `context` the context in this case are values that we pass during mutation in the `onMutate`:

```ts
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
```

so the value of the context when we run this mutation will be:

```ts
{
  ctx: 2,
};
```

Note that when we invalidate queries we used the `client` which we obtained by calling the `useQueryClient` hook as follows:

```ts
const client = useQueryClient();
```

### Refs

1. [Docs](https://tanstack.com/query/latest/docs/react/overview)
