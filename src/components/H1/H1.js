import styled from 'styled-components'

const H1 = styled.h1`
  font-size: ${(isBig) => isBig ? '3em' : '2em'};
  text-align: center;
  display: block;
  margin: 0 auto;
`;

export default H1;
 