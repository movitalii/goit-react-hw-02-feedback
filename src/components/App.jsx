import css from './App.module.css';

import Feedback from './Feedback/Feedback';

export const App = () => {
  return (
    <div className={css.wrapper}>
      <Feedback/>
    </div>    
  );
};
