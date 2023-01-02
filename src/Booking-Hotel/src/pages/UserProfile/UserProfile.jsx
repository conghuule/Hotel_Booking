import { Button, Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import CustomForm from 'components/Form/CustomForm';
import ImageUpload from 'components/ImageUpload/ImageUpload';
import notify from 'components/notify';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFile, getData, updateData } from 'services/services';
import { updateProfile } from 'store/authSlice';

export default function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [userData, setUserData] = useState();
  const [form] = useForm();

  useEffect(() => {
    getData({ docName: 'users', id: user.uid }).then((res) => setUserData(res));
  }, [user]);

  useEffect(() => {
    form.setFieldsValue({ ...userData });
  }, [form, userData]);

  const schema = [
    {
      type: 'text',
      name: 'username',
      label: 'Username',
      placeholder: 'Username',
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
      disabled: true,
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
      disabled: true,
      options: [
        { label: 'Customer', value: 'customer' },
        { label: 'Hotel Owner', value: 'hotelOwner' },
      ],
    },
  ];

  const onSubmit = async ({ profileForm }) => {
    const infoData = profileForm.getFieldsValue();
    const avatar = profileForm.getFieldValue('avatar')?.fileList;

    try {
      const avatarURL = avatar?.length
        ? await addFile({
            file: avatar?.at(-1)?.originFileObj,
            folder: 'users',
          })
        : avatar?.length === 0
        ? null
        : userData?.avatar;

      const submitData = {
        ...infoData,
        avatar: avatarURL,
      };

      console.log(submitData);

      await updateData({ docName: 'users', id: user.uid, data: submitData });
      dispatch(updateProfile(submitData));
      notify({ mess: 'Update profile successful', type: 'success' });
    } catch (error) {
      console.log(error);
      notify({ mess: 'Update profile failed', type: 'error' });
    }
  };

  return (
    <Form.Provider onFormFinish={(_, { forms }) => onSubmit(forms)}>
      <Form form={form} name="profileForm">
        <div className="flex flex-col items-center">
          <h1 className="text-mainColor-200">Profile</h1>
          <div className="flex flex-col gap-5">
            <ImageUpload
              initialValue={
                userData?.avatar ? [{ url: userData?.avatar }] : null
              }
              name="avatar"
              size="md"
            />
            <div className="-mt-10">
              <CustomForm id="infoForm" schema={schema} formWrapper />
            </div>
          </div>
          <Button type="primary" htmlType="submit">
            Save changes
          </Button>
        </div>
      </Form>
    </Form.Provider>
  );
}
