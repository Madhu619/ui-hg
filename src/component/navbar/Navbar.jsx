import React from 'react';
import Menu from './Menu';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';
import Logo from '../staticComponent/images/image001.png';
import SearchButton from './SearchButton';
import Search from './Search';
import Basket from './Basket';
class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
      searchOpen:false,
    }
  }
  
  handleMenuClick() {
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  handleLinkClick() {
    this.setState({menuOpen: false});
  }
  
  handleSearchClick() {
    this.setState({searchOpen:!this.state.searchOpen});
  }
  render(){
    const styles= 
      {
        rowHeight: {
            height: '50px'
        },
        container:{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: '99',
          padding: '0 20px',
          display:'flex',
          alignItems:'center',
          background: this.state.menuOpen ? '#ffa253' : 'white',
          width: '100%',
          fontFamily:'Rubik-Regular',
          height: '50px',
        },
      }
    const menu = ['Home','Shop','Find our Stores','About H&G','Contact Us']
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          delay={`${index * 0.1}s`}
          onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
    });
    
    return(
      <div style={styles.rowHeight}>
        <div style={styles.container}>
            <div className='nav-left'>
            <MenuButton color={this.state.menuOpen ? 'white' : 'black'} open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} />
            {!this.state.menuOpen && (
                <div>
                    <img src={`${Logo}`}  alt="Health and Glow Logo" width='150px'/>
                </div>
            )}
            </div>
            {!this.state.menuOpen && (
                <div className='nav-right'>
                    <div><SearchButton onClick={()=>this.handleSearchClick()} /></div>
                    <div><Basket /></div>
                </div>
            )}
        </div>
        <Menu open={this.state.menuOpen}>
          {menuItems}
        </Menu>
            {this.state.searchOpen && <Search  onClick={()=>this.handleSearchClick()}/> }
      </div>
    )
  }
}

class Main extends React.Component {
  render(){
    return (
        <Navbar />
    )
  }
}

export default Main;