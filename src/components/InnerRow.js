import styled from 'styled-components';

export const InnerRow = styled.div`
  display: flex;
  padding: 0 10% 0 10%;
  align-items: center;
  justify-content: center;
height: ${(props) => props.height+"%"};
`;
export default InnerRow;