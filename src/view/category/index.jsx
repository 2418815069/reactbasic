import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button, Modal } from "antd";
import CategoryTable from "./table";
import AddForm from "./add-form";
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
  /* .ant-select .ant-select-enabled {
    width: 100%;
  } */
`;
const Category = (props) => {
  const [loading, setLoading] = useState(false);
  const [addVisible, setAddVisible] = useState(false);
  const [parentId, setParentId] = useState(0);
  const [result, setResult] = useState(0);
  const getCategorys = async () => {
    setLoading(true);
    let reqListData = await reqCategoryList(parentId);
    setResult(reqListData.data);
    setLoading(false);
    console.log("console.log()", result);
  };
  const showModal = () => {
    setAddVisible(true);
  };
  const addFormOk = e => {
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
    setAddVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setAddVisible(false);
  };
  useEffect(() => {
    showModal();
    getCategorys();
  }, []);
  
  return (
    <Container>
      <div className="mainhead">
        <h1>一级分类列表</h1>
        <Button type="primary" onClick={showModal}>
          + 添加
        </Button>
      </div>
      <Modal
        title="添加分类"
        onOk={addFormOk}
        onCancel={handleCancel}
        visible={addVisible}
      >
        <AddForm result={result} setForm={(form) => {form = form}}/>
      </Modal>
      <div className="tableBox">
        <CategoryTable loading={loading} tableData={result} />
      </div>
    </Container>
  );
};


export default Category;
