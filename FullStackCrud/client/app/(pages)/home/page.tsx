'use client';
import Header from '@/app/components/header/Header';
import React, { useEffect } from 'react';

export default function page() {
  async function getData() {
    const data = await fetch('http://localhost:4000/expenses', {
      method: 'GET',
      credentials: 'include',
    });
    return data.json();
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData();
        console.log(data, 'response');
      } catch (e) {
        console.log(e, 'error here');
      }
    }
    fetchData();
  }, []);
  return (
    <div className="w-full h-full bg-gray-500 text-xl flex items-center justify-center min-h-screen relative pt-[100px]">
      <Header />
      <div className="w-full h-full bg-black p-5"></div>
    </div>
  );
}
