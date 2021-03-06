import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreatePost from "./components/CreatePost/CreatePost";
import HomeFeed from "./components/HomeFeed/HomeFeed";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "./actions/posts";
import Container from "./Styles/Container.styled";
import GlobalStyles from "./Styles/Global.styled";
import Nav from "./components/Nav/Nav";
import Auth from './components/Auth/Auth';
import Notification from './Styles/Notification.styled';

const theme = {
  colors: {
    body: '#f5f5f5',
    post: '#fff'
  }
}

function App() {
  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts)
  const error = useSelector(state => state.error)

  const [alert, setAlert] = useState({message:'', status:'', isAlert: false})
  // const location = useLocation();

  const [user, setUser] = useState(null)

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage?.getItem('userProfile'))?.user)
  // },[location])

  // useEffect(() => {
  //   dispatch(getPosts(1, 2))
  // }, [dispatch])

  useEffect(() => {
    setAlert(error)

    const timeout = setTimeout(() => {
      setAlert({message:'', status:'', isAlert: false})
    },3000)

    return () => clearTimeout(timeout)
  }, [error])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      { alert.isAlert && <Notification>
      {alert?.message}
      </Notification>}
      <Router>
          <Nav user={user} setUser={setUser}/>
          <Container>
          <Switch>
            <Route exact path='/'>
                {/* {modalOpen && <Modal />} */}
                <CreatePost user={user}/>
                <HomeFeed user={user}/>
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
