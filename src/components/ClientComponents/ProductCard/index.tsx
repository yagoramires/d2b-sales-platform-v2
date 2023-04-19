import { useState } from 'react';
import {
  CartButton,
  Container,
  ProductImg,
  ProductQuantity,
  ProductText,
} from './styles';
import { CartIcon } from '../../../styles/components/icons';

const ProductCard = () => {
  const [total, setTotal] = useState({
    quantity: 0,
    value: 0,
  });

  const product = {
    id: '1',
    img: 'https://femac.agilecdn.com.br/1027_1.jpg?v=113-317368299',
    code: '22140',
    name: 'TOMADA ILUMI SAFIRA 2P+T',
    category: 'SAFIRA',
    price: 3.86748358,
    box: '1',
    type: 'PC',
  };

  const handleChangeInputValue = (quantity: number) => {
    setTotal({
      quantity,
      value: quantity * product.price,
    });
  };

  const handleAddProductToCart = () => {};

  return (
    <Container>
      <ProductImg src={product.img} alt={product.name} />
      <ProductText style={{ width: '80px' }}>{product.code}</ProductText>
      <ProductText style={{ flex: 1 }}>{product.name}</ProductText>
      <ProductText style={{ width: '80px' }}>
        {product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </ProductText>
      <ProductQuantity
        type='number'
        max={999}
        onChange={(e) => handleChangeInputValue(Number(e.target.value))}
      />
      <ProductText style={{ width: '100px' }}>
        {total.value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </ProductText>
      <CartButton onClick={handleAddProductToCart}>
        <CartIcon />
      </CartButton>
    </Container>
  );
};

export default ProductCard;
