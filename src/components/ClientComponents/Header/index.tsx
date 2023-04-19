import { useState } from 'react';
import { Logo } from '../../../styles/components/logo';
import { Container, NavContainer } from './styles';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const name = 'COFEOS FERRAGENS';

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <Container>
      <div>
        <Logo>
          D<span>2</span>B
        </Logo>
        <NavContainer openModal={openModal}>
          <p>{name}</p>

          <nav>
            <button onClick={handleOpenModal}>
              <GiHamburgerMenu size={32} color='white' />
            </button>
            <ul>
              <li>
                <Link to='/order'>Pedido</Link>
              </li>
              <li>
                <Link to='/dashboard'>Painel</Link>
              </li>
              <li>
                <Link to='/profile-edit'>Editar Perfil</Link>
              </li>
              <li>
                <button>Sair</button>
              </li>
            </ul>
          </nav>
        </NavContainer>
      </div>
    </Container>
  );
};

export default Header;
