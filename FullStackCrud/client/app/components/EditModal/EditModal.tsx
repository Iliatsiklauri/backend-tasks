import React, { useState } from 'react';

export default function EditModal({
  setModal,
  modal,
}: {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  modal: boolean;
}) {
  const [info, setInfo] = useState<{}>({});
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: name === 'cost' ? Number(value) : value,
    });
  };
  const handleSubmit = {
    console.log(info);
  }
  return (
    <div
      className={`absolute w-full h-full  top-0 left-0 flex items-center justify-center 
      `}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full bg-black opacity-50 z-30 cursor-pointer"
          onClick={() => {
            setModal(false);
          }}
        ></div>
        <form className="w-[400px] h-[300px] gap-2 z-50  rounded-xl relative flex flex-col items-center p-3 justify-center bg-slate-500">
          <div
            className="text-2xl absolute top-4 right-4 bg-red-700 px-2 cursor-pointer"
            onClick={() => setModal(false)}
          >
            X
          </div>
          <div className="w-full flex justify-center flex-col relative">
            <div className="flex w-full items-center justify-between">
              <label htmlFor="title">title</label>
              <input
                type="text"
                id="title"
                onChange={HandleChange}
                name="title"
                value={info.title}
              />
            </div>
          </div>
          <div className="w-full flex justify-center flex-col relative">
            <div className="flex w-full justify-between ">
              <label htmlFor="description">description</label>
              <input
                type="text"
                id="description"
                onChange={HandleChange}
                name="description"
                value={info.description}
              />
            </div>
          </div>
          <div className="w-full flex justify-center flex-col relative">
            <div className="flex items-center justify-between">
              <label htmlFor="cost">cost</label>
              <input
                type="number"
                id="cost"
                onChange={HandleChange}
                name="cost"
                value={info.cost}
              />
            </div>
          </div>
          <button className="bg-green-600 px-2 cursor-pointer">Update</button>
        </form>
      </div>
    </div>
  );
}
