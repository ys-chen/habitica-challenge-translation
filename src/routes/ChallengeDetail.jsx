import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import marked from 'marked';
import ReactHtmlParser from 'html-react-parser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TaskCard from '../components/TaskCard';
import meta from '../dataset/meta.json';
import './ChallengeDetail.scss';

function Intro({ collapsable, title, children }) {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => { setOpen(!open); };
  return (
    <>
      {collapsable && (
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="mb-0">{title}</h3>
          <button className="border-0 h2 mb-0" onClick={toggleOpen}>
            <FontAwesomeIcon icon={["fas", `angle-${open ? 'up' : 'down'}`]} className="text-secondary" />
          </button>
        </div>
      )}
      <div className={open ? 'mt-3' : 'd-none'}>
        {children}
      </div>
      <hr />
    </>
  );
}

function ChallengeDetail({ challengeId }) {
  const [t] = useTranslation();
  const [state] = useState(meta.find(({ officialId }) => (officialId === challengeId)));
  const { shortName, tasksOrder } = state;
  const desktopClass = 'd-none d-lg-block';
  const mobileClass = 'd-block d-lg-none';

  const GoToButton = ({ className }) => (
    <a
      className={`btn btn-success w-100 ${className}`}
      href="https://habitica.com/challenges/8d6e280a-4dc8-4957-b2b4-feb07ce9ff6b"
      target="_blank"
      rel="noopener noreferrer">
      {t('toChallengePage')}
    </a>
  );

  const TaskColumn = ({ title, taskType }) =>
    tasksOrder.some((type) => type === taskType) ? (
      <div className="col-12 col-md-6 d-flex flex-column">
        <div className="d-flex align-items-center">
          <h2>{title}</h2>
          <div className="badge badge-pill mx-1 mb-2 font-weight-bold badgePurple">{` ${tasksOrder.filter((type) => type === taskType).length} `}</div>
        </div>
        <div className="bg-light flex-grow-1 taskList">
          {tasksOrder.map((type, i) => type === taskType ? (
            <TaskCard
              key={type + i}
              type={type}
              text={t(`${shortName}task${i}text`)}
              notes={t(`${shortName}task${i}notes`)}
              right={taskType === 'habit'}
              leftShape={taskType === 'habit' ? 'circle' : 'square'}
            />) : '')}
        </div>
      </div>
    ) : '';

  return state && (
    <div className="row">
      <div className="col-12 col-lg-8 order-2 order-lg-1 p-4">
        <h1 className={`text-primary ${desktopClass}`}>{t(`${shortName}name`)}</h1>
        <div className="row">
          <TaskColumn title={t('habits')} taskType="habit" />
          <TaskColumn title={t('dailies')} taskType="daily" />
          <TaskColumn title={t('todos')} taskType="todo" />
          <TaskColumn title={t('rewards')} taskType="rewards" />
        </div>
        <GoToButton className={mobileClass} />
      </div>
      <div className="col-12 col-lg-4 order-1 order-lg-2 bg-light pt-4">
        <h1 className={`text-primary ${mobileClass}`}>{t(`${shortName}name`)}</h1>
        <GoToButton className={desktopClass} />
        <hr />
        <Intro collapsable title={t('summary')}>
          <p>{t(`${shortName}summary`)}</p>
        </Intro>
        <Intro collapsable title={t('description')}>
        {ReactHtmlParser(marked(t(`${shortName}description`)))}
        </Intro>
      </div>
    </div>
  );
}

export default ChallengeDetail;