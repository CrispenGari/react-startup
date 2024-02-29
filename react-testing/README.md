### Testing React Apps

In this readme file we are going to go through how we can test react components in `reactjs`. Note that the code for this was initialized using `cra`.

### What are we going to use to test react apps?

1. [`jest`](https://jestjs.io/docs/tutorial-react)
2. [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/)

> We don't need to worry about these libraries if we initialize our app with `cra`.

### File naming conversions for testing with `cra` and `jest`.

The following are the file naming conversion that help `jest` to pickup test files in react.

1. `*.test.jsx`, `*.test.tsx`, `*.test.js`
2. `*.spec.jsx`, `*.spec.tsx`, `*.spec.js`
3. The third one is a folder named `__test__` and in that folder you can create your test files for example:
   - `*.jsx`, `*.tsx`, `*.js`

To test your components you just have to run the command:

```shell
yarn test
```

By default the `cra` generates a test file for the app component called `App.tests.tsx` which looks as follows:

```ts
import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

Here is what's happening here:

1. We are using the `render` method from `'@testing-library/react'` to mount our component `App`
2. Query an element that has text `learn react`
3. Check if it exists in the document
   > Note that `cra` exposes the method like `expect`, `test` etc, from jest we don't need to import them manually.

### First Test

Let's create our very first components and test them out. For that we are going to create a folder called `components` in the `src` folder. Note that for all the test files that we will have will be relative to the component folder, meaning this will be the file structure.

```
📁 src
    📁 components
        📁 Button
            - Button.css
            - Button.spec.tsx
            - Button.tsx
```

In our `Button.tsx` we are going to have the following code in it:

```tsx
import React from "react";
interface Props {
  title: string;
  color: "primary" | "secondary" | "default";
}
const Button: React.FC<Props> = ({ title, color }) => {
  return <button className={`button ${color}`}>{title}</button>;
};

export default Button;
```

To write some test of this button we are going to go to the ` Button.test.tsx` and ddd the following code in it.

```tsx
import { render, screen } from "@testing-library/react";
import Button from "./Button";

test("Testing Default Button", () => {
  render(<Button color="default" title="Default" />);
  const element = screen.getByText("Default", { trim: true });
  expect(element).toContainElement(element);
});
test("Testing Primary Button", () => {
  render(<Button color="primary" title="Primary" />);
  const element = screen.getByText("Primary", { trim: true });
  expect(element).toContainElement(element);
});
test("Testing Secondary Button", () => {
  render(<Button color="secondary" title="Secondary" />);
  const element = screen.getByText("Secondary", { trim: true });
  expect(element).toContainElement(element);
});
```

Here we are just testing if the button contains the title that we specify. We are using the `screen.getByText` to get the element that has the text of the title passed as props. We can replace `test` with `it` method and it will work exactly the same here is an example:

```tsx
import { render, screen } from "@testing-library/react";
import Button from "./Button";

it("Testing Default Button", () => {
  render(<Button color="default" title="Default" />);
  const element = screen.getByText("Default", { trim: true });
  expect(element).toContainElement(element);
});
it("Testing Primary Button", () => {
  render(<Button color="primary" title="Primary" />);
  const element = screen.getByText("Primary", { trim: true });
  expect(element).toContainElement(element);
});
it("Testing Secondary Button", () => {
  render(<Button color="secondary" title="Secondary" />);
  const element = screen.getByText("Secondary", { trim: true });
  expect(element).toContainElement(element);
});
```

We can also use regular expression to match elements, here is an example.

```tsx
it("Testing Default Button", () => {
  render(<Button color="default" title="Default" />);
  const element = screen.getByText(/default/i, { trim: true });
  expect(element).toContainElement(element);
});
```

We can also skip some test in the `test suite` (file). Here is how we can do it using the `it` method.

```tsx
xit("Testing Default Button", () => {
  render(<Button color="default" title="Default" />);
  const element = screen.getByText(/default/i, { trim: true });
  expect(element).toContainElement(element);
});
// or
it.skip("Testing Secondary Button", () => {
  render(<Button color="secondary" title="Secondary" />);
  const element = screen.getByText("Secondary", { trim: true });
  expect(element).toContainElement(element);
});
```

You can do this using the `test` method as follows.

```tsx
test.skip("Testing Default Button", () => {
  render(<Button color="default" title="Default" />);
  const element = screen.getByText(/default/i, { trim: true });
  expect(element).toContainElement(element);
});
```

We can use the `only` method to run only that test in the file. Here is how we can do it using the `test` method.

```tsx
test.only("Testing Default Button", () => {
  render(<Button color="default" title="Default" />);
  const element = screen.getByText(/default/i, { trim: true });
  expect(element).toContainElement(element);
});
```

Or using the `it` method as follows:

```tsx
fit("Testing Default Button", () => {
  render(<Button color="default" title="Default" />);
  const element = screen.getByText(/default/i, { trim: true });
  expect(element).toContainElement(element);
});
// or
it.only("Testing Primary Button", () => {
  render(<Button color="primary" title="Primary" />);
  const element = screen.getByText("Primary", { trim: true });
  expect(element).toContainElement(element);
});
```

We can group the tests using the `describe` method in a test suite. let's group our test together.

```tsx
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("Testing Default", () => {
    render(<Button color="default" title="Default" />);
    const element = screen.getByText(/default/i, { trim: true });
    expect(element).toContainElement(element);
  });
  describe("None Default", () => {
    test("Testing Primary", () => {
      render(<Button color="primary" title="Primary" />);
      const element = screen.getByText("Primary", { trim: true });
      expect(element).toContainElement(element);
    });
    test("Testing Secondary", () => {
      render(<Button color="secondary" title="Secondary" />);
      const element = screen.getByText("Secondary", { trim: true });
      expect(element).toContainElement(element);
    });
  });
});
```

Note that we can nest the `describe` function as much as we want as demonstrated above.

### The watch mode and test filters

Running `yarn test` test the components in test mode. However you can filter test based on the following options.

```tsx
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press q to quit watch mode.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press Enter to trigger a test run.
```

### Code Coverage Report.

In this section we are going to have a look at coverage metric which measures how much your software code is tested. The following are the terms that will be used when generating a coverage report:

1. **Statement coverage**
   - how many statement in the code have been executed
2. **Branches coverage**
   - how many control statements have been executed.
3. **Function Coverage**
   - How many functions defined have been called.
4. **Line Coverage**
   - How many lines of code have been executed.

With cra we can obtain code coverage out of the fly. We are going to open the `package.json` file and add the following script:

```json
{
  "coverage": "yarn test --coverage"
}
```

Now if you can run `yarn coverage` you will get the following logs:

```shell
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |   21.42 |        0 |      50 |   21.42 |
 src                   |    8.33 |        0 |   33.33 |    8.33 |
  App.tsx              |     100 |      100 |     100 |     100 |
  index.tsx            |       0 |      100 |     100 |       0 | 7-19
  reportWebVitals.ts   |       0 |        0 |       0 |       0 | 3-10
 src/components/Button |     100 |      100 |     100 |     100 |
  Button.tsx           |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|-------------------

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        13.626 s
Ran all test suites related to changed files.
```

> You will notice that in the coverage table the are no tests related to `index.tsx` and `reportWebVitals.ts`. We don't need the tests for these files so we can ignore them we are going to modify our script to:

```json
{
  "coverage": "yarn test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx,js,jsx}'"
}
```

However sometimes you might want to skip some files, even though they are in the `src/components` path. You can configure that as follows:

```json
{
  "coverage": "yarn test --coverage --watchAll --collectCoverageFrom='!src/components/**/*.{types,stories,test,constants,spec}.{ts,tsx,js,jsx}'"
}
```

The above will skip all the files that have `.types.js`, etc when generating code coverage.

We can specifying a minimum threshold for the coverage report, The following configuration can be added in the `package.json` to specify the minimum threshold for the coverage report.

```json
{
  "jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -10
      }
    }
  }
}
```

With the above configuration jest will fail if the code coverage for the `branches`, `functions` and `lines` are not above `80%` and if `10` or more statements are not executed.

There is a coverage folder that is generated in the root of our project where we can view the coverage report from an `coverage/Icov-report/index.html` file.

### Assertions

You can find the commonly used matchers in the [jest documentations](https://jestjs.io/docs/using-matchers) very important for assertions. For the `Dom` assertion matchers you can find them in the [Jest-Dom](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveclass) documentation.

### React Test Library Queries.

In this section we are going to cover some query functions that we can use to select elements in the `Dom`. The following functions are used to get the an element from the dom.

1. `getByRole`
2. `getByLabelText`
3. `getByPlaceholderText`
4. `getByText`
5. `getByDisplayValue`
6. `getByAltText`
7. `getByTitle`
8. `getByTestId`

> Note that when you are calling these methods we should have exactly one element that matches the query. If there two or more elements we will get an error. let's say we have the following component `Login`

```tsx
import React from "react";
interface Props {}
const Login: React.FC<Props> = () => {
  return (
    <form className="login">
      <h1>Login</h1>
      <h2>What are you waiting.</h2>
      <p>Please make sure that you provide all the details required!</p>
      <img src="/favicon.ico" alt="logo" />
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" placeholder="Full Name" />
      </div>
      <div>
        <label htmlFor="bio">Bio</label>
        <textarea name="bio" id="bio"></textarea>
      </div>
      <button>Login</button>
    </form>
  );
};
export default Login;
```

We can use the `getByRole` to test if the component renders correctly.

```tsx
import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
  test("renders", () => {
    render(<Login />);
    // getByRole
    const input = screen.getByRole("textbox", { name: "Name" });
    expect(input).toBeInTheDocument();
    const textarea = screen.getByRole("textbox", { name: "Bio" });
    expect(textarea).toBeInTheDocument();

    const h1 = screen.getByRole("heading", { level: 1 }); // level 1 for an h1
    const h2 = screen.getByRole("heading", { level: 2 });
    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
    const btn = screen.getByRole("button", { name: "Login" });
    expect(btn).toBeInTheDocument();
  });
});
```

We can use the `getByLabelText` instead of the `getByRole` to get the elements that have a `label` tag as follows:

```tsx
describe("Login", () => {
  test("renders", () => {
    render(<Login />);
    // getByLabelText
    const input = screen.getByLabelText("Name", { selector: "input" });
    expect(input).toBeInTheDocument();
    const textarea = screen.getByLabelText(/bio/i);
    expect(textarea).toBeInTheDocument();
  });
});
```

We can use the `getByPlaceholderText` to get the textiput that have a placeholder `Full Name`

```tsx
describe("Login", () => {
  test("renders", () => {
    render(<Login />);
    // getByPlaceholderText
    const input = screen.getByPlaceholderText(/full name/i);
    expect(input).toBeInTheDocument();
  });
});
```

Next we are going to use the `getByDisplayValue` from a text input. First we will need to give our text-input a value as follows:

```jsx
<div>
  <label htmlFor="name">Name</label>
  <input
    type="text"
    name="name"
    id="name"
    placeholder="Full Name"
    value={"John Doe"}
    onChange={() => {}}
  />
