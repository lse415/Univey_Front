<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App';
import Main from './pages/Main';
import Board from './pages/Board';
import Create from './pages/Create';
import My from './pages/My';
import Trend from './pages/Trend';
import Search from './pages/Search';
import Participate from './pages/Participate';
import LoginHandle from './pages/LoginHandle';
import QRcode from './pages/QRcode';
import Result from './pages/Result';
import Board2 from './pages/Board2';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Main from "./pages/Main";
import Board from "./pages/Board";
import Create from "./pages/Create";
import CreateDetail from "./pages/CreateDetail";
import My from "./pages/My";
import Trend from "./pages/Trend";
import Search from "./pages/Search";
import Participate from "./pages/Participate";
import ParticipateComplete from "./pages/ParticipateComplete";
>>>>>>> 600cdf67b214d13f7aae50b4099d16ec92a41796

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
<<<<<<< HEAD
      { index: true, element: <Main/> },
      { path: 'main', element: <Main /> },
      { path: 'main/board', element: <Board2 /> },
      { path: 'main/create', element: <Create /> },
      { path: 'main/create/detail', element: <Create /> },
      { path: 'main/my', element: <My/> },
      { path: 'main/trend', element: <Trend/> },
      { path: 'main/search/:value', element: <Search/> },
      { path: 'main/participate', element: <Participate/> },
      { path: 'user/kakao/callback', element: <LoginHandle/>},
      { path: 'main/create/qr', element: <QRcode/>},
      { path: 'main/result', element: <Result/>},
=======
      { index: true, element: <Main /> },
      { path: "main", element: <Main /> },
      { path: "main/board", element: <Board /> },
      { path: "main/create", element: <Create /> },
      { path: "main/create/detail", element: <CreateDetail /> },
      { path: "main/my", element: <My /> },
      { path: "main/trend", element: <Trend /> },
      { path: "main/search/:value", element: <Search /> },
      { path: "main/participate", element: <Participate /> },
      { path: "main/participate/complete", element: <ParticipateComplete /> },
>>>>>>> 600cdf67b214d13f7aae50b4099d16ec92a41796
    ],
  },
  {
    path: '/login',
    element: <Trend/>
  }
]);
<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root'));

=======
const root = ReactDOM.createRoot(document.getElementById("root"));
>>>>>>> 600cdf67b214d13f7aae50b4099d16ec92a41796
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
