import React from 'react';
import PropTypes from 'prop-types';
import statisticalData from '../../statistical-data.json';
import './Statistics.css';

const Statistics = ({title}) => {
    return (
        <section className="statistics">
        {title
        ? <h2 className="title">{title}</h2>
        : ""
        }
            
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

  Statistics.propTypes = {
    title: PropTypes.string,
  };

  statisticalData.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  };
  
  export default Statistics;