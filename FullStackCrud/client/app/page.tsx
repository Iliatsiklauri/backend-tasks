'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<any>();
  useEffect(() => {
    axios
      .get('http://localhost:4000/expenses')
      .then((response) => {
        setData(response?.data);
      })
      .catch((error) => {});
  }, []);
  return (
    <div className="w-full min-h-screen bg-slate-600 flex items-center justify-center flex-col gap-2">
      {data?.map((el: any, key: number) => (
        <div
          key={key}
          className="w-[80%] h-[150px] flex items-start border-[2px] border-black bg-slate-700 flex-col justify-around p-10"
        >
          <p>title: {el.title}</p>
          <p>cost: {el.cost}</p>
          <p>desctiption: {el.description}</p>
        </div>
      ))}
    </div>
  );
}
