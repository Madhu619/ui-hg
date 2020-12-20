import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  sortWrapper : {
    width: '100%',
    background: '#ddd',
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
    height: '70vh',
    zIndex: 100
  },
  items: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  ul: {
    minWidth: '100%',
    textAlign: 'center',
    listStyle: 'none',
    background: 'white',
    margin: 0,
    padding:0
  },
  li: {
    padding: '5px 0',
    cursor: 'pointer'
  }

}));

const SortOptions = ({onClick , data, onApplySort}) => {
  const classes = useStyles();
  return (
    <div className={classes.sortWrapper}>
      <div className={classes.items}>
        <ul className={classes.ul}>
          {data.map((ele)=> {
           return ele.text !== 'Price' ? <li className={classes.li} onClick={()=> onClick(ele)}> {ele.text} </li> : '';
          })}
          {data.map((ele)=> {
           if (ele.text === 'Price')
            return ele.orders.map((price) =>  <li className={classes.li} onClick={() => onClick(price)}> {price.text} </li>);
          })}
          <li className={classes.li} onClick={onClick}>Close</li>
        </ul>
      </div>
    </div>
  );
}
export default  SortOptions;