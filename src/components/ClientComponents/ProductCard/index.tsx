import { FormEvent, useState } from 'react';
import {
  CartButton,
  Container,
  Text,
  Image,
  ProductQuantity,
  ProductForm,
  ImageContainer,
  Label,
  TextContainer,
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

  const handleAddProductToCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(total.quantity);
  };

  return (
    <Container>
      <ImageContainer>
        {product.img ? (
          <Image src={product.img} alt={product.name} />
        ) : (
          <NoImageIcon />
        )}
      </ImageContainer>

      <TextContainer>
        <Label>Código:</Label>
        <Text>{product.code}</Text>
      </TextContainer>
      <TextContainer>
        <Label>Nome:</Label>
        <Text>{product.name}</Text>
      </TextContainer>
      <ProductForm onSubmit={handleAddProductToCart}>
        <TextContainer style={{ flexDirection: 'column', gap: '2px' }}>
          <Label>Valor Unitário:</Label>
          <Text style={{ fontWeight: 'bold' }}>
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </Text>
        </TextContainer>
        <ProductQuantity
          type='number'
          min={0}
          max={999}
          step={product.minValue}
          value={total.quantity}
          onChange={(e) => handleChangeInputValue(Number(e.target.value))}
        />
        <CartButton type='submit'>
          <CartIcon />
        </CartButton>
      </ProductForm>
    </Container>
  );
};

export default ProductCard;
