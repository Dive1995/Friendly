import CreatePost from "./components/CreatePost/CreatePost";
import HomeFeed from "./components/HomeFeed/HomeFeed";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    createPost: 'grey',
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CreatePost/>
      <HomeFeed/>
    </ThemeProvider>
  );
}

export default App;
