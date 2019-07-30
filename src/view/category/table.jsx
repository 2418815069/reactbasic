import React from "react";
import PropTypes from "prop-types";
import { Table, Divider, Tag } from "antd";

const { Column } = Table;

const CategoryTable = props => {
  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown"
    },
    {
      key: "2",
      firstName: "Jim",
      lastName: "Green"
    },
    {
      key: "3",
      firstName: "Joe",
      lastName: "Black"
    }
  ];
  return (
    <Table dataSource={data}>
      <Column title="分类的名称" dataIndex="firstName" key="firstName" />
      <Column
        title="操作"
        key="action"
        render={(text, record) => (
          <span>
            <a href="javascript:;">修改分类</a>
            <Divider type="vertical" />
            <a href="javascript:;">查看子分类</a>
          </span>
        )}
      />
    </Table>
  );
};

CategoryTable.propTypes = {
  // formList: PropTypes.object.isRequired
};
export default CategoryTable;
