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
