
import { Card } from '@material-tailwind/react';
import React from 'react';

interface CardProps {
  time: string;
  type: string;
}

const QueueCard: React.FC<CardProps> = ({ time, type }) => {
  return (
    <Card className="flex p-4">
      <div className="time">{time}</div>
      <div className="type">{type}</div>
    </Card>
  );
};

export default QueueCard;
