import styled from 'styled-components';

import {CircleProgressBarBase1, CircleProgressBarBase2, CircleProgressBarBase3, CircleProgressBarBase4, CircleProgressBarBase5} from './CircleProgressBarBase';

export const CircleProgressBar1 = styled(CircleProgressBarBase1)`
  max-width: ${props => props.maxSize};
  vertical-align: middle;
  .chart-text {
    fill: #FF5E62;
    transform: translateY(0.25em);
  }
  .chart-number {
    font-size: 7px;
    line-height: 1;
    text-anchor: middle;
    transform: translateY(-0.25em);
  }
  .figure-key [class*='shape-'] {
    margin-right: 8px;
  }
  .figure-key-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .figure-key-list li {
    margin: 5px auto;
  }
  .shape-circle {
    display: inline-block;
    vertical-align: middle;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${props => props.strokeColor};
    text-transform: capitalize;
  }
`;

CircleProgressBar1.propTypes = {
    textColor: '#000',
    strokeColor: 'red',
    maxSize: '20px'
};

CircleProgressBar1.defaultProps = {
    textColor: 'black',
    strokeColor: '#FF5E62',
    maxSize: '250px'
};

export const CircleProgressBar2 = styled(CircleProgressBarBase2)`
  max-width: ${props => props.maxSize};
  vertical-align: middle;
  .chart-text {
    fill: #FF5E62;
    transform: translateY(0.25em);
  }
  .chart-number {
    font-size: 7px;
    line-height: 1;
    text-anchor: middle;
    transform: translateY(-0.25em);
  }
  .figure-key [class*='shape-'] {
    margin-right: 8px;
  }
  .figure-key-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .figure-key-list li {
    margin: 5px auto;
  }
  .shape-circle {
    display: inline-block;
    vertical-align: middle;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${props => props.strokeColor};
    text-transform: capitalize;
  }
`;

CircleProgressBar2.propTypes = {
    textColor: '#000',
    strokeColor: 'red',
    maxSize: '20px'
};

CircleProgressBar2.defaultProps = {
    textColor: 'black',
    strokeColor: '#FF5E62',
    maxSize: '250px'
};


export const CircleProgressBar3 = styled(CircleProgressBarBase3)`
  max-width: ${props => props.maxSize};
  vertical-align: middle;
  .chart-text {
    fill: #FF5E62;
    transform: translateY(0.25em);
  }
  .chart-number {
    font-size: 7px;
    line-height: 1;
    text-anchor: middle;
    transform: translateY(-0.25em);
  }
  .figure-key [class*='shape-'] {
    margin-right: 8px;
  }
  .figure-key-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .figure-key-list li {
    margin: 5px auto;
  }
  .shape-circle {
    display: inline-block;
    vertical-align: middle;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${props => props.strokeColor};
    text-transform: capitalize;
  }
`;

CircleProgressBar3.propTypes = {
    textColor: '#000',
    strokeColor: 'red',
    maxSize: '20px'
};

CircleProgressBar3.defaultProps = {
    textColor: 'black',
    strokeColor: '#FF5E62',
    maxSize: '250px'
};

export const CircleProgressBar4 = styled(CircleProgressBarBase4)`
  max-width: ${props => props.maxSize};
  vertical-align: middle;
  .chart-text {
    fill: #FF5E62;
    transform: translateY(0.25em);
  }
  .chart-number {
    font-size: 7px;
    line-height: 1;
    text-anchor: middle;
    transform: translateY(-0.25em);
  }
  .figure-key [class*='shape-'] {
    margin-right: 8px;
  }
  .figure-key-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .figure-key-list li {
    margin: 5px auto;
  }
  .shape-circle {
    display: inline-block;
    vertical-align: middle;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${props => props.strokeColor};
    text-transform: capitalize;
  }
`;

CircleProgressBar4.propTypes = {
    textColor: '#000',
    strokeColor: 'red',
    maxSize: '20px'
};

CircleProgressBar4.defaultProps = {
    textColor: 'black',
    strokeColor: '#FF5E62',
    maxSize: '250px'
};

export const CircleProgressBar5 = styled(CircleProgressBarBase5)`
  max-width: ${props => props.maxSize};
  vertical-align: middle;
  .chart-text {
    fill: #FF5E62;
    transform: translateY(0.25em);
  }
  .chart-number {
    font-size: 7px;
    line-height: 1;
    text-anchor: middle;
    transform: translateY(-0.25em);
  }
  .figure-key [class*='shape-'] {
    margin-right: 8px;
  }
  .figure-key-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .figure-key-list li {
    margin: 5px auto;
  }
  .shape-circle {
    display: inline-block;
    vertical-align: middle;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    background-color: ${props => props.strokeColor};
    text-transform: capitalize;
  }
`;

CircleProgressBar5.propTypes = {
    textColor: '#000',
    strokeColor: 'red',
    maxSize: '20px'
};

CircleProgressBar5.defaultProps = {
    textColor: 'black',
    strokeColor: '#FF5E62',
    maxSize: '250px'
};

