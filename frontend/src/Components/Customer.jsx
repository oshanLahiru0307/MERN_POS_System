import React from 'react'
import {Table, Button, Modal, Input, InputNumber, Popconfirm, Form} from 'antd'
import {useState, useEffect} from 'react'
import customerController from '../Services/CustomerController'

const Customer = () => {

const [form] = Form.useForm()

const [customer, setCustomer] = useState([])
const [selectedItem, setSelectedItem] = useState()
const [isModalVisible, setIsModalVisible] = useState(false)


const fetchCustomer = async ()=> {
    try{
      const data = await customerController.getAllCustomer()
      console.log(data)
      setCustomer(data)
    }catch(error){
      console.log('error getting data',error)
    }
}

useEffect( ()=> {
  fetchCustomer()
}, [])


const addCustomer = async (values)=> {
  try{

    if(!selectedItem){
      const data  = await customerController.addNewCustomer(values)
      console.log('added new customer successfuly', data)
      fetchCustomer()
      handleCancel()
    }else{
      const data = await customerController.editCustomer(selectedItem._id, values)
      console.log('edit customer data succesfully', data)
      fetchCustomer()
      handleCancel()
    }

  }catch(error){
    console.log('error in addCustomer', error)
  }
}

const handleCancel = ()=>{
  setIsModalVisible(false)
  form.resetFields()
}

const handleDelete = async (recordId)=> {
    try{
      const data = await customerController.deleteCustomer(recordId)
      fetchCustomer()
      console.log('customer deelted succesfuly', data)
    }catch(error){
      console.log('erro deleting data', error)
    }
}

const handleEdit = (record)=> {
  setSelectedItem(record)
  form.setFieldsValue(record)
  setIsModalVisible(true)
}


const columns = [
  {
    title: 'First Name',
    dataIndex: 'First_name',
    key: 'First_name',
  },
  {
    title: 'Last Name',
    dataIndex: 'Last_name',
    key: 'Last_name',
  },
  {
    title: 'NIC',
    dataIndex: 'NIC',
    key: 'NIC',
  },
  {
    title: 'Phone',
    dataIndex: 'Phone',
    key: 'Phone',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
  },
  {
    title: 'Address',
    dataIndex: 'Address',
    key: 'Address',
  },
  {
    title: 'Loyalty Points',
    dataIndex: 'LoyaltyPoints',
    key: 'LoyaltyPoints',
  },
  {
    title: 'Action',
    key: 'Action',
    render: (_, record)=>(
      <span>
        <Button
        type='primary'
        style ={{marginRight: '5px'}}
        onClick={ ()=> {
          handleEdit(record)
        }}>
          Edit
        </Button>
          <Popconfirm
            title="Delete the Customer"
            description="Are you sure to delete this Customer?"
            onConfirm={()=> handleDelete(record._id)}
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

      <Button
      type='primary'
      onClick={ ()=> {
        setIsModalVisible(true)
      }}
      style={{
        marginBottom: "10px"
      }}>
        New Customer
      </Button>

      <Table dataSource={customer} columns={columns} rowKey="_id" pagination={{ pageSize: 6 }}  />

      <Modal
        title = 'Add New Customer'
        open = {isModalVisible}
        onCancel={
        handleCancel
      }
      footer={null}>

        <Form
          form={form}
          layout="vertical"
          onFinish={addCustomer}
          initialValues={{
            LoyaltyPoints: 0,
          }}
        >
          <Form.Item
            label="First Name"
            name="First_name"
            rules={[{ required: true, message: "Please input first name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="Last_name"
            rules={[{ required: true, message: "Please input last name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="NIC"
            name="NIC"
            rules={[{ required: true, message: "Please input NIC!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="Phone"
            rules={[
              { required: true, message: "Please input phone number!" },
              {
                pattern: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="Email"
            rules={[
              { required: true, message: "Please input email!" },
              { type: "email", message: "Invalid email format!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Address"
            name="Address"
            rules={[{ required: true, message: "Please input address!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Loyalty Points" name="LoyaltyPoints">
            <InputNumber min={0} style={{ width: "100%" }} />
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
  )
}

export default Customer
