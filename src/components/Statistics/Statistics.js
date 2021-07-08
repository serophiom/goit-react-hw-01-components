import React from 'react';

const Statistics = ({label, percentage}) => {
    return (
        <section class="statistics">
        <h2 className="title">Upload stats</h2>
      
        <ul className="stat-list">
          <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        </ul>
      </section>
    );
  };
  
  export default Statistics;