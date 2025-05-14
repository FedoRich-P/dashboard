'use client';

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { financeChartDB } from '@/components/FinanceChart/financeChartDB';
import { MoreHorizontal } from 'lucide-react';

type Props = {
  className?: string;
};

export default function FinanceChart({ className }: Props) {
  return (
    <section className={`bg-white rounded-xl h-full max-h-[450px] w-full p-4 ${className ? className : ''}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Finance</h2>
        <button className={'cursor-pointer'}>
          <MoreHorizontal className="w-7 h-7 " aria-hidden="true" />
        </button>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={financeChartDB}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} tickMargin={10} />
          <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} tickMargin={20} />
          <Tooltip />
          <Legend align="center" verticalAlign="top" wrapperStyle={{ paddingTop: '10px', paddingBottom: '30px' }} />
          <Line type="monotone" dataKey="income" stroke="#C3EBFA" strokeWidth={5} />
          <Line type="monotone" dataKey="expense" stroke="#CFCEFF" strokeWidth={5} />
        </LineChart>
      </ResponsiveContainer>
    </section>
  );
}