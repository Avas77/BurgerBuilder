import React, {Component} from 'react';
import Aux from '../../hoc/Auxillary';
import './Layout.css';
import Toolbar from '../Nav/Toolbar/Toolbar';
import SideBar from '../Nav/Sidebar/SideBar';

class Layout extends Component{
    state = {
        showBar: false
    }

    sideBarClosed = () =>{
        this.setState({
            showBar: false
        })
    }

    toggleHandler = () => {
        this.setState((prevState) => {
            return {showBar: !prevState.showBar};
        })
    }

    render(){
        return(
            <Aux>
                <Toolbar open = {this.toggleHandler} />
                <SideBar show = {this.state.showBar} 
                closed = {this.sideBarClosed} />
                <main className = "content">
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;