import * as React from 'react';
import $ from 'jquery'; 
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from './component/staticComponent/Loader';
import NoData from './component/staticComponent/NoData.png';
import Navbar from './component/navbar/Navbar';
import FilterButtons from './component/staticComponent/FilterButtons';
import LoadCards from './component/staticComponent/LoadCards';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         data: [],
         isLoaded : false,
         url: 'https://staging.healthandglow.com/api/catalog/product/v6/search/999?app=web&version=3.0.2&tag=loreal-paris&page=0:20',
      }
   };
  
  onDataReceived = (data) => {
    this.setState({
      data: data,
      isLoaded: true,
    });
  }

  onApplySort = (sortOption) => {
    let previousLaunchValue = new URL(this.state.url);
    if (previousLaunchValue.searchParams.get('sort') !== null) {
      previousLaunchValue.searchParams.set('sort', sortOption);
      previousLaunchValue = previousLaunchValue.href;
    } else {
      previousLaunchValue = this.state.url + '&sort='+sortOption;
    }
    this.setState({ isLoaded: false, url: previousLaunchValue});

    $.get(previousLaunchValue, function(result) {
      this.onDataReceived(result);
    }.bind(this));
  }

  onApplyFilter = (filterOptions, category) => {
    debugger
    let previousLaunchValue = new URL(this.state.url);
      previousLaunchValue.searchParams.set('filters-'+category.toLowerCase(), filterOptions.text.toLowerCase());
      this.setState({ isLoaded: false, url: previousLaunchValue});

    $.get(previousLaunchValue , function(result) {
      this.onDataReceived(result);
    }.bind(this));
  }


  componentDidMount() {
    $.get(this.state.url, function(result) {
      this.onDataReceived(result);
    }.bind(this));
  }

  render() {
    if(this.state.isLoaded) {
      return (
        <>
          <Container >
            <Row height='50px'>
              <Navbar />
            </Row>
            <Row>
              <div className='product-info'>
                Loreal-Paris - <span className='product-count'>  {this.state.data.data.totalCount} Products</span>
              </div>
            </Row>
            <Row>
              <FilterButtons data={this.state.data} onApplySort={this.onApplySort} onApplyFilter= {this.onApplyFilter} />
            </Row>
            <Row>
              <LoadCards data={this.state.data.data.products}/>
            </Row>
          </Container>
        </>
      )
    } else {
      return ( 
        <Loader />
      )
    }
  }
}

export default App;
