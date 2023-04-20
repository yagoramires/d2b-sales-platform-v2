import Search from '../../../components/Global/Search';
import {
  LabelContainer,
  LabelText,
  ListContainer,
} from '../../../styles/components/list';
import { Container } from '../../../styles/section';
import OrderCard from './OrderCard';

const Orders = () => {
  const order = {
    id: 1,
    code: 1,
    createdAt: '20/04/2023',
    total: 99000,
    deadline: '14/21/28/35/42/49/56/63/70/77/84/91/98/105/112/119',
  };

  return (
    <Container>
      <Search />
      <ListContainer>
        <LabelContainer>
          <LabelText width='20%'>Número do Pedido</LabelText>
          <LabelText width='20%'>Data</LabelText>
          <LabelText width='250px'>Prazo de Pagamento</LabelText>
          <LabelText width='20%'>Valor Total</LabelText>
        </LabelContainer>
        <OrderCard order={order} />
      </ListContainer>
    </Container>
  );
};

export default Orders;
