import { Button } from 'antd';
import CustomForm from 'components/Form/CustomForm';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { auth } from 'services/config';
import { signin } from 'store/authSlice';

export default function SignIn() {
  const dispatch = useDispatch();

  const schema = [
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      required: true,
      rules: { type: 'email', message: 'The input is not valid E-mail!' },
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Password',
      required: true,
    },
  ];

  const signinAccount = async (data, form) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      dispatch(signin(userCredential.user));
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          form.setFields([
            {
              name: 'password',
              errors: ['Wrong password'],
            },
          ]);
          break;
        case 'auth/user-not-found':
          form.setFields([
            {
              name: 'email',
              errors: ['Email not found'],
            },
          ]);
          break;
        default:
          console.log(error.code, error.message);
          break;
      }
    }
  };

  return (
    <div className="flex flex-col items-center my-4">
      <h1 className="text-bold">Sign In</h1>
      <div className="w-[350px] flex-1 px-4">
        <CustomForm
          vertical
          id="signinForm"
          schema={schema}
          onFinish={(values, form) => signinAccount(values, form)}
        />
        <Button type="primary" block htmlType="submit" form="signinForm">
          Sign In
        </Button>
      </div>
    </div>
  );
}
