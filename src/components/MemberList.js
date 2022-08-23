import React, { Component } from 'react';

class MemberList extends Component {
    

    render() {
        return (
            
                <ul style={{ border:"3px solid black" }}>
                    <li>Tên: {this.props.name}</li>
                    <li>Tuổi: {this.props.age}</li>
                    <li>Năm sinh: {this.props.dateOfBirth}</li>
                    <li>Avatar: <img src={this.props.avatar} alt="Avatar" width="150" height="150"/></li>
                    <li>Địa chỉ: {this.props.adress}</li>
                </ul>
                )
            }
        
        
        
    
}

export default MemberList