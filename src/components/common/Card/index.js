import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
`;
