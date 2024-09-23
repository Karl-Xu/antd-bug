import logo from './logo.svg';
import './App.css';
import "antd/dist/antd.css";
import { Form, Table } from "antd";

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};


function App() {
  const onValuesChange = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      {...formItemLayout}
      name="validate_other"
      onValuesChange={onValuesChange}
      initialValues={{
        table: [
          {
            name: "张三",
            age: 18,
            address: "adfasdfasd",
          },
          {
            name: "李四",
            age: 20,
            address: "自行车v自行车v",
          },
        ],
      }}
    >
      <Form.Item noStyle name="table" valuePropName="dataSource">
        <Table
          columns={[
            {
              title: "姓名",
              dataIndex: "name",
              filters: [
                {
                  text: "张三",
                  value: "张三",
                },
                {
                  text: "李四",
                  value: "李四",
                },
              ],
              onFilter: (value, record) => {
                return record.name
                  .toString()
                  .toLowerCase()
                  .includes(value.toLowerCase());
              },
            },
            {
              title: "年龄",
              dataIndex: "age",
            },
            {
              title: "地址",
              dataIndex: "address",
            },
          ]}
          pagination={false}
        />
      </Form.Item>
    </Form>
  );
}

export default App;
