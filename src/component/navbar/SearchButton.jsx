import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';



class SearchButton extends React.Component {
  constructor(props){
    super(props);
  }
  
  render () {
    const styles = {
      searchBtn: {
        cursor: 'pointer'
      }
    }
  return (
    <FontAwesomeIcon style={styles.searchBtn} icon={faSearch} size='lg' onClick ={this.props.onClick} /> 
  )
  }
}
export default SearchButton;