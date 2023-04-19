import styled from 'styled-components';

interface ModalProps {
  openModal: boolean;
}

export const Container = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK50};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.9);
  padding: 4px 16px;

  > div {
    max-width: 1280px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  > p {
    font-weight: 500;
  }

  nav > button {
    margin-top: 6px;
    background: transparent;
  }

  nav {
    position: relative;
  }

  button:hover ~ ul,
  ul:hover {
    display: block;
  }
`;

export const NavList = styled.ul<ModalProps>`
  display: ${({ openModal }) => (openModal ? 'block' : 'none')};
  width: 230px;
  position: absolute;
  top: 38px;
  right: 2px;
  padding: 16px 40px;
  background: ${({ theme }) => theme.COLORS.DARK50};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const ListItem = styled.li`
  width: 100%;
  text-align: start;
  padding: 4px 0;

  a,
  button {
    width: 100%;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    text-align: start;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
  }

  :hover {
    a,
    button {
      color: ${({ theme }) => theme.COLORS.SECONDARY};
    }
  }
`;
