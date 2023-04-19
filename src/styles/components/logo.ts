import styled from 'styled-components';

export const Logo = styled.h2`
  font-size: 32px;
  font-weight: bold;

  color: ${({ theme }) => theme.COLORS.PRIMARY};
  > span {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;
