import React from "react";
import PropTypes from "prop-types";
import { Form, Select, Input } from "antd";

const { Option } = Select;

const AddForm = props => {
  const { result, tableData } = props;
  const { getFieldDecorator } = props.form;
  const handleChange = value => {
    console.log(`selected ${value}`);
  };
  console.log("result", result);
  return (
    <Form>
      <Form.Item>
        <Select
          defaultValue=""
          style={{ width: "100%" }}
          onChange={handleChange}
        >
          <Option value="">一级分类</Option>
          {result &&
            result.map(item => (
              <Option key={item._id} value={item.name}>
                {item.name}
              </Option>
            ))}
        </Select>
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("cateName", {
          rules: [{ required: true, message: "分类名称必须输入!" }]
        })(<Input placeholder="请输入分类名称" />)}
      </Form.Item>
    </Form>
  );
};

AddForm.propTypes = {
  result: PropTypes.array.isRequired
};
export default Form.create()(AddForm);
