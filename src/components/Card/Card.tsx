import {Card as MUICard} from 'antd';
import {CardProps} from './Card.interface';

export function Card(props: CardProps) {
  return <MUICard {...props} />;
}
