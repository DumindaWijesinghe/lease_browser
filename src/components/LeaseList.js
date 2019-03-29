import React, { Component } from 'react';
import TenantItem from '../components/TenantItem'

class LeaseList extends Component{

    componentDidMount(){
        this.props.leaseActions.fetchLeases()
    }

    handleTenantItemClick = (id) => {
        this.props.leaseActions.fetchLeaseDetails(id)
    }

    isSelectedLease = (id) => (this.props.selectedLease && this.props.selectedLease.id === id);

    render(){
        return(
            <div style={leaseListStyle} >    
                { this.props.isFetching ? 
                <div style={fetchingStyle}>
                    <img src={require('../images/loading.gif')} style={{height:50, width:50}} alt='loading...'/>
                </div> : (
                this.props.didInvalidated ?
                <div style={invalidatedStyle}>
                    <p>Somthing went wrong :(</p>
                </div> :
                this.props.items.map( item =>(
                    <TenantItem 
                    item={item} 
                    key={item.id} 
                    onClick={() => this.handleTenantItemClick(item.id)} 
                    isActive={this.isSelectedLease(item.id)}/>
                )))}
            </div>
        );
    }
}

export default LeaseList;

const invalidatedStyle = {
    width:250, 
    height:500, 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center', 
    backgroundColor: '#FFF'
}

const fetchingStyle = {
    width:250, 
    height:500, 
    display:'flex', 
    alignItems:'center', 
    justifyContent:'center', 
    backgroundColor: '#FFF'
}

const leaseListStyle = {
    width:250, 
    height:500,
    backgroundColor:"#E2E6F2", 
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.08)'
}
