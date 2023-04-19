import ProductCard from '../../../components/ClientComponents/ProductCard';
import { products } from '../../../../productsMock';
import { Container, Label, LabelContainer, ProductsList } from './styles';

const Industry = () => {
  return (
    <Container>
      <ProductsList>
        <LabelContainer>
          <Label style={{ minWidth: '60px', maxWidth: '60px' }}>Imagem</Label>
          <Label style={{ minWidth: '80px', maxWidth: '80px' }}>Código</Label>
          <Label style={{ width: '100%' }}>Nome</Label>
          <Label style={{ minWidth: '80px', maxWidth: '80px' }}>Vlr. Un.</Label>
          <Label style={{ minWidth: '50px', maxWidth: '50px' }}>Qnt.</Label>
          <Label style={{ minWidth: '100px', maxWidth: '100px' }}>Total</Label>
          <Label style={{ minWidth: '50px', maxWidth: '50px' }} />
        </LabelContainer>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductsList>
    </Container>
  );
};

export default Industry;
