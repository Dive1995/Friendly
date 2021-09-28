import CreatePost from "./components/CreatePost/CreatePost";
import HomeFeed from "./components/HomeFeed/HomeFeed";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./actions/posts";

const theme = {
  colors: {
    createPost: 'grey',
  }
}

function App() {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  console.log(posts);

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <ThemeProvider theme={theme}>
      <CreatePost/>
      <HomeFeed/>
    </ThemeProvider>
  );
}

export default App;
