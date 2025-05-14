type Props = {
  id: string;
  type: string;
  count: number;
  date: string;
};

export const cardData: Props[] = [
  {
    id: crypto.randomUUID(),
    type: "student",
    count: 1234567,
    date: "2024-02-15",
  },
  {
    id: crypto.randomUUID(),
    type: "teacher",
    count: 1200,
    date: "2024-03-10",
  },
  {
    id: crypto.randomUUID(),
    type: "parent",
    count: 1345457,
    date: "2024-04-22",
  },
  {
    id: crypto.randomUUID(),
    type: "staff",
    count: 467,
    date: "2024-05-05",
  },
];