import React, {Component} from 'react';
import './App.css';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';

class App extends Component {
  id = 0;

  state = {
    information: []
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
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          onUpdate={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
