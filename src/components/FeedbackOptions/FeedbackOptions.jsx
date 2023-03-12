import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Container>
      {options.map((name, i) => {
        return (
          <Button
            key={i + 1}
            hoverType={name}
            onClick={() => {
              onLeaveFeedback[i](name);
            }}
          >
            {name}
          </Button>
        );
      })}
    </Container>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.arrayOf(PropTypes.func).isRequired,
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
};
