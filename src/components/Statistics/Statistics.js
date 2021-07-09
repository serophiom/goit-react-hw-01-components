import React from 'react';
import statisticalData from '../../statistical-data.json';

const Statistics = () => {
    return (
        <section className="statistics">
        <h2 className="title">Upload stats</h2>
      
        <ul className="stat-list">
        {statisticalData.map(({ label, percentage, id }) => (
                <li className="item" key={id}>
                <span className="label">{label}</span>
                <span className="percentage">{percentage}</span>
              </li>
            ))   
            }
        </ul>
      </section>
    );
  };
  
  export default Statistics;

  <ul> 
            {statisticalData.map((statistic) => (
                <li>
                    <Statistics 
                    label={statistic.label}
                    percentage={statistic.percentage}
                    />
                </li>
            ))   
            }
        </ul>