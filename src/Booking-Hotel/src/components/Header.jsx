import { Button, Dropdown } from 'antd';
import logo from 'assets/images/logo.png';
import {
  AiOutlineHistory,
  AiOutlineLogout,
  AiOutlineUser,
} from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { RiArrowDownSFill } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signout } from 'store/authSlice';

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth);

  const { user, isLogin } = authData;
  const userType = user?.data?.type;

  const items = [
    {
      key: 'profile',
      label: 'Profile',
      icon: <AiOutlineUser />,
    },
    {
      key: userType === 'hotelOwner' ? 'dashboard' : 'history',
      label: userType === 'hotelOwner' ? 'Dashboard' : 'Booking history',
      icon: userType === 'hotelOwner' ? <RxDashboard /> : <AiOutlineHistory />,
    },
    {
      key: 'signout',
      label: 'Sign out',
      icon: <AiOutlineLogout />,
    },
  ];

  const handleButtonClick = (e) => {
    if (e.key === 'profile') {
      navigate('profile');
    }
    if (e.key === 'dashboard') {
      navigate('dashboard');
    }
    if (e.key === 'history') {
      navigate('history');
    }
    if (e.key === 'signout') {
      dispatch(signout());
      navigate('');
    }
  };

  return (
    <div className="bg-mainColor-200 text-white flex justify-center">
      <div className="container p-3 flex justify-between items-center px-10">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate('')}
        >
          <img src={logo} alt="logo" className="w-10 h-10" />
          <span className="font-semibold">Booking Hotel</span>
        </div>
        <div className="flex gap-4 mr-4">
          {isLogin ? (
            <Dropdown
              menu={{ items, onClick: handleButtonClick }}
              placement="bottom"
              trigger={['click']}
            >
              <div className="flex items-center gap-2 cursor-pointer">
                {user.data?.avatar ? (
                  <img
                    src={user.data?.avatar}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <FaUserCircle fontSize={32} />
                )}
                <RiArrowDownSFill fontSize={20} />
              </div>
            </Dropdown>
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
