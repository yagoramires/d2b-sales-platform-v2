import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';
import { TiDocumentAdd, TiDocument } from 'react-icons/ti';
import { TbEdit } from 'react-icons/tb';
import { CgLogOut } from 'react-icons/cg';
import { RiShoppingCartLine } from 'react-icons/ri';
import { MdOutlineImageNotSupported } from 'react-icons/md';

export const MenuIcon = styled(GiHamburgerMenu).attrs(({ theme }) => ({
  size: 32,
  color: theme.COLORS.WHITE,
}))``;

export const AddIcon = styled(TiDocumentAdd).attrs(({ theme }) => ({
  size: 25,
  color: theme.COLORS.WHITE,
}))``;

export const OrdersIcon = styled(TiDocument).attrs(({ theme }) => ({
  size: 25,
  color: theme.COLORS.WHITE,
}))``;

export const EditIcon = styled(TbEdit).attrs(({ theme }) => ({
  size: 25,
  color: theme.COLORS.WHITE,
}))``;

export const LogoutIcon = styled(CgLogOut).attrs(({ theme }) => ({
  size: 25,
  color: theme.COLORS.WHITE,
}))``;

export const CartIcon = styled(RiShoppingCartLine).attrs(({ theme }) => ({
  size: 25,
  color: theme.COLORS.PRIMARY,
}))`
  min-width: 50px;
  max-width: 50px;
`;

export const NoImageIcon = styled(MdOutlineImageNotSupported).attrs(
  ({ theme }) => ({
    size: 30,
    color: theme.COLORS.WHITE,
  }),
)`
  min-width: 60px;
  max-width: 60px;
`;
