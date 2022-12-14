import React, { useState,useEffect } from 'react'
import classes from './Calculation.module.css'
function Calculation() {
    const [backendData,setBackendData] = useState([{}]);
    useEffect(() => {
          fetch("/api").then(
            respone => respone.json()
          ).then(
            data => {
              setBackendData(data);
            })
    }, []);
  return (
    <div className={classes.results}>
    <div class="ui inverted segment">
    <div class="ui inverted relaxed divided list">
      <div class="item">
        <div class="content">
          <div class="header">User : </div>
          {backendData.user}
        </div>
      </div>
      <div class="item">
        <div class="content">
          <div class="header">System : </div>
          {backendData.system}
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Calculation