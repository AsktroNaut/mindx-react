
import './App.css';
import React, { Component } from 'react';
import MemberList from './components/MemberList'
import memberData from './data/memberData.json'

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        data : memberData
      }
  }

  handleDelete = () => {
    this.setState({ data: [] })
  }

  

  render() {
      return(
          <div>
              <h1>Danh sach thanh vien:</h1><br/>
              <button onClick={this.handleDelete}>Xoa tat ca</button>
              
              {
                this.state.data.length === 0 ? (
                  <h3>Danh sach trong</h3>
                ) : (
                  this.state.data.map(item => 
                    <MemberList
                      name={ item.name }
                      age= { item.age }
                      dateOfBirth = { item.dateOfBirth }
                      avatar = { item.avatar }
                      adress = { item.adress }
                    />
                    )
                )
              }
          </div>
      )
  }
}


export default App;
