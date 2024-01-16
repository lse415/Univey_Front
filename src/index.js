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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main/> },
      { path: 'main', element: <Main /> },
      { path: 'main/board', element: <Board /> },
      { path: 'main/create', element: <Create /> },
      { path: 'main/create/detail', element: <Create /> },
      { path: 'main/my', element: <My/> },
      { path: 'main/trend', element: <Trend/> },
      { path: 'main/search/:value', element: <Search/> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
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
import Trend from "./pages/Trend";
import Search from "./pages/Search";
import Participate from "./pages/Participate";
import LoginHandle from "./pages/LoginHandle";
import QRcode from "./pages/QRcode";
import Result from "./pages/Result";
import Board2 from "./pages/Board2";
import CreateDetail from "./pages/CreateDetail";
import My from "./pages/My";
import MyInfo from "./pages/MyInfo";
import MySurveys from "./pages/MySurveys";
import MyPoint from "./pages/MyPoint";
import ParticipateComplete from "./pages/ParticipateComplete";
import ResultDetail from "./pages/ResultDetail";
import CreateComplete from "./pages/CreateComplete";
import PaymentRequest from "./pages/PaymentRequest";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFail from "./pages/PaymentFail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      { path: "main", element: <Main /> },
      { path: "main/board", element: <Board2 /> },
      { path: "main/my", element: <My /> },
      { path: "main/trend", element: <Trend /> },
      { path: "main/search/:value", element: <Search /> },
      { path: "users/kakao/callback", element: <LoginHandle /> },
      { path: "main/create/qr/:surveyId", element: <QRcode /> },
      { path: "main/create/complete/:surveyId", element: <CreateComplete /> },
      { path: "main/result/:surveyId", element: <Result /> },
      {
        path: "main/result/:surveyId/edit/:questionNum",
        element: <ResultDetail />,
      },
      { path: "main/create", element: <Create /> },
      {
        path: "main/create/details/:surveyTopic",
        element: <CreateDetail />,
      },
      {
        path: "main/create/complete/:surveyId",
        element: <CreateComplete />,
      },
      { path: "main/my/info", element: <MyInfo /> },
      { path: "main/my/surveys", element: <MySurveys /> },
      { path: "main/my/point", element: <MyPoint /> },
      {
        path: "main/my/point/charge",
        element: <PaymentRequest />,
      },
      {
        path: "main/my/point/charge/success",
        element: <PaymentSuccess />,
      },
      {
        path: "main/my/point/charge/fail",
        element: <PaymentFail />,
      },
      { path: "main/participate/:surveyId", element: <Participate /> },

      {
        path: "main/participate/:surveyId/complete",
        element: <ParticipateComplete />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
>>>>>>> 767cdb5e29cb71aeb34c578af0b8969989f27290
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
