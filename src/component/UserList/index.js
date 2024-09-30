import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { retrive } from '../../services/api';
import { Link } from 'react-router-dom';
import './index.css'

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
    <div style={{display:'flex', flexDirection:'column'}}>
      <Link to="/register" style={{alignSelf:'flex-end', marginTop:'10px', marginRight:'10px'}} >
        <button className='reg-button'>Register</button>
      </Link>
      <Table
        style={{ padding: '20px', width: '100%' }}
        columns={columns}
        dataSource={userData}
        pagination={{ pageSize: 10 }}
        rowKey="userId"
      />

    </div>
  );
};

export default UserList;
