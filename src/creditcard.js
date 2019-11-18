
import React, { Component } from 'react'
import chip from './chip.jpg'
import mastercard from './mastercard.jpg'


export default class creditcard extends Component {
    constructor(props){
    super(props)
    this.state = {
        name: 'xxxxx xxx',
        number: '**** **** **** ****',
        date: 'xx',}
}
               nameChange=e=>{
    this.setState({name: e.target.value.toUpperCase()
    });

  }
 
  numberChange=e=> {
    this.setState({
      number: e.target.value.slice(0,5).padEnd(16, '*').replace(/(.{4})/g, '$1 ')
    });
  }

  dateChange=e=> {
    
    this.setState({
     date: e.target.value.replace(/^(\d{2})/, '$1/')
    });
  }
 
    render() {
        return (
            <div>
      <div className='card'>
        <h1 className='card-title'> CREDIT CARD </h1>
        <img src={chip} width='80px' />
        <div className='card-infos'>
          <div className='code'
          // style={{width:'120px',flexDirection:'column'}}
          >
            <p className='card-number'>{this.state.number}</p>
            <div className='date'>
              <h6 className='code2'>5422</h6>
              <div className='data2'>
                <p className='code3'>Month/Year</p>
                <div className="validity">
                  <p className='code3'>Valid <br />Thru</p>
                  <p className='code2'> {this.state.date}</p>
                </div>
              </div>
            </div>
            <h6 className='client-name'>{this.state.name}</h6>
          </div>

          <img src={mastercard} id='mast'></img>
        </div>
      </div>
<input type="text" maxLength='16' placeholder="card number" onChange={this.numberChange} />
<input type="text" maxLength='4' placeholder="Valid thru" onChange={this.dateChange}/>
<input type="text" maxLength='20' placeholder="Card holder" onChange={this.nameChange} />
    </div>
            
        )
    }
}
