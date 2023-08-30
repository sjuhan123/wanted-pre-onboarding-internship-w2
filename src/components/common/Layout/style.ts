import styled from 'styled-components';

export const LayoutBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100vw;

  header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2rem;
    width: 700px;
    padding: 1rem;
    margin: 3rem;
    position: relative;

    > button {
      position: absolute;
      left: 20px;
      width: 50px;
      height: 40px;
      border: 1px solid #000000;
      border-radius: 0.5rem;
      font-size: 1rem;
      cursor: pointer;
    }

    > h1 {
      font-size: 3rem;
      margin: 0;
      cursor: pointer;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    height: 1000px;
    width: 700px;
  }
`;
