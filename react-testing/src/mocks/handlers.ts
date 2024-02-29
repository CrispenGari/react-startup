import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos", (resolver) => {
    return HttpResponse.json(
      [
        {
          title: "Cooking",
        },
        {
          title: "Coding",
        },
        {
          title: "Sleeping",
        },
      ],
      { status: 200 }
    );
  }),
];
