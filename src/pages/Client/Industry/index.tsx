import ProductCard from '../../../components/ClientComponents/ProductCard';
import { products } from '../../../../productsMock';
import { ProductsList } from './styles';
import Search from '../../../components/Global/Search';
import { Container } from '../../../styles/section';

const Industry = () => {
  return (
    <Container>
      <Search />
      <ProductsList>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </ProductsList>
    </Container>
  );
};

export default Industry;
