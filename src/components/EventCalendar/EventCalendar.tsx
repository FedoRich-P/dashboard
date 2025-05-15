"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { MoreHorizontal } from 'lucide-react';
import { eventsCalendar } from '@/components/EventCalendar/eventCalendarDB';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function EventCalendar(){
  const [value, onChange] = useState<Value>(new Date());

  return (
    <article className="calendar-article bg-white w-full p-4 rounded-md">
      <Calendar onChange={onChange} value={value} className={'min-w-full'}/>
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold my-4">Events</h2>
        <button className={'cursor-pointer text-mainText'}>
          <MoreHorizontal className="w-8 h-8 " aria-hidden="true" />
        </button>
      </div>
      <ul className="flex flex-col gap-4">
        {eventsCalendar.map((event) => (
          <li
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-primary even:border-t-customSky"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-600">{event.title}</h3>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </li>
        ))}
      </ul>
    </article>
  );
};