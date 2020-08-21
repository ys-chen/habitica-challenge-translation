import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './TaskCard.scss';

function TaskCard({ text, notes, left = true, right = false, leftShape = 'circle', leftColor = 'info', rightColor = 'light' }) {
  return (
    <div className="d-flex bg-white position-relative taskCard">
      {left && (
        <div className={`d-flex justify-content-center align-items-center flex-shrink-0 bg-${leftColor} sideBlock`}>
          <FontAwesomeIcon icon={["fas", "lock"]} className={`p-2 ${leftColor === 'info' ? 'text-dark border-dark' : 'text-secondary border-secondary'} ${leftShape === 'circle' ? 'border border-secondary rounded-circle' : 'rounded squareBg'} taskIcon`} />
        </div>
      )}
      <div className="p-2 flex-grow-1 taskContent">
        <div className="pb-1 h4 mb-0 taskText">{text}</div>
        <div className="small mb-2 text-secondary">{notes}</div>
      </div>
      {right && (
        <div className={`d-flex justify-content-center align-items-center flex-shrink-0 bg-${rightColor} sideBlock`}>
          <FontAwesomeIcon icon={["fas", "lock"]} className={`p-2 border rounded-circle ${rightColor === 'info' ? 'text-dark border-dark' : 'text-secondary border-secondary'} taskIcon`} />
        </div>
      )}
    </div>
  );
}

export default TaskCard;
