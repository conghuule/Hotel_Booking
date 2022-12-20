import { ConfigProvider } from 'antd';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'routers/router';
import { auth } from 'services/config';
import { signin, signout } from 'store/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(signin(user));
      } else {
        dispatch(signout());
      }
    });

    return () => {
      unsubcribe();
    };
  }, [dispatch]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#00ACDF',
        },
      }}
    >
      <Router />
    </ConfigProvider>
  );
}

export default App;
