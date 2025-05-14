'use client';
import Image from 'next/image';
import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts';
import { countChartDB } from '@/components/CountChart/countChartDB';
import { MoreHorizontal } from 'lucide-react';
import { formatNumber } from '@/shared/lib/format/formatNumber';
import { calculatePercentages } from '@/shared/lib/math/calculatePercentages';
import { useMemo } from 'react';

type Props = {
  boysCount: number;
  girlsCount: number;
  className?: string;
};

export default function CountChart({ className, boysCount, girlsCount }: Props) {
  const { boysPercentage, girlsPercentage } = calculatePercentages(boysCount, girlsCount);

  const chartData = useMemo(
    () =>
      countChartDB.map((item) => ({
        ...item,
        count: item.name === 'Boys' ? boysCount : item.name === 'Girls' ? girlsCount : boysCount + girlsCount,
      })),
    [boysCount, girlsCount]
  );

  return (
    <section className={`bg-white rounded-xl w-full h-full p-4 ${className}`}>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Students</h2>
        <button className={'cursor-pointer text-primary'}>
          <MoreHorizontal className="w-8 h-8 " aria-hidden="true" />
        </button>
      </div>
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={chartData}
            startAngle={90}
            endAngle={450}>
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src="/maleFemale.png"
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <ul className="flex justify-center gap-16">
        <li className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-customSky rounded-full" />
          <h3 className="font-bold">{formatNumber(boysCount, { compact: false })}</h3>
          <h4 className="text-xs text-gray-300">Boys ({boysPercentage}%)</h4>
        </li>
        <li className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-primary rounded-full" />
          <h3 className="font-bold">{formatNumber(girlsCount, { compact: false })}</h3>
          <h4 className="text-xs text-gray-300">Girls ({girlsPercentage}%)</h4>
        </li>
      </ul>
    </section>
  );
}
