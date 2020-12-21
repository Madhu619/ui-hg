import React from 'react';
import {Form , InputGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
class Search extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    const styles={
      container: {
        position: 'fixed',
        marginTop: '70px',
        display: 'flex',
        height: '100vw',
        width: '100vw',
        justifyContent: 'center',
        background: '#eeeeee',
        left:0,
        zIndex:1
      },
      fullWidth: {
        flex: '0 0 100%',
        display: 'flex',
        height: '60px',
        background: '#fff',
        padding: '10px 20px',
        borderTop: '1px solid #ddd'
      },
      searchBox : {
        flex: 1
      },
      cancelButton: {
        width: '100px',
      paddingLeft: '20px',
      paddingTop: '5px',
      color: '#ff7601',
      cursor: 'pointer'
      }
    }
    return(
      <div style={styles.container}>
        <Form.Row style={styles.fullWidth}>
          <Form.Group style={styles.searchBox}>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                  type="text"
                  placeholder="Search here.."
              />
            </InputGroup>
          </Form.Group>
          <div style={styles.cancelButton} onClick={this.props.onClick}> Cancel</div>
        </Form.Row>
      </div>
    )
  }
}


export default Search;