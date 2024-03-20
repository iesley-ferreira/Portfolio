import React from 'react';
import './styles/Circle.css';

interface CircleProps {
  className: string;
}

const Circle: React.FC<CircleProps> = ({ className }) => {
  return (
    <div>
      {className === 'preenchido' ? (
        <div className='preenchido'>
          <svg
            width='15'
            height='15'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ filter: 'drop-shadow(0 0 5px rgb(93, 58, 247))' }}
          >
            <circle cx='7' cy='7' r='6.5' fill='rgb(93, 58, 247)' />
          </svg>
        </div>
      ) : (
        <div className='vazio'>
          <svg
            width='14'
            height='13'
            viewBox='0 0 15 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            style={{ margin: 0, background: 'rgb(15, 23, 42)' }}
          >
            <circle cx='7' cy='7' r='6.5' stroke='rgb(148, 163, 184)' strokeWidth='1.4' />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Circle;
