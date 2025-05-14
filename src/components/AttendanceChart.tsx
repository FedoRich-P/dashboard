'use client';
import Image from 'next/image';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { attendanceChartDB } from '@/components/AttendanceChart/attendanceChartDB';
import { MoreHorizontal } from 'lucide-react';

type Props = {
  className?: string;
};

export default function AttendanceChart({ className }: Props) {
  return (
    <section className={`bg-white rounded-lg p-4 h-full ${className}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Attendance</h2>
        <button className={'cursor-pointer text-primary'}>
          <MoreHorizontal className="w-8 h-8 " aria-hidden="true" />
        </button>
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={attendanceChartDB} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
          <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />
          <Tooltip contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }} />
          <Bar dataKey="present" fill={`var(--primary)`} legendType="circle" radius={[5, 5, 0, 0]} />
          <Bar dataKey="absent" fill={`var(--sky)`} legendType="circle" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}
