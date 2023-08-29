import styled from 'styled-components';

export const LayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
  }

  main {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;