import React from 'react';
import PropTypes from 'prop-types';
import statisticalData from '../../statistical-data.json';
import './Statistics.css';

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

  statisticalData.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  };
  
  export default Statistics;