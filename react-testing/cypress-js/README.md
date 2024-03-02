### cypress

In this one we are going to do

1. End-to-End
2. Component
   Testing using [cypress](https://docs.cypress.io/guides/overview/why-cypress)

### Component testing

We are going to follow the [getting-stated](https://docs.cypress.io/guides/component-testing/getting-started) guide for component testing with `cypress`.

```shell
yarn add -D cypress

# Then
npx cypress open --component

```

- Next we are going to follow the instruction given on the `UI` window that will open.
- `cypress` will generate the configuration files for us.
- Then i use chose `vite` for the `bundler` so i will need to create a `vite.config.ts` file and add the following code in it:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
```

You also need to install `@vitejs/plugin-react` as follows:

```shell
yarn add -D @vitejs/plugin-react
```

If you are using typescript you should create a `tsconfig.json` in the `cypress` folder and add the following code in it:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node"]
  },
  "include": ["**/*.ts"]
}
```

Ref: https://docs.cypress.io/guides/tooling/typescript-support

We might also want to add a `cy` script in the package.json file so that we will just run `yarn cy` to open `cypress`

```json
{
  "scripts": {
    "cy": "npx cypress open --component"
  }
}
```

We are going to create a component called `User` and add the following code in it.

```tsx
export const User = ({
  name,
  email,
  dob,
}: {
  name: string;
  email: string;
  dob?: number;
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {email} • {dob ? new Date().getFullYear() - dob : null}
      </p>
    </div>
  );
};
```

The user component will be our first component to be testes. Next we are going to create a test file called `User.cy.tsx` and start writing some test to check if the component is mounted correctly as follows:

```tsx
import { User } from "./User";
describe("<User/>", () => {
  it("renders correctly", () => {
    cy.mount(<User email="johndoe@gmail.com" name="John" />);
    cy.get("h1").should("have.text", "John");
    cy.get("p").should("have.text", "johndoe@gmail.com • ");
  });
  it("renders correctly with age 25", () => {
    cy.mount(<User email="johndoe@gmail.com" name="John" dob={1999} />);
    cy.get("h1").should("have.text", "John");
    cy.get("p").should("have.text", "johndoe@gmail.com • 25");
  });
});
```

Now in the `cypress` window we should see our test passing. Let's create another component called `Counter` and add the following code in it.

```tsx
import React from "react";

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = React.useState(value);
  const [amount, setAmount] = React.useState(0);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <input
        type="text"
        data-cy="amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button
        data-cy="increment"
        onClick={() => setCount((state) => state + amount)}
      >
        Increment
      </button>
      <button
        data-cy="decrement"
        onClick={() => setCount((state) => state - amount)}
      >
        Decrement
      </button>
    </div>
  );
};
export default Counter;
```

Let's write the test for this component's functionality. For that we are going to open the `Counter.cy.tsx` and write the following code.

```tsx
import Counter from "./Counter";
describe("<Counter/>", () => {
  it("Should render correctly with initial count set to 10", () => {
    cy.mount(<Counter value={10} />);
    cy.get("h1").should("have.text", "10");
    cy.get("input").should("exist");
    cy.get("button").should("have.length", 2);
  });

  it("Should render increment by 5", () => {
    cy.mount(<Counter value={10} />);
    cy.get("[data-cy=amount]").type("5");
    cy.get("[data-cy=increment]").click();
    cy.get("h1").should("have.text", "15");
  });
  it("Should render decrement by 3", () => {
    cy.mount(<Counter value={7} />);
    cy.get("[data-cy=amount]").type("3");
    cy.get("[data-cy=decrement]").click();
    cy.get("h1").should("have.text", "4");
  });
});
```

So that's what we can demonstrate about testing user interactivity using `cypress` and components testing. If we want to use the `findBy*` methods we have to do some extra steps. Let's go ahead and do those steps following this guide https://testing-library.com/docs/cypress-testing-library/intro/

First run:

```shell
yarn add --dev cypress @testing-library/cypress
```

We then open ` cypress/support/commands.ts` and add the following

```tsx
/// <reference types="@testing-library/cypress" />.
import "@testing-library/cypress/add-commands";
```

Now we open the `cypress/tsconfig.json` file and add the following:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["es5", "dom"],
    "types": ["cypress", "node", "@testing-library/cypress"]
  },
  "include": ["**/*.ts"]
}
```

Open the `package.json` file and make sure that you have the following `eslintConfig` property set:

```json
{
  "eslintConfig": {
    "extends": ["react-app", "react-app/jest"],
    "overrides": [
      {
        "files": ["src/**/*.spec.js", "src/**/*.spec.ts"],
        "rules": {
          "testing-library/await-async-query": 0
        }
      }
    ]
  }
}
```

Or you can create a `.eslintrc.json` and add the following configurations:

```json
{
  "overrides": [
    {
      "files": [
        "src/**/*.spec.js",
        "src/**/*.spec.ts",
        "src/**/*.cy.js",
        "src/**/*.cy.ts",
        "src/**/*.cy.jsx",
        "src/**/*.cy.tsx"
      ],
      "rules": {
        "testing-library/await-async-query": 0
      }
    }
  ]
}
```

Now we can go ahead and rewrite our test using the `findBy*` methods. We are going to write some test based on the `Counter` component. We just need to modify the code in the `Counter2.cy.tsx` to:

```tsx
import Counter from "./Counter";
describe("<Counter2 />", () => {
  it("Should render correctly with initial count set to 10", async () => {
    cy.mount(<Counter value={10} />);
    cy.findAllByRole("button").should("have.length", 2);
    cy.findByRole("heading", { level: 1 }).should("have.text", "10");
    cy.findByRole("textbox").should("exist");
  });

  it("Should render increment by 5", () => {
    cy.mount(<Counter value={10} />);
    cy.findByRole("textbox").type("5");
    cy.findByRole("button", { name: /increment/i }).click();
    cy.findByRole("heading", { level: 1 }).should("have.text", "15");
  });
  it("Should render decrement by 3", () => {
    cy.mount(<Counter value={7} />);
    cy.findByRole("textbox").type("3");
    cy.findByRole("button", { name: /decrement/i }).click();
    cy.findByRole("heading", { level: 1 }).should("have.text", "4");
  });
});
```

We have done component testing. Next we want to do End-2-End Testing

### End-2-End Testing

In this section we are going to to [`End-2-End`](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test) testing with `cypress`. First things first we are going to create a new script in the `package.json` file and add the following code in it:

```json
{
  "scripts": {
    "cy2": "npx cypress open --e2e"
  }
}
```

We are going to tell `cypress` where to find the `spec` files in the `cypress.config.ts` as follows:

```ts
import { defineConfig } from "cypress";
export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
    specPattern: ["src/**/*.cy.{js,jsx,ts,tsx}"],
    testIsolation: false,
  },
});
```

In the `tsconfig.json` under compiler options add the following option:

```json
{
  "isolatedModules": false
}
```

We are going to create a basic application that allow user to login and type their name. So everything will be in the `App.tsx`

```tsx
import React from "react";

