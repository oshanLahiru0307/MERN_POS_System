import {Table} from 'antd'
import { useState, useEffect } from 'react'
import SupplierController from '../Services/SupplierController'

const Suppliers = () => {

  const [suppliers, setSuppliers] = useState([])

  const fetchSuppliers = async ()=> {
    try{
      const data = await SupplierController.getSuppliers()
      setSuppliers(data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect( ()=>{fetchSuppliers()}, [])

  const columns = [
    {
      title: 'Supplier Name',
      dataIndex: 'Supplier_name',
      key: 'Supplier_name',
    },
    {
      title: 'Supplier Node',
      dataIndex: 'Supplier_code',
      key: 'Supplier_code',
    },
    {
      title: 'Contact',
      dataIndex: 'Contact',
      key: 'Contact',
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      key: 'Address',
    },
    {
      title: 'Registered Date',
      dataIndex: 'RegisteredDate',
      key: 'RegisteredDate',
    }
  ];

  return (
    <div>
      <Table dataSource={suppliers} columns={columns} />
    </div>
  )
}

export default Suppliers
