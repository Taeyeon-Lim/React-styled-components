import './App.css';
import styled, { css } from 'styled-components';

// styled-components
const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color};
  border-radius: 50%;
  ${props =>
    props.huge &&
    // template literals('css' 미적용) => tagged template literals (적용)
    css`
      width: 10rem;
      height: 10rem;
    `}
`;

function App() {
  return <Circle color='blue' huge />;
}

export default App;
