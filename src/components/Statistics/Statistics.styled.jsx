import styled from '@emotion/styled';

export const Numbers = styled.span`
  font-weight: 700;
`;

const bgrColor = props => {
     switch (props.categoryName) {
       case 'good':
         return ` rgba(0, 128, 0, 25%);`;
       case 'neutral':
         return ` rgba(255, 228, 196, 60%);`;
       case 'bad':
         return ` rgba(255, 0, 0, 20%)`;
       default:
         console.log('Invalid subscription type');
     }
}

export const Category = styled.p`
  text-transform: capitalize;
  margin: 0;
  width: 200px;
  padding: 16px;
  display: block;
  background-color: ${bgrColor};
`;