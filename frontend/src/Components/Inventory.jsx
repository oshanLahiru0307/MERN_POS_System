import React, { useEffect, useState } from 'react';
import { Table, Button, Modal, Form, Input, InputNumber, Select, Popconfirm } from 'antd';
import InventoryController from '../Services/InventoryController';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const [selectedItem, setSelectedItem] = useState()
  const [form] = Form.useForm(); // Ant Design form instance

  const fetchInventory = async () => {
    try {
      const data = await InventoryController.getInventory();
      console.log(data); // Verify the structure
      setInventory(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  // Show modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Hide modal
  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields(); // Reset form fields when closing
  };

  // Handle form submission
  const handleFormSubmit = async (values) => {

    try{

      if(!selectedItem){
        console.log('Form Values:', values);
        await InventoryController.addInventoryItem(values);
        fetchInventory(); // Refresh inventory table
        handleCancel(); // Close the modal after submission

    }else{
        console.log('Selected Item ID:', selectedItem?._id);
        const data = await InventoryController.editItem(selectedItem._id, values)
        console.log('succesfully update item data', data)
        fetchInventory(); // Refresh inventory table
        handleCancel();
      }
    }catch(error){
        console.log('error updating data',error)
        throw error
      }

  };

  const handleEdit =  (value)=> {
    setSelectedItem(value)
    form.setFieldsValue(value)
    setIsModalVisible(true)
  }

  const handleConfirm = async(itemId)=> {
    try{
      const item = await InventoryController.deleteItem(itemId)
      console.log('successfuly deleted:',item)
      fetchInventory()
    }catch(error){
      console.log('error deleting data',error)
      throw error
    }
  }


  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'Product_name',
      key: 'Product_name',
    },
    {
      title: 'Product Code',
      dataIndex: 'Product_Code',
      key: 'Product_Code',
    },
    {
      title: 'Category',
      dataIndex: 'Category',
      key: 'Category',
    },
    {
      title: 'Quantity',
      dataIndex: 'Quantity',
      key: 'Quantity',
    },
    {
      title: 'Unit Price',
      dataIndex: 'UnitPrice',
      key: 'UnitPrice',
    },
    {
      title: 'Supplier',
      dataIndex: 'Supplier',
      key: 'Supplier',
    },
    {
      title: 'Reorder Level',
      dataIndex: 'ReorderLevel',
      key: 'ReorderLevel',
    },
    {
      title: 'Last Restocked',
      dataIndex: 'LastRestocked',
      key: 'LastRestocked',
    },
    {
      title: 'Action',
      key: 'Action',
      render: (_, record) => (
        <span
        >
          <Button
          type='primary'
          onClick={ ()=> 
            handleEdit(record)
          }
          style={{
            marginRight: '5px'
          }}>
            Edit
          </Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={()=> handleConfirm(record._id)}
            okText="Yes"
            cancelText="No"
          >
          <Button type='primary' danger>Delete</Button>
          </Popconfirm>

        </span>
      )
    }
  ];

  return (
    <div>
      <Button type="primary" style={{ marginBottom: '10px' }} onClick={showModal}>
        Add Item
      </Button>

      {/* Ant Design Table */}
      <Table dataSource={inventory} columns={columns} rowKey="_id" />

      {/* Modal with Form */}
      <Modal
        title="Add New Item"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null} // Custom footer with form buttons
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleFormSubmit} // Handle form submission
        >
          <Form.Item
            name="Product_name"
            label="Product Name"
            rules={[{ required: true, message: 'Please enter the product name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Product_Code"
            label="Product Code"
            rules={[
              { required: true, message: 'Please enter the product code!' },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="Category"
            label="Category"
            rules={[
              { required: true, message: 'Please select a category!' },
            ]}
          >
            <Select placeholder="Select a category">
              <Select.Option value="Health Care">Health Care</Select.Option>
              <Select.Option value="Beauty & Cosmatics">Beauty & Cosmatics</Select.Option>
              <Select.Option value="Foods & Beverage">Foods & Beverage</Select.Option>
              <Select.Option value="Stationary">Stationary</Select.Option>
              <Select.Option value="Groceries">Groceries</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="Quantity"
            label="Quantity"
            rules={[{ required: true, message: 'Please enter the quantity!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="UnitPrice"
            label="Unit Price"
            rules={[{ required: true, message: 'Please enter the unit price!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item
            name="Supplier"
            label="Supplier"
            rules={[{ required: true, message: 'Please enter the supplier!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="ReorderLevel"
            label="Reorder Level"
            initialValue={10} // Default value as per schema
            rules={[{ required: true, message: 'Please enter the reorder level!' }]}
          >
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
              Submit
            </Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Inventory;
