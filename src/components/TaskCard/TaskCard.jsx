import React from 'react';
import './TaskCard.scss';

function TaskCard({ text, notes, left = true, right = false, leftShape = 'circle', leftColor = 'info', rightColor = 'light' }) {
  return (
    <div className="d-flex bg-white position-relative taskCard">
      {left && (
        <div className={`d-flex justify-content-center align-items-center flex-shrink-0 bg-${leftColor} sideBlock`}>
          <i className={`fa-lock fas p-2 small ${leftColor === 'info' ? 'text-dark border-dark' : 'text-secondary border-secondary'} ${leftShape === 'circle' ? 'border border-secondary rounded-circle' : 'rounded squareBg'}`}></i>
        </div>
      )}
      <div className="p-2 flex-grow-1 taskContent">
        <div className="pb-1 h4 mb-0 taskText">{text}</div>
        <div className="small mb-2 text-secondary">{notes}</div>
      </div>
      {right && (
        <div className={`d-flex justify-content-center align-items-center flex-shrink-0 bg-${rightColor} sideBlock`}>
          <i className={`fa-lock fas p-2 small border rounded-circle ${rightColor === 'info' ? 'text-dark border-dark' : 'text-secondary border-secondary'}`}></i>
        </div>
      )}
    </div>
  );
}

export default TaskCard;