</div>
```

Now we can get the element as follows:

```tsx
describe("Login", () => {
  test("renders", () => {
    render(<Login />);
    // getByDisplayValue
    const input = screen.getByDisplayValue(/doe$/i);
    expect(input).toBeInTheDocument();
  });
});
```

The `getByAltText` is used to get elements on the dom that takes `alt` as prop. Let's grab the image by alt text we can do it as follows:

```tsx
describe("Login", () => {
  test("renders", () => {
    render(<Login />);
    // getByAltText
    const imh = screen.getByAltText(/logo/i);
    expect(imh).toBeInTheDocument();
  });
});
```

The `getByTitle` is used to access elements that have a title. Let's modify our button component so that it will have a title in the component as follows:

```tsx
<button title="You need to login">Login</button>
```

Now we can get this button as follows;

```tsx
describe("Login", () => {
  test("renders", () => {
    render(<Login />);
    // getByTitle
    const btn = screen.getByTitle(/login/i);
    expect(btn).toBeInTheDocument();
  });
});
```

The `getByTestId` is used to access elements that has an attribute `data-testid`. Let's modify our button component.

```tsx
<button data-testid="login button">Login</button>
```

Now we can access the button as follows:

```tsx
describe("Login", () => {
  test("renders", () => {
    render(<Login />);
    // getByTestId
    const btn = screen.getByTestId(/login button/i);
    expect(btn).toBeInTheDocument();
  });
});
```

#### So which method should i use to get elements in a component?

Well you can use these methods in the order of recommentation

1. `getByRole`
2. `getByLabelText`
3. `getByPlaceholderText`
4. `getByText`
5. `getByDisplayValue`
6. `getByAltText`
7. `getByTitle`
8. `getByTestId`

Unless your use case does not fit in the `getByRole` then you can traves down the other methods in the order, `getByTestId` being the last option.

For now we have been getting a single element using the methods:

1. `getByRole`
2. `getByLabelText`
3. `getByPlaceholderText`
4. `getByText`
5. `getByDisplayValue`
6. `getByAltText`
7. `getByTitle`
8. `getByTestId`

However we can get elements instead of `one` using the following similar methods:

1. `getAllByRole`
2. `getAllByLabelText`
3. `getAllByPlaceholderText`
4. `getAllByText`
5. `getAllByDisplayValue`
6. `getAllByAltText`
7. `getAllByTitle`
8. `getAllByTestId`

These methods works the same so i will demonstrate a single method `getAllByRole` in getting ui elements in the component called `List`

```tsx
import React from "react";
interface Props {
  items: string[];
}
const List: React.FC<Props> = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};
export default List;
```

We can test this component as follows:

```tsx
describe("List", () => {
  const languages = ["Java", "TypeScript", "Python", "C++"];
  test("renders correctly", () => {
    render(<List items={languages} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  test("renders languages", () => {
    render(<List items={languages} />);
    const langs = screen.getAllByRole("listitem");
    expect(langs.length).toEqual(langs.length);
  });
});
```

1. Our first test we are testing if the `ul` in the document.
2. Second test we are testing if all the `listitems` are rendered in the dom.

Let's modify our `List` component to:

```tsx
import React from "react";
interface Props {
  items: string[];
}
const List: React.FC<Props> = ({ items }) => {
  const [user, setUser] = React.useState<string | undefined>(undefined);
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {!!user ? (
        <button>Hello</button>
      ) : (
        <button onClick={() => setUser("Hi")}>Login</button>
      )}
    </>
  );
};
export default List;
```

Let's write the test if the buttons are rendered correctly. We want to check if the `Login` button will be rendered and the `Hello` if it is hidden.

```tsx
describe("List", () => {
  const languages = ["Java", "TypeScript", "Python", "C++"];
  test("renders correctly", () => {
    render(<List items={languages} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });
  test("renders languages", () => {
    render(<List items={languages} />);
    const langs = screen.getAllByRole("listitem");
    expect(langs.length).toEqual(langs.length);
  });
  test("renders hidden Hello button", () => {
    render(<List items={languages} />);
    const btn = screen.queryByRole("button", { name: "Hello" });
    expect(btn).not.toBeInTheDocument();
  });
  test("renders Login button", () => {
    render(<List items={languages} />);
    const btn = screen.getByRole("button", { name: "Login" });
    expect(btn).toBeInTheDocument();
  });
});
```

- We have used the `expect(btn).not.toBeInTheDocument();` because this button will not be on the document initially.
- You have noticed that we are using the `queryByRole` instead of the `getByRole` because the `getByRole` method gets the element that is in the dom however the `Hello` button will be hidden at first, so to solve this we can use the `queryByRole`. Here are the list of `query` methods we have:

1. `queryByRole`
2. `queryByLabelText`
3. `queryByPlaceholderText`
4. `queryByText`
5. `queryByDisplayValue`
6. `queryByAltText`
7. `queryByTitle`
8. `queryByTestId`
9. `queryAllByRole`
10. `queryAllByLabelText`
11. `queryAllByPlaceholderText`
12. `queryAllByText`
13. `queryAllByDisplayValue`
14. `queryAllByAltText`
15. `queryAllByTitle`
16. `queryAllByTestId`

Let's modify our `List` component to:

```tsx
import React from "react";
interface Props {
  items: string[];
}
const List: React.FC<Props> = ({ items }) => {
  const [user, setUser] = React.useState<string | undefined>(undefined);
  React.useEffect(() => {
    const id = setTimeout(() => {
      setUser("hello");
    }, 1001);
    return () => clearTimeout(id);
  }, []);
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {!!user ? (
        <button>Hello</button>
      ) : (
        <button onClick={() => setUser("Hi")}>Login</button>
      )}
    </>
  );
};
export default List;
```

As you can see the `Hello` button will render after `1001ms` so we want to test for that case, let's add that test function.

```tsx
test("renders Hello button will eventually renders", async () => {
  render(<List items={languages} />);
  const btn = await screen.findByRole(
    "button",
    { name: "Login" },
    { timeout: 1001 }
  );
  expect(btn).toBeInTheDocument();
});
```

For that we can use the `findByRole` which returns a promise so we need to await for it. Note that we can specify the `timeout` option for us to wait for that promise to be fulfilled before the tests failed. As `query` and `get` here are the list of methods that we can use with the `find`.

1. `findByRole`
2. `findByLabelText`
3. `findByPlaceholderText`
4. `findByText`
5. `findByDisplayValue`
6. `findByAltText`
7. `findByTitle`
8. `findByTestId`
9. `findAllByRole`
10. `findAllByLabelText`
11. `findAllByPlaceholderText`
12. `findAllByText`
13. `findAllByDisplayValue`
14. `findAllByAltText`
15. `findAllByTitle`
16. `findAllByTestId`

### Manual Queries

Sometimes you will want to select elements in the document, you can use the `querySelector` method on the container. The container is an object that is returned when you call the `render`. Here is an example:

```ts
test("renders UL", async () => {
  const { container } = render(<List items={languages} />);
  const ul = container.querySelector("form>ul");
  expect(ul).toBeInTheDocument();
});
```

### Debugging

Sometimes you will want to debug your test. There are many ways of doing this. Here are the different ways that you can use to debug your tests in react.

```tsx
test("renders Hello button will eventually renders", async () => {
  render(<List items={languages} />);
  screen.debug();
  const btn = await screen.findByRole(
    "button",
    { name: "Login" },
    { timeout: 1001 }
  );
  screen.debug();
  expect(btn).toBeInTheDocument();
});
```

Wrapping your selector elements with the `screen.debug();` methods helps you to get the document tree of a component in the console. You can also use the method called `logRoles` or `logDom` to debug your component. The following example show how you can do that:

```ts
test("renders Hello button will eventually renders", async () => {
  const view = render(<List items={languages} />);
  logRoles(view.container);
  const btn = await screen.findByRole(
    "button",
    { name: "Login" },
    { timeout: 1001 }
  );
  logDOM(btn);
  expect(btn).toBeInTheDocument();
});
```

You will be able to see a list of `roles` for each element in the document where you can select them nicely. Another this is to use a chrome extension called [Testing Playground](https://chromewebstore.google.com/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano). You can install it and then start your react app. If you inspect the document it will give you some nice selection of elements.

1. click inspect
2. then select testing playground
3. then you can hover over elements, then it will give you nice selection code for those elements in-order of their priority. Here is a simple demonstration on that.

```tsx
screen.getByRole("link", {
  name: /learn react/i,
});
```

### User Interactions

User interactions allows us to interact with our components during testing. In this section we are going to learn about some usefull user interaction methods like `clicking` the button .etc. Let's create a component called `Counter` and and the following code in it:

```tsx
import React from "react";

interface Props {}
const Counter: React.FC<Props> = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
export default Counter;
```

Here is our basic components that changes the count wen the button increment is clicked. Now let's write a test for this

```tsx
describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const h1 = screen.getByRole("heading", { level: 1 });
    const btn = screen.getByRole("button");
    expect(h1).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });

  test("initial state is 0", () => {
    render(<Counter />);
    const h1 = screen.getByRole("heading", { level: 1 });
    expect(h1).toHaveTextContent("0");
  });
  test("increment button change state t0 1", () => {
    render(<Counter />);
    const h1 = screen.getByRole("heading", { level: 1 });
    const btn = screen.getByRole("button");
    user.click(btn, {});
    expect(h1).toHaveTextContent("1");
  });
});
```

Let's modify our Count components so that we can accept user input that will let us increment by that value when it is typed in the textbox. Here is how we can do that:

```tsx
import React from "react";

