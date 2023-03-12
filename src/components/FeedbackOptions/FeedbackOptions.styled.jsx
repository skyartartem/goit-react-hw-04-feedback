import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 16px;
`;

const bgrColor = props => {
  switch (props.hoverType) {
    case 'good':
      return ` rgba(0, 200, 0, 0.5);`;
    case 'neutral':
      return ` rgb(245, 245, 200);`;
    case 'bad':
      return ` rgba(255, 118, 118, 0.8);`;
    default:
      console.log('Invalid subscription type');
  }
};

export const Button = styled.button`
  text-transform: capitalize;
  cursor: pointer;
  font-weight: 700;
  padding: 2px 10px;
  border-radius: 4px;
  border-width: 1px;
  &:hover {
    box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
    background-color: ${bgrColor};
  }
`;
