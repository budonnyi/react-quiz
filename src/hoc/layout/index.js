import React, {Component} from 'react'
import classes from './layout.css'
import MenuToggle from '../../components/Ui/Navigation/MenuToggle'
import Drawer from '../../components/Ui/Navigation/Drawer/Drawer'

class Layout extends Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div className={classes.Layout}>

                <Drawer
                    isOpen = {this.state.menu }
                />

                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                />

                <main>
                    { this.props.children }
                </main>

            </div>
        )
    }
}

export default Layout