import React from 'react'
import {connect} from 'react-redux'
import FrontEndApplication from './FrontEndApplications'
import FullStackApplications from './FullStackApplications'
import MeanApplications from './MeanApplications'
import NodeApplications from './NodeApplications'

class ApplicationList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            frontEnd : false,
            fullStack : false,
            meanStack : false,
            nodeJs : false

        }
    }

    handleFrontEnd = () => {
        this.setState({
            frontEnd : true,
            fullStack : false,
            meanStack : false,
            nodeJs : false
        })
    }
    handleFullStack = () =>{
        this.setState({
            frontEnd : false,
            fullStack : true,
            meanStack : false,
            nodeJs : false
        })
    }
    handleMEANstack = () => {
        this.setState({
            frontEnd : false,
            fullStack : false,
            meanStack : true,
            nodeJs : false
        })
    }
    handleNodeJs = () => {
        this.setState({
            frontEnd : false,
            fullStack : false,
            meanStack : false,
            nodeJs : true
        })
    }

    render(){
        return(
            <div>
                <ul>
                    <li><button onClick={this.handleFrontEnd}>FrontEnd</button></li>
                    <li><button onClick={this.handleFullStack}>Full Stack</button></li>
                    <li><button onClick={this.handleMEANstack}>MEAN Stack</button></li>
                    <li><button onClick={this.handleNodeJs}>Node Js</button></li>
                </ul>
                {<div>{!this.state.frontEnd&&!this.state.fullStack&&!this.state.meanStack&&!this.state.nodeJs}<p>Hey here is the list
                    of people applying for different positions click on the button of your choice and get the whole list of candidates</p></div>}
              {this.state.frontEnd && <FrontEndApplication/>} 
              {this.state.fullStack && <FullStackApplications/>}
              {this.state.meanStack && <MeanApplications/>}
              {this.state.nodeJs && <NodeApplications/>}
              </div>
        )
    }
}


export default connect()(ApplicationList)