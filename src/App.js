
import './App.css';
// import PostList from './API/PostList';
// import PostForm from './API/PostForm';
import Home from './API/Home';


function App() {
  return (
    <div className="App">
      
      {/* <PostList></PostList>   Get request component */}
      {/* <PostForm></PostForm>  Post request component*/}
      <Home/>   /* put and delete request */
    </div>
  );
}

export default App;
