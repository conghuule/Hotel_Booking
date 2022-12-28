import MainLayout from 'layouts/MainLayout';
import Detail from 'pages/Detail/Detail';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import Payment from 'pages/Payment/Payment';
import SearchResult from 'pages/SearchResult/SearchResult';
import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

const PrivateRoute = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return isLogin ? <Outlet /> : <Navigate to="signin" />;
};

const AuthRoute = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return isLogin ? <Navigate to="" /> : <Outlet />;
};

export default function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="search/:searchKey" element={<SearchResult />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route element={<PrivateRoute />}>
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
