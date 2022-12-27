import MainLayout from 'layouts/MainLayout';
import Home from 'pages/Home/Home';
import Manage from 'pages/Manage/Manage';
import NotFound from 'pages/NotFound/NotFound';
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
        <Route element={<PrivateRoute />}>
          {/* <Route index element={<Home />} />
          <Route path="home" element={<Home />} /> */}
          <Route index element={<Manage />} />
          <Route path="manage" element={<manage />} />
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
