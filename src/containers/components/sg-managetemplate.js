import React, {Component} from 'react'
import SgTable from './sg-table'
import SgCustomTable from './custom/table'
import SgCustomInput from './custom/inputs/input'
import {Input, Col, Button, Icon, Pagination, Steps,} from 'antd'
import SgCustomButton from './custom/buttons/button'
import SgCustomPagination from './custom/pagination'
import SgCustomSteps from './custom/steps'
import SgCustomPopover from './custom/popover'
import SgCustomAlert from './custom/alert'
import SgCustomTag from './custom/tag'

const {TextArea, Search,Group} = Input;
const {SgCustomStep} = SgCustomSteps;
const {Step} = Steps;
const {SgCustomTextArea, SgCustomSearch} = SgCustomInput;


export default class SgManageTemp extends Component{

  onNewClick(){
    const path = '/news';
    this.props.history.push(path);
  }

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
      {tags.map(tag => <SgCustomTag color="blue" key={tag}>{tag}</SgCustomTag>)}
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



    return(
      <section className="pages__managetemp">
        <h1>템플릿 관리</h1>
        <SgCustomTag color="red">SMS</SgCustomTag>
        <SgCustomAlert message="customAlert(type=custom) test" type="custom" showIcon icon={<Icon type="forward" theme="outlined" />} closable/>
        <SgCustomAlert message="customAlert(type=error) test" type="error" showIcon closable/>
        <SgCustomPopover title="error" content="에러발생" trigger="click">
          <SgCustomInput placeholder="custompopover test"/>
        </SgCustomPopover>


        <SgCustomSteps direction="vertical" current={2}>
          <SgCustomStep title="Finished" description="템플릿생성"/>
          <SgCustomStep title="in Progress" description="문자메시지작성"/>
          <SgCustomStep title="waiting" description="수신자선택"/>
          <SgCustomStep title="waiting" description="문자발송"/>
        </SgCustomSteps>
        <SgCustomSteps current={1}>
          <SgCustomStep title="Finished" description="템플릿생성"/>
          <SgCustomStep title="in Progress" description="문자메시지작성"/>
          <SgCustomStep title="waiting" description="수신자선택"/>
          <SgCustomStep title="waiting" description="문자발송"/>
        </SgCustomSteps>
        <Steps current={1}>
          <Step title="Finished" description="템플릿생성"/>
          <Step title="in Progress" description="문자메시지작성"/>
          <Step title="waiting" description="수신자선택"/>
          <Step title="waiting" description="문자발송"/>
        </Steps>
        <Steps current={1}/>

        <Button type="primary" icon="search" >btn test</Button>
        <SgCustomButton>custom basic</SgCustomButton>
        <SgCustomButton type="custom" icon="search">custom style btn test</SgCustomButton>
        <SgCustomButton type="custom" shape="circle" icon="search"/>
        <SgCustomButton type="custom" loading="true"/>
        <SgCustomButton type="custom" block>변환자추가 <Icon type="plus-circle" theme="outlined" /></SgCustomButton>
        <SgCustomButton disabled>disabled</SgCustomButton>
        <Pagination defaultCurrent={1} total={50}/>
        <SgCustomPagination defaultCurrent={3} total={90}/>
        <Group size="default">
          <Col span={5}>
            <SgCustomInput defaultValue="custom input group" />
          </Col>
          <Col span={8}>
            <Input defaultValue="input group test" />
          </Col>
        </Group>
        <TextArea defaultValue="textarea test"/>
        <SgCustomTextArea value="customtextarea test"/>

             <SgCustomTable rowSelection={rowSelection} columns={columns} dataSource={data} pagination={pagination}/>

        <Input size="large" placeholder="input test"/>
        <SgCustomInput size="large" placeholder="custominput test"/>
        <Search placeholder="search test" enterButton/>
        <SgCustomSearch placeholder="customsearch test.. 기본컴퍼넌트의 조합이라 직접만들어야할듯" enterButton/>
        <button
          className="btn btn-secondary managetemp__new"
          onClick={this.onNewClick.bind(this)}
        > + 새 템플릿</button>
        <div className="managetemp__search">
          <div className="managetemp__searchtitle">템플릿 키:</div>
          <input></input>
        </div>
        <div className="managetemp__search">
          <div className="managetemp__searchtitle">템플릿 제목:</div>
          <input></input>
        </div>
        <div className="managetemp__btnwrap">
        <button className="btn btn-success managetemp__searchbtn">검색</button>
        <button className="btn btn-secondary managetemp__resetbtn">초기화</button>
        </div>
        {/*<SgTable/>*/}
        <nav aria-label="Page navigation">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="#">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </section>
    );
  }
}