import React from 'react';
import { CardText, ListCard } from '../../../../styles/components/list';
import styled from 'styled-components';

interface OrderProps {
  id: number;
  code: number;
  createdAt: string;
  total: number;
  deadline: string;
}

interface Props {
  order: OrderProps;
}

const OrderCard = ({ order }: Props) => {
  return (
    <ListCard>
      <CardText width='20%'>{order.code}</CardText>
      <CardText width='20%'>{order.createdAt}</CardText>
      <CardText width='250px'>{order.deadline}</CardText>
      <CardText width='20%'>
        {order.total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </CardText>
    </ListCard>
  );
};

export default OrderCard;
