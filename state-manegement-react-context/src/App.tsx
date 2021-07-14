import { AppProvider } from "./context";
import Products from "./Products";

const App = () => (
  <AppProvider>
    <Products />
  </AppProvider>
);

export default App;
