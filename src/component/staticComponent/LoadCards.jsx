import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
//import { Pagination } from 'react-bootstrap';

export default class LoadCards extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
     return(
        <Pagination data={this.props.data}/>
      )
  }
}
class Cards extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <>
      <a  className='card-block' key={this.props.card.skuId} href={this.props.card.deepLinkUrl} data-category-name={this.props.card.categoryName}>
        <div className='card-inner'>
          <div className='percent'>{this.props.card.skuDiscPercentage > 0 ? this.props.card.skuDiscPercentage+' `1q% OFF' : 'Special Offer'}</div>
          <div className={this.props.card.inWishList ? 'wish-list heart' : 'wish-list fill'}> <FontAwesomeIcon icon={faHeart} /></div>
          <img className='card-image' src={this.props.card.skuImageUrl} alt={this.props.card.skuName} />
          <div className='card-name'> {this.props.card.skuName} </div>
          <div className='cards-footer'>
            <div className='price-block'>
              <div className='list-price'>&#x20B9;{this.props.card.listPrice}</div>
    {this.props.card.skuDiscPercentage > 0 &&  <div className='default-price'>&#x20B9;{this.props.card.defaultPrice}</div> }
            </div>
            {this.props.card.skuAverageRating !== 0 && <div className='rating'> <FontAwesomeIcon icon={faStar} /> {this.props.card.skuAverageRating}</div> }
          </div>
        </div>
      </a>
      {this.props.lineFlag && <span className='line' /> }
      </>
    )
  }
}

//Pagination Starts


class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: this.props.data,
      currentPage: 1,
      todosPerPage: 10
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  render() {
    const { todos, currentPage, todosPerPage } = this.state;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((ele, i) => 
      <Cards  card={ele} lineFlag={i % 2 === 0 ? true : false}/>
    );

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <>
        {renderTodos}
        <div className='row pagination' id="page-numbers">
          {renderPageNumbers}
        </div>
      </>
    );
  }
}
//Pagination Ends
