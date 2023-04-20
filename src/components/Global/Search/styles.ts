import styled from 'styled-components';

export const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  /* background: ${({ theme }) => theme.COLORS.PRIMARY}; */
  overflow: hidden;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    max-width: 400px;
  }
`;

export const Input = styled.input`
  outline: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background: ${({ theme }) => theme.COLORS.DARK50};
  flex: 1;
  height: 50px;
  padding: 0 16px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  height: 50px;
  padding: 0 32px;
`;
