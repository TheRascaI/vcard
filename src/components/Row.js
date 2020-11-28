import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.padding};
  height: ${(props) => props.height+"vh"};
  width: ${(props) => props.width+"%"};
`; 
export default Row;