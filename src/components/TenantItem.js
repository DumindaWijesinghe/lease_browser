import React, { Component } from 'react';

import '../styles/tenantItemStyle.css'

class TenantItem extends Component{
    
    render(){
        return(
            <div onClick={this.props.onClick} style={{...tenantItemStyle, backgroundColor:this.props.isActive? '#9fa8da':''}} className="tenant-item" >
                <div style={{width:40, height:40, borderRadius:25}} className='avatar'></div>
                <h3 style={{marginLeft:10, color:'#444', fontWeight:500}}>{this.props.item.tenant}</h3>
            </div>
        );
    }
}

export default TenantItem;

const tenantItemStyle = {
    width:250, 
    height:80,
    paddingLeft:20, 
    display:'flex', 
    alignItems:'center',
    boxSizing:'border-box', 
}