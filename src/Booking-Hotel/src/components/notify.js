import { message } from 'antd';

const key = 'updatable';

export default function notify({ mess, type, ...data }) {
  const duration = data.duration ? data.duration : 3;
  const loading = data.loading ? data.loading : 0;
  const align = data.align ? data.align : 'center';
  loading && message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message[type]({
      content: (
        <span>
          {mess}
          <span
            style={{ marginLeft: 20 }}
            onClick={() => {
              message.destroy();
            }}
          ></span>
        </span>
      ),
      duration: duration,
      style: {
        textAlign: align,
      },
      key,
    });
  }, loading * 1000);
}
