import { useState } from 'react';
import {
  CartButton,
  Container,
  ProductImg,
  ProductQuantity,
  ProductText,
} from './styles';
import { CartIcon, NoImageIcon } from '../../../styles/components/icons';

import { IProduct } from '../../../interfaces/IProduct';

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [total, setTotal] = useState({
    quantity: 0,
    value: 0,
  });

  const handleChangeInputValue = (quantity: number) => {
    setTotal({
      quantity,
      value: quantity * product.price,
    });
  };

  const handleAddProductToCart = () => {};

  return (
    <Container>
      {product.img ? (
        <ProductImg src={product.img} alt={product.name} />
      ) : (
        <NoImageIcon />
      )}
      <ProductText style={{ minWidth: '80px', maxWidth: '80px' }}>
        {product.code}
      </ProductText>
      <ProductText style={{ width: '100%' }}>{product.name}</ProductText>
      <ProductText style={{ minWidth: '80px', maxWidth: '80px' }}>
        {product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </ProductText>
      <ProductQuantity
        type='number'
        min={0}
        max={999}
        step={product.minValue}
        value={total.quantity}
        onChange={(e) => handleChangeInputValue(Number(e.target.value))}
      />
      <ProductText style={{ minWidth: '100px', maxWidth: '100px' }}>
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
