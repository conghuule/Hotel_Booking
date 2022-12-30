import { Button } from 'antd';
import CustomForm from 'components/Form/CustomForm';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'services/config';
import { addData } from 'services/services';

export default function SignUp() {
  const schema = [
    {
      type: 'text',
      name: 'username',
      label: 'Username',
      placeholder: 'Username',
      required: true,
    },
    {
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Password',
      required: true,
    },
    {
      type: 'text',
      name: 'phone',
      label: 'Phone',
      placeholder: 'Phone',
      required: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      placeholder: 'Email',
      required: true,
      rules: { type: 'email', message: 'The input is not valid E-mail!' },
    },
    {
      type: 'text',
      name: 'id_card_number',
      label: 'Id Card Number',
      placeholder: 'Id Card Number',
      required: true,
    },
    {
      type: 'radio',
      name: 'type',
      label: 'Account Type',
      required: true,
      options: [
        { label: 'Customer', value: 'customer' },
        { label: 'Hotel Owner', value: 'hotelOwner' },
      ],
    },
    {
      type: 'checkbox',
      name: 'agreement',
      placeholder: 'I have read & agree with terms & conditions',
      rules: {
        validator: (_, value) =>
          value
            ? Promise.resolve()
            : Promise.reject(new Error('Should accept agreement')),
        message: 'Should accept agreement',
      },
    },
  ];

  const defaultValues = {
    type: 'customer',
  };

  const signup = async (data, form) => {
    try {
      const userData = {
        email: data.email,
        id_card_number: data.id_card_number,
        phone: data.phone,
        type: data.type,
        username: data.username,
      };

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const user = userCredential.user;

      // eslint-disable-next-line no-unused-vars
      const res = await addData('users', userData, user.uid);
    } catch (error) {
      switch (error.code) {
        case 'auth/weak-password':
          form.setFields([
            {
              name: 'password',
              errors: ['Password should be at least 6 characters'],
            },
          ]);
          break;
        case 'auth/email-already-in-use':
          form.setFields([{ name: 'email', errors: ['Email already in use'] }]);
          break;
        default:
          console.log(error.code, error.message);
          break;
      }
    }
  };

  return (
    <div className="flex flex-col items-center my-4">
      <h1 className="text-bold">Sign Up</h1>
      <div className="w-[350px] flex-1 px-4">
        <CustomForm
          vertical
          id="signupForm"
          schema={schema}
          defaultValues={defaultValues}
          onFinish={(values, form) => signup(values, form)}
        />
        <Button type="primary" block htmlType="submit" form="signupForm">
          Sign Up
        </Button>
      </div>
    </div>
  );
}
