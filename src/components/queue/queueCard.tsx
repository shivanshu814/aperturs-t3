
import { Card } from '@material-tailwind/react';
import React from 'react';

interface CardProps {
  time: string;
  type: string;
}

const QueueCard: React.FC<CardProps> = ({ time, type }) => {
  return (
    <Card shadow={false} className="flex font-bold bg-secondary group shadow-mdc flex-row py-6 px-5 ">
      <div className="time">{time}</div>
      <div className="hidden group-hover:flex ease-in-out mx-5">{type}</div>
    </Card>
  );
};

export default QueueCard;
