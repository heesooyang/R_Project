import { HashRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom';
import { Table, Alert, Tag, Divider, Button } from 'antd';
import React, { Component } from 'react'
import SgCustomInput from './input/input'


class SgCustomTable extends Component {

  render() {
    const columns = [{
      title: '제목',
      dataIndex: 'title',
      key: 'title',
      render: text => <SgCustomInput defaultValue={text}/>,
    }, {
      title: 'Keyword',
      dataIndex: 'keyword',
      key: 'keyword',
    }, {
      title: '최대 Byte',
      dataIndex: 'maxByte',
      key: 'maxByte',
    }, {
      title: '초기값',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
      ),
    }, {
      title: '제거',
      key: 'action',
      render: (text, record) => (
        <Button type="danger">X</Button>
      ),
    }];

    const data = [{
      key: '1',
      title: 'John Brown',
      keyword: 32,
      maxByte: '4',
      tags: ['nice', 'developer'],
    }, {
      key: '2',
      title: 'Jim Green',
      keyword: 42,
      maxByte: '4',
      tags: ['loser'],
    }, {
      key: '3',
      title: 'Joe Black',
      keyword: 32,
      maxByte: '4',
      tags: ['cool', 'teacher'],
    }];

    const rowSelection= {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.title === 'Disabled User', // Column configuration not to be checked
        name: record.title,
      }),
    };
    const pagination = {
      pageSize:2
    }

    return (
      <div className="customtable__wrap">
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination}/>
      </div>
    )
  }
}



export default SgCustomTable


