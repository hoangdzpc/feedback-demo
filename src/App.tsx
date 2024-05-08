import {
  Button,
  Col,
  Divider,
  Flex,
  Form,
  Input,
  Rate,
  Row,
  Typography,
} from 'antd';
import { FC, useState } from 'react';

interface Comment {
  id: number;
  content: string;
}

const QUICK_COMMENT: Comment[] = [
  {
    id: 1,
    content: 'Kê khai biểu mẫu hồ sơ tiện lợi',
  },
  {
    id: 2,
    content: 'Thủ tục rút gọn, dễ hiểu',
  },
  {
    id: 3,
    content: 'Dịch vụ nhanh, gọn và chuyên nghiệp',
  },
];

interface CommentForm {
  comment: string;
}

const App: FC = () => {
  const [rate, setRate] = useState(3);
  const [rateText, setRateText] = useState(3);
  const [form] = Form.useForm<CommentForm>();

  const handleRateHoverChange = (value: number) => {
    if (value) setRateText(value);
    else setRateText(rate);
  };

  const handleRateChange = (value: number) => {
    setRateText(value);
    setRate(value);
  };

  const handleQuickComment = (comment: string) => {
    form.setFieldsValue({ comment });
  };

  const handleSend = () => {
    const values = form.getFieldsValue();
    alert(
      JSON.stringify({
        rating: rate,
        comment: values.comment,
        params: {},
      })
    );
  };

  return (
    <Flex justify="center">
      <Flex vertical>
        <Typography.Title level={1} className="text-center">
          Đánh giá dịch vụ công
        </Typography.Title>

        <Flex justify="center" align="center" gap={16}>
          <Rate
            allowClear={false}
            value={rate}
            onHoverChange={handleRateHoverChange}
            onChange={handleRateChange}
          />
          <Typography.Text>{rateText}</Typography.Text>
        </Flex>

        <Form form={form} layout="vertical" className="mt-4">
          <Form.Item<CommentForm> label="Nhận xét" name="comment">
            <Input.TextArea placeholder="Nội dung nhận xét ..." rows={4} />
          </Form.Item>
        </Form>

        <Row gutter={[16, 16]}>
          {QUICK_COMMENT.map((comment) => (
            <Col key={comment.id} span={12}>
              <Button
                block
                size="large"
                className="fw-bold"
                onClick={() => handleQuickComment(comment.content)}
              >
                {comment.content}
              </Button>
            </Col>
          ))}
        </Row>

        <Divider />

        <Flex justify="space-between">
          <Button size="large" className="fw-bold">
            Hủy
          </Button>
          <Button
            size="large"
            className="fw-bold"
            type="primary"
            onClick={handleSend}
          >
            Gửi
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default App;
