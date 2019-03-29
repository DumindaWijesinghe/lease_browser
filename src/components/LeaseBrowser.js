import React, { Component } from 'react';
import LeaseListContainer from '../containers/LeaseListContainer'
import LeaseDetailTableContainer from '../containers/LeaseDetailTableContainer'

class LeaseBrowser extends Component{
    render(){
        return(
            <div style={{display:'flex',flexDirection:'row', width:800, height:500, backgroundColor:"#fff", borderRadius: 30, boxShadow: '0px 0px 29px 0px rgba(0,0,0,0.1)',overflow:'hidden'}}>
                <LeaseListContainer/>
                <LeaseDetailTableContainer/>
            </div>       
        );
    }
}  

export default LeaseBrowser;