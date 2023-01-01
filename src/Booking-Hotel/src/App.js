import { ConfigProvider } from 'antd';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'routers/Router';
import { auth } from 'services/config';
import { getData } from 'services/services';
import { signin, signout } from 'store/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        user.data = await getData({ docName: 'users', id: user?.uid });
        dispatch(signin(user));
      } else {
        dispatch(signout());
      }
    });

    return () => {
      unsubscribe();
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
