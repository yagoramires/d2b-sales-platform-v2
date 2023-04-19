import styled from 'styled-components';

const Container = styled.h2`
  font-size: 32px;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS.PRIMARY};
  > span {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

const Logo = () => (
  <Container>
    D<span>2</span>B
  </Container>
);

export default Logo;
