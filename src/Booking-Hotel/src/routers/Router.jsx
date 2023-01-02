import MainLayout from 'layouts/MainLayout';
import AddReview from 'pages/AddReview/AddReview';
import BookingHistory from 'pages/BookingHistory/BookingHistory';
import Dashboard from 'pages/Dashboard/Dashboard';
import Detail from 'pages/Detail/Detail';
import Home from 'pages/Home/Home';
import Manage from 'pages/Manage/Manage';
import NotFound from 'pages/NotFound/NotFound';
import Payment from 'pages/Payment/Payment';
import SearchResult from 'pages/SearchResult/SearchResult';
import SignIn from 'pages/SignIn/SignIn';
import SignUp from 'pages/SignUp/SignUp';
import UserProfile from 'pages/UserProfile/UserProfile';
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
        <Route path="search" element={<SearchResult />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route element={<PrivateRoute />}>
          <Route path="profile" element={<UserProfile />} />
          <Route path="payment" element={<Payment />} />
          <Route path="manage" element={<Manage />} />
          <Route path="manage/:id" element={<Manage isUpdate />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="history" element={<BookingHistory />} />
          <Route path="add-review/:id" element={<AddReview />} />
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
