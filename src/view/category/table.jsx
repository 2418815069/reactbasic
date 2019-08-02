import React from "react";
import PropTypes from "prop-types";
import { Table, Divider, Button } from "antd";

const CategoryTable = props => {
  const { loading, tableData } = props;
  console.log(tableData);

  const columns = [
    {
      title: "分类的名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "操作",
      width: 300,
      key: "action",
      render: () => (
        <span>
          <Button
            style={{ border: "none" }}
            onClick={() => {
              console.log("button");
            }}
          >
            修改分类
          </Button>
          {/* <a href="javascript:;">修改分类</a> */}
          <Divider type="vertical" />
          <a href="javascript:;">查看子分类</a>
        </span>
      )
    }
  ];
  return <Table dataSource={tableData} loading={loading} columns={columns} />;
};

CategoryTable.propTypes = {
  loading: PropTypes.bool.isRequired
};
export default CategoryTable;
