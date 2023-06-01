import styled from "styled-components";

import background from '../../resources/background.png';

export const Wrapper = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${background});
  background-position: center;
  background-size: cover;
  height: 100vh;
`;