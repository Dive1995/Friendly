import CreatePost from "./components/CreatePost/CreatePost";
import HomeFeed from "./components/HomeFeed/HomeFeed";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./actions/posts";
import Container from "./Styles/Container.styled";
import GlobalStyles from "./Styles/Global.styled";

const theme = {
  colors: {
    body: '#f5f5f5',
    post: '#fff'
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
      <GlobalStyles/>
      {/* <Header/> */}
      <Container>
        <CreatePost/>
        <HomeFeed/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
