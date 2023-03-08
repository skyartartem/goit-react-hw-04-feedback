import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className={css.wrap}>
      {options.map((name, i) => {
        return (
          <button
            key={i + 1}
            className={css[name]}
            onClick={() => {
              onLeaveFeedback[i](name);
            }}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func).isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
