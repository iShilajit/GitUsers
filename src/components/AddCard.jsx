import React from 'react'
import styles from  './Github.module.css';
export default function AddCard(props) {
  return (
    <div>
      <div className={styles.card}>
      <img className={styles.gitimg} src={props.owner.avatar_url} alt="" />  
      <div>
      <h2>{props.name}</h2>  
       <h4>{props.language}</h4> 
        </div> 
       
      </div>
     

    </div>
  )
}
