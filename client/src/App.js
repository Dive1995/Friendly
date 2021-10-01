import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreatePost from "./components/CreatePost/CreatePost";
import HomeFeed from "./components/HomeFeed/HomeFeed";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "./actions/posts";
import Container from "./Styles/Container.styled";
import GlobalStyles from "./Styles/Global.styled";
import Nav from "./components/Nav/Nav";
import Auth from './components/Auth/Auth';

const theme = {
  colors: {
    body: '#f5f5f5',
    post: '#fff'
  }
}

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  const user = useSelector(state => state.user)
  console.log(posts);
  console.log(user);

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])


  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Router>
          <Nav/>
          <Container>
          <Switch>
            <Route exact path='/'>
                {/* {modalOpen && <Modal />} */}
                <CreatePost />
                <HomeFeed />
            </Route>
          <Route exact path="/auth">
            <Auth/>
          </Route>
          </Switch>
          </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
