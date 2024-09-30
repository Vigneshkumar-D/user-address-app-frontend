import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { retrive } from '../../services/api';

const UserList = () => {
  const [userData, setUserData] = useState([]); 
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Zip Code',
      dataIndex: 'zipcode',
      key: 'zipcode',
    },
  ];

  useEffect(() => {
    retrive().then((res) => {
      console.log('Fetched user data:', res); 
      setUserData(res); 
    }).catch((error) => {
      console.error('Error fetching user data:', error);
    });
  }, []);

  return (
    <Table
      style={{ padding: '20px' }}
      columns={columns}
      dataSource={userData} 
      pagination={{ pageSize: 5 }} 
      rowKey="userId" 
    />
  );
};

export default UserList;
