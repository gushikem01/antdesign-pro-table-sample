import React from 'react';
import { Empty } from 'antd';
import ProTable from '@ant-design/pro-table';
import type { ProColumns } from '@ant-design/pro-table';
import 'antd/dist/antd.css';

type TableItem = {
  item?: string;
  price?: string;
}

const columns: ProColumns<TableItem>[] = [
  {
    title: '商品名',
    key: 'item',
    dataIndex: 'item',
  },{
    title: '金額',
    key: 'price',
    dataIndex: 'price',
  }
]

const Index = ():JSX.Element => {
  return (
    <>
      <ProTable 
        columns={columns}
      />
    </>
  )
};
export default Index;