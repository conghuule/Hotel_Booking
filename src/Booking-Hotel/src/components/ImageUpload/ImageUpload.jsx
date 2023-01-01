import { Form, Upload } from 'antd';
import { useEffect, useState } from 'react';
import { AiOutlineUpload } from 'react-icons/ai';
import ScrollContainer from 'react-indiana-drag-scroll';
import './style.css';

const ImageUpload = ({
  name,
  multiple,
  initialValue,
  required,
  onRemove,
  size,
  ...props
}) => {
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    setFileList(initialValue || []);
  }, [initialValue]);

  const onChange = ({ file, fileList: newFileList }) => {
    if (multiple) {
      setFileList(newFileList);
    } else {
      newFileList.length === 0
        ? setFileList([])
        : setFileList([newFileList?.at(-1)]);
    }
  };

  return (
    <ScrollContainer>
      <Form.Item
        name={name}
        rules={
          required && [
            {
              required: true,
              message: 'This field is required',
            },
          ]
        }
      >
        <Upload
          className={size}
          multiple={multiple}
          beforeUpload={() => false}
          showUploadList={{ showPreviewIcon: false }}
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onRemove={onRemove}
        >
          <div className="upload-btn">
            <AiOutlineUpload size={24} />
          </div>
        </Upload>
      </Form.Item>
    </ScrollContainer>
  );
};

export default ImageUpload;
