import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "antd";
import CategoryTable from "./table";
import { reqCategoryList } from "../../api/index";
const Container = styled.div`
  border: 1px solid #e8e8e8;
  .mainhead {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    height: 64px;
    border-bottom: 1px solid #e8e8e8;
  }
  .mainhead h1 {
    font-size: 16px;
    margin-bottom: 0;
  }
  .tableBox {
    margin: 24px;
  }
  .ant-table-wrapper {
    border: 1px solid #e8e8e8;
    border-radius: 4px;
  }
`;
const Category = () => {
  return (
    <Container>
      <div className="mainhead">
        <h1>一级分类列表</h1>
        <Button type="primary">+ 添加</Button>
      </div>
      <div className="tableBox">
        <CategoryTable />
      </div>
    </Container>
  );
};

export default Category;