const App = () => {
  const [user, setUser] = React.useState<
    | {
        nickname: string;
      }
    | undefined
  >(undefined);
  return user ? <Form nickname={user.nickname} /> : <Login setUser={setUser} />;
};

export default App;
interface Props {
  setUser: React.Dispatch<
    React.SetStateAction<
      | {
          nickname: string;
        }
      | undefined
    >
  >;
}
const Form = ({ nickname }: { nickname: string }) => {
  const [state, setState] = React.useState({
    message: "",
    nickname: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (state.nickname === nickname) {
          setState((state) => ({ ...state, message: `Hello ${nickname}!` }));
        } else {
          setState((state) => ({
            ...state,
            message: `No you are not ${state.nickname}!`,
          }));
        }
      }}
    >
      {state.message && <p>{state.message}</p>}
      <input
        type="text"
        placeholder="nickname"
        value={state.nickname}
        onChange={(e) =>
          setState((state) => ({ ...state, nickname: e.target.value }))
        }
      />
      <button type="submit">GREET</button>
    </form>
  );
};
const Login = ({ setUser }: Props) => {
  const [state, setState] = React.useState({
    error: "",
    password: "",
    nickname: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (state.nickname === "bob" && state.password === "b0b") {
          setUser({ nickname: state.nickname });
        } else {
          setState((state) => ({
            ...state,
            password: "",
            error: "Invalid credentials.",
          }));
        }
      }}
    >
      <input
        type="text"
        placeholder="nickname"
        value={state.nickname}
        onChange={(e) =>
          setState((state) => ({ ...state, nickname: e.target.value }))
        }
      />
      <input
        type="password"
        placeholder="password"
        value={state.password}
        onChange={(e) =>
          setState((state) => ({ ...state, password: e.target.value }))
        }
      />
      <br />
      {state.error && <p>{state.error}</p>}
      <button type="submit">LOGIN</button>
    </form>
  );
};
```

The above is what we are going to test using `e-2-e` testing. We are going to create a `App.cy.tsx` file and add the following code in it.

```tsx
describe("<App/>", () => {
  describe("<Login/>", () => {
    it("start at login page", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).should("exist");
      cy.findByPlaceholderText(/password/i).should("exist");
      cy.findByRole("button").should("exist");
      cy.findByText(/invalid credentials./i).should("not.exist");
    });

    it("login with error", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByPlaceholderText(/password/i).type("bob");
      cy.findByRole("button").click();
      cy.findByText(/invalid credentials./i).should("exist");
    });

    it("login with correct credentials", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByPlaceholderText(/password/i).type("b0b");
      cy.findByRole("button").click();
      cy.findByText(/invalid credentials./i).should("not.exist");
    });
  });
  describe("<Form/>", () => {
    it("to have an input", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByPlaceholderText(/password/i).type("b0b");
      cy.findByRole("button").click();
      cy.findByText(/invalid credentials./i).should("not.exist");

      cy.findByPlaceholderText(/nickname/i).should("exist");
      cy.findByRole("button", { name: /greet/i }).should("exist");
      cy.findByText(/invalid credentials./i).should("not.exist");
    });
    it("should tell me that i'm not alice", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByPlaceholderText(/password/i).type("b0b");
      cy.findByRole("button").click();
      cy.findByText(/invalid credentials./i).should("not.exist");

      cy.findByPlaceholderText(/nickname/i).type("alice");
      cy.findByRole("button").click();
      cy.findByText(/No you are not alice!/i).should("exist");
    });
    it("send a hello message", () => {
      cy.visit("/");
      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByPlaceholderText(/password/i).type("b0b");
      cy.findByRole("button").click();
      cy.findByText(/invalid credentials./i).should("not.exist");

      cy.findByPlaceholderText(/nickname/i).type("bob");
      cy.findByRole("button").click();
      cy.findByText(/Hello bob!/i).should("exist");
    });
  });
});
```

That is a quick example that shows how we can do `e2e` testing with `cypress`.

### CI with Github workflows.

The following

```yml

```

### Refs

1. [cypress](https://docs.cypress.io/guides/overview/why-cypress)
2. [component-testing](https://docs.cypress.io/guides/component-testing/react/examples#Mounting-Components)
3. [eslint](https://eslint.org/docs/latest/use/configure/configuration-files)
4. [Github Actions](https://docs.cypress.io/guides/continuous-integration/github-actions)
5. [cypress-io/github-action](https://github.com/cypress-io/github-action/tree/master)
