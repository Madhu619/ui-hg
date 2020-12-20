import React, {useState} from 'react';
import SortOptions from './SortOptions';
import FilterOptions from './FilterOptions';


export default function FilterButtons ({data, onApplySort, onApplyFilter}) {
  const styles = {
    container : {
      display: 'flex',
      justifyContent: 'center',
      width: '70%',
      margin: '10px auto'
    },
    btnStyle: {
      flex: 1,
      margin: '5px',
      background: 'white',
      border: '1px solid #bbb'

    }
  }

  const [sort, setSort] = useState(false);
  const [filter, setFilter] = useState(false);

  function sortOptionClick(data) {
    setSort(!sort);
    if (data !== undefined) {
      let text = data.text.toLowerCase()
      if ((data.key === 'price' && text === 'High - Low')){
        onApplySort(data.key.toLowerCase()+':asc')
      } else if (text === 'popularity' ){
        onApplySort(text+':asc')
      } else {
        onApplySort(text+':desc')
      }
    }
  }
  function filterOptionClick (data, category) {
    if (data !== undefined) {
      onApplyFilter(data,category);
    }
    setFilter(!filter);
  }
  return (
    <div className='row'>
      <div className='container'>
        <div style={styles.container}>
          <button style= {styles.btnStyle} onClick={()=> sortOptionClick()}>Sort</button>
          <button style= {styles.btnStyle} onClick={()=> filterOptionClick()}>Filter</button>
        </div>
      </div>
      {sort && <SortOptions onApplySort={onApplySort} onClick={sortOptionClick} data={data.data.sorts}/>}
      {filter && <FilterOptions onApplyFilter={onApplyFilter} onClick={filterOptionClick} data={data.data.aggregations}/>}
    </div>
  )
}