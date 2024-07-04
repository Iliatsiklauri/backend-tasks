'use client';
import { setCookie } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export default function LoginModal() {
  const [info, setInfo] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setInfo({ email: '', password: '' });
    const response = await fetch('http://localhost:4000/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    const data = await response.json();
    setCookie('cookie', data.accessToken);
    if (response.ok) router.push('/');
  };
  console.log(window.location.href.split('/')[3]);

  return (
    <div className="w-[380px] h-[500px] bg-slate-800 rounded-xl flex items-center justify-start flex-col p-10 gap-20">
      <h2 className="text-xl text-white">register</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 items-start w-full"
      >
        <div className="flex items-start w-full justify-between flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="h-[40px] rounded-md w-full"
            value={info.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-start w-full justify-center flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="h-[40px] rounded-md w-full"
            value={info.password}
            onChange={handleChange}
          />
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-1">
          <button
            type="submit"
            className="self-center w-full h-[50px] rounded-[9px] mt-12 bg-fuchsia-900 text-white"
          >
            Submit
          </button>
          <p className="text-[14px]">
            already have an account ?{' '}
            <Link href="/sign-in" className="text-blue-500">
              Sign In
            </Link>{' '}
          </p>
        </div>
      </form>
    </div>
  );
}
