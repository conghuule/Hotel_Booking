import { Button } from 'antd';
import logo from 'assets/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signout } from 'store/authSlice';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <div className="bg-mainColor-200 text-white flex justify-center">
      <div className="container p-3 flex justify-between items-center">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('')}
        >
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-semibold">Booking Hotel</span>
        </div>
        <div className="flex gap-4">
          {isLogin ? (
            <Button onClick={() => dispatch(signout())}>Sign Out</Button>
          ) : (
            <>
              <Button onClick={() => navigate('signup')}>Sign Up</Button>
              <Button onClick={() => navigate('signin')}>Sign In</Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
