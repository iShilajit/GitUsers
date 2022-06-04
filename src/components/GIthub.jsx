import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import ReactPaginate from 'react-paginate';
import AddCard from './AddCard';
import styles from  './Github.module.css';

const gitUsers=(val='js')=>{
    return axios(`https://api.github.com/search/repositories?q=${val}&per_page=200`, {
        method:"GET",
        params:{
            val,
        }
    })
}
 const GIthub=()=> {
    
const [data,setData]=useState([]);
const[sdata,setSdata]=useState("js");
const [loading,setLoading] = useState(true);
const [text, setText] = useState("js");

useEffect(()=>{
    gitUsers(sdata).then((res)=>{
        setData(res.data.items);
    }).catch((error)=>{
       
        console.log(error);
    })
},[sdata])
console.log(data)


const handleClick=(sdata)=>{
    setSdata(sdata)
}
const [pageNo, setPageNo] = useState(0);
const _eachpage = 5;
const pageVisited = _eachpage * pageNo;
const showGitdata =data
  .slice(pageVisited, pageVisited + _eachpage)
  .map((item) => {
   return (
      <AddCard
      key={item.id}
      {...item}
    />
    );
  });
  const pageCount = Math.ceil(data.length / _eachpage);
  const ChangePage = ({ selected }) => {
    setPageNo(selected);
  };
  return (
    <div>
        <div>
        <input
   type="text"
   value={text}
      id="search"
      placeholder='Search gitusers'
      onChange={(e)=>setText(e.target.value)}
   />
   <button onClick={()=>handleClick(text)}>
       Search
   </button>

        </div>
 {showGitdata}
 <div >
          <ReactPaginate
            previousLabel={"<previous"}
            nextLabel={"Next>"}
            pageCount={pageCount}
            onPageChange={ChangePage}
            containerClassName={styles.paginationBtns}
            previousLinkClassName={styles.prevBtn}
         
          />
        </div>
    </div>
  )
}
export default GIthub