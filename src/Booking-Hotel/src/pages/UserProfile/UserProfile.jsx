import { Button, Form } from 'antd';
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

  useEffect(() => {
    getData({ docName: 'users', id: user.uid }).then((res) => setUserData(res));
  }, [user]);

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
      options: [
        { label: 'Customer', value: 'customer' },
        { label: 'Hotel Owner', value: 'hotelOwner' },
      ],
    },
  ];

  const defaultValues = {
    ...userData,
  };

  const onSubmit = async ({ avatarForm, infoForm }) => {
    const infoData = infoForm.getFieldsValue();
    const avatar = avatarForm.getFieldValue('avatar')?.file;

    try {
      const avatarURL = avatar
        ? await addFile({ file: avatar, folder: 'users' })
        : userData?.avatar;

      const submitData = {
        ...infoData,
        avatar: avatarURL,
      };

      await updateData({ docName: 'users', id: user.uid, data: submitData });
      dispatch(updateProfile(submitData));
      notify({ mess: 'Update profile successful', type: 'success' });
    } catch (error) {
      notify({ mess: 'Update profile failed', type: 'error' });
    }
  };

  return (
    <Form.Provider onFormFinish={(_, { forms }) => onSubmit(forms)}>
      <Form name="avatarForm">
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
              <CustomForm
                id="infoForm"
                schema={schema}
                defaultValues={defaultValues}
              />
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
