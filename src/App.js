import React, {Component} from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 3;

  state = {
    information: [
      {
        name: '홍길동',
        phone: '1234',
        id: 0
      },
      {
        name: 'rlfflf길동',
        phone: '11111',
        id: 1
      },
      {
        name: 'John',
        phone: '222222',
        id: 2
      }
    ],
    keyword: ''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value
    })
  }

  handleCraete = (data) => {
    const {information} = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      }) //항상 setState로 데이터를 관리해야하며, 배열은 concat을 이용해 추가해줌(push 안됨)
    })
 
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => {
        return info.id !== id
      })
    })
  }

  handleUpdate = (id, data) => {
    const {information} = this.state;
    this.setState({
      information: information.map(info => {
        if(info.id === id) {
          return {
            id, 
            ...data,
          }
        }
        return info;
      })
    })
  }


  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCraete} />
        <input
          value={this.keyword}
          onChange={this.handleChange}
          placeholder="검색"
        />
        <PhoneInfoList 
          data={this.state.information.filter(
            info => info.name.indexOf(this.state.keyword) > -1
          )}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
