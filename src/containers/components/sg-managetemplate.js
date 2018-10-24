import React, {Component} from 'react'
import SgTable from './sg-table'
import SgCustomTable from './custom/table'
import SgCustomInput from './custom/input/input'
import {Input, Col, Button, Icon, Pagination} from 'antd'
import SgCustomButton from './custom/button/button'
import SgCustomPagination from './custom/pagination'


const {TextArea, Search,Group} = Input;
const {SgCustomTextArea, SgCustomSearch} = SgCustomInput;


export default class SgManageTemp extends Component{

  onNewClick(){
    const path = '/news';
    this.props.history.push(path);
  }

  render() {
    return(
      <section className="pages__managetemp">
        <h1>템플릿 관리</h1>
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
        <TextArea value="textarea test"/>
        <SgCustomTextArea value="customtextarea test"/>

        <SgCustomTable/>
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