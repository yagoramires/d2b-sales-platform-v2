import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, ListItem, NavContainer, NavList } from './styles';

import Logo from '../../../styles/components/logo';
import {
  AddIcon,
  EditIcon,
  LogoutIcon,
  MenuIcon,
  OrdersIcon,
} from '../../../styles/components/icons';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const name = 'COFEOS FERRAGENS';

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  const handleLogout = () => {};

  return (
    <Container>
      <div>
        <Logo />
        <NavContainer>
          <p>{name}</p>

          <nav>
            <button onClick={handleOpenModal}>
              <MenuIcon />
            </button>
            <NavList openModal={openModal}>
              <ListItem>
                <Link to='/new-order/ilumi'>
                  <AddIcon />
                  Novo Pedido
                </Link>
              </ListItem>
              <ListItem>
                <Link to='/orders'>
                  <OrdersIcon />
                  Pedidos
                </Link>
              </ListItem>
              <ListItem>
                <Link to='/profile'>
                  <EditIcon />
                  Editar Perfil
                </Link>
              </ListItem>
              <ListItem>
                <button onClick={handleLogout}>
                  <LogoutIcon />
                  Sair
                </button>
              </ListItem>
            </NavList>
          </nav>
        </NavContainer>
      </div>
    </Container>
  );
};

export default Header;