interface Props {}
const Counter: React.FC<Props> = () => {
  const [count, setCount] = React.useState(0);
  const [amount, setAmount] = React.useState(0);
  return (
    <div className="counter">
      <h1>{count}</h1>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

Next we are going to use user events to type in the textbox a value of `10` and test that.

```tsx
test("renders input correctly and the Set Button", () => {
  render(<Counter />);
  const input = screen.getByRole("textbox");
  const btn = screen.getByRole("button", { name: "Set" });
  expect(input).toBeInTheDocument();
  expect(btn).toBeInTheDocument();
});

test("changes the count to 10 after the Set button is clicked", () => {
  render(<Counter />);
  const input = screen.getByRole("textbox");
  const btn = screen.getByRole("button", { name: "Set" });
  const h1 = screen.getByRole("heading", { level: 1 });
  user.type(input, "10");
  user.click(btn, {});
  expect(h1).toHaveTextContent("10");
});
```

Here are some of the list of events that we have:

1. Pointer events
   1. `click`
   2. `dblClick`
   3. `tripleClick`
   4. `hover`
   5. `unhover`
2. Keyboard Events

   1. `clear()` -clear text inputs
   2. `selectOptions` - selection of a list box or options in a select
   3. `deselectOptions` - deselection of options
   4. `upload` - uploading a file
   5. `type` -typing in an input
   6. `tab` - tab pressing

3. Clipboard Events
   1. `copy`
   2. `paste`
   3. `cut`

### Providers

In this section we are going to learn how we can test some Providers. We are going to create a provider called `ThemeProvider` that will provide a theme to our app.

```tsx
import React from "react";

interface Props {
  children: React.ReactElement;
  theme?: "dark" | "light";
}
const ThemeProvider: React.FC<Props> = ({ children, theme = "light" }) => {
  return (
    <div
      style={
        theme === "dark"
          ? {
              backgroundColor: "black",
              color: "white",
            }
          : { backgroundColor: "white", color: "black" }
      }
    >
      {children}
    </div>
  );
};
export default ThemeProvider;
```

Here is our `ThemeProvider` that will wrap every component that requires a theme. Here is how we can test if the `ThemeProvider` is actually working for our components.

```tsx
import { render, screen } from "@testing-library/react";
import ThemeProvider from "./ThemeProvider";

describe("ThemeProvider", () => {
  test("renders text correctly", () => {
    render(<h1>Hello Dark</h1>, { wrapper: ThemeProvider });
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveStyle({ color: "black;" });
  });
});
```

We are using the `wrapper` to tell `RTL` that we want to wrap our component with `ThemeProvider`. We can create our custom reader following the docs https://testing-library.com/docs/react-testing-library/setup. First we need to create a file called `test-utils.tsx` in the `src` folder and add the following code to it:

```tsx
import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import ThemeProvider from "./ThemeProvider/ThemeProvider";

const AllTheProviders = ({ children }: { children: React.ReactElement }) => {
  return <ThemeProvider theme="light">{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
```

After that we can just import our `screen` and `render` from `test-utils.tsx` file as follows and stop using the `Wrapper` component.

```tsx
import { render, screen } from "../test-utils";
describe("ThemeProvider", () => {
  test("renders text correctly", () => {
    render(<h1>Hello Dark</h1>);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveStyle({ color: "black;" });
  });
});
```

### Testing Custom Hooks

Next we are going to learn how we can test our custom hooks. We are going to create a custom hook called `useCounter` and we are going to add the following code in it.

```tsx
import React from "react";
const useCounter = ({ value = 1 }: { value?: number }) => {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + value);
  const decrement = () => setCount(count - value);
  return {
    count,
    increment,
    decrement,
  };
};
export default useCounter;
```

Now let's go ahead and test the functionality of this `hook`

```tsx

```

```tsx

```

```tsx

```

```tsx

```

```tsx

```

```tsx

```

```tsx

```

```tsx

```

```tsx

```

```tsx

```

```tsx

```

```tsx

```

```tsx

```

```tsx

```

### Refs

1. [Jest-Dom](https://github.com/testing-library/jest-dom?tab=readme-ov-file#tohaveclass)
