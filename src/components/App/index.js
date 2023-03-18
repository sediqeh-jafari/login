import './style.css';
import {createBrowserRouter,Navigate,RouterProvider} from 'react-router-dom';
import Login from '../../pages/Login';
import Profile from '../../pages/Profile'
import Register from '../../pages/Register';
// import Items from '../itemTask';
// import Inpute1 from '../content';
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Login></Login>
    },
    {
      path:'Register',
      element:<Register/>
    },
    {
      path:'/profile',
      element:<Profile/>
    },
    {
      path:'*',
      element:<Navigate to={'/'}/>
    }
  ])
  return (

      <RouterProvider router={router}/>
      // <Inpute1></Inpute1>
   
  );
}

export default App;
