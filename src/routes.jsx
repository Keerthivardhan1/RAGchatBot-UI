import Chat from "./components/ChatUI";
import Test from "./components/Test";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TestPage from "./pages/TestPage";


const routes = [
    {
      element: <MainLayout />, 
      children: [
        {path: '/' , element:<Home/>},
        {path: '/login' , element:<Login/>},
        {path:'test' , element:<Test/>},
        {path:'/chat' , element:<Chat/>}
      ]
    },
    {path:'/login' , element:<Login/>},
    {path:'/testpage' , element:<TestPage/>}
  ];

export default routes




