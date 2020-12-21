import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({

  filterOptions: {
    width: '100%',
    background: 'white',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom:0,
    width: '100vw',
    zIndex: 1500,
    overflow: 'scroll'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    height: '60px',
    borderBottom: '1px solid #dddddd',
    boxShadow: '0 0 5px 0',
  },
  clearAll: {
    fontSize: '0.8rem',
    color: '#ffa253',
    cursor:'pointer'
  },
  filterSection: {
    display: 'flex'
  },
  leftSideFilter: {
    flex: '1'
  },
  rightSideFilter: {
    flex: '1 1 200px',
    borderLeft: '1px solid #dedede'
  },
  filterList: {
    display: 'flex',
    flexFlow: 'column',
    listStyle: 'none',
    alignItems: 'flex-start',
    margin: 0,
    padding: '20px',
    fontWeight: 600
  },
  filters: {
    margin: '5px',
    width: '100%',
    cursor: 'pointer'
  },
  shaded :{

  },
  Black: {
    background: '#000000'
  },
  Brown: {
    background: "#8e3c36"
  },
  Pink: {
    background: "#ff37bc"
  },
  Maroon: {
    background: "#7a0303"
  },
  Red: {
    background: "#ef0000"
  },
  Burgundy: {
    background: "#5b0c0c"
  },
  Medium: {
    background: "#f7d494"
  },
  Black: {
    background: '#000000'
  },
  Purple: {
    background: "#963d81"
  },
  Nude: {
    background: '#d6716b'
  },
  spanElement: {
    width: '22px',
    height: '16px',
    marginRight: '6px',
    display: 'inline-block',
  },
  applyBtn: {
    width: '100%',
    background: '#ffa253',
    padding: '10px',
    border: 'navajowhite',
    color: 'white'
  }
}));



const FilterOptions = ({ onClick , data, onApplyFilter}) => {
  const [bucket, setBucket] = useState(data[0]);
  const classes = useStyles();
  let filterList = [];
  const [filters, setFilters] = useState('');
  let filter = [];
  
  const getRightMenu = (data) => {
    setBucket(data);
  }


  return (
    <div className={classes.filterOptions}>
      <div className={classes.header}>
        <div>
          <FontAwesomeIcon icon={faTimes} size='lg' onClick={()=> onClick()} />
        </div>
        <div> <strong>Filter By</strong></div>
        <div className={classes.clearAll} onClick={() => onClick('','',false)}>Clear All</div>
      </div>
      <div className={classes.filterSection}>
        <div className={classes.leftSideFilter}>
          <ul class={classes.filterList}>
            {data.map((ele) =>  <li onClick={()=> getRightMenu(ele)} className={classes.filters} > {ele.text} <span> </span></li>)}
          </ul>
        </div>
        <div className={classes.rightSideFilter}>
          <ul className={classes.filterList}>
            {bucket.buckets.map((ele) =>  <li onClick={()=> onClick(ele, bucket.text, '')} className={classes.filters} > {ele.colorCode && <span className={classes[ele.text] +' '+  classes.spanElement}> </span>} {ele.text} { ele.showDocCount && `(`+ele.docCount +`)`} </li>)}
          </ul>
        </div>
      </div>
      <button className={classes.applyBtn} value='Apply' onClick={() => onClick('','',true)}>Apply</button>
    </div>
  );
}
export default FilterOptions;