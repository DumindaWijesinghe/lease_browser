import React, { Component } from 'react';
import LeaseBrowser from '../components/LeaseBrowser';


class LeaseBrowserView extends Component{
    render(){
        return(
            <div className="app-container" style={{display:'flex', alignItems:'center',justifyContent:'center',width:'100vw', height:'100vh'}}>
                <LeaseBrowser/>
            </div>
      );

    }
}

export default LeaseBrowserView;