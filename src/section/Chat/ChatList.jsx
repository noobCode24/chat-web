import { MagnifyingGlass, UserPlus } from '@phosphor-icons/react'
import React, { useState } from 'react'
import User01 from "../../assets/images/user/user-01.png";
import User02 from "../../assets/images/user/user-02.png";
import User03 from "../../assets/images/user/user-03.png";
import User04 from "../../assets/images/user/user-04.png";
import User05 from "../../assets/images/user/user-05.png";
import User06 from "../../assets/images/user/user-06.png";
import User07 from "../../assets/images/user/user-07.png";
import User08 from "../../assets/images/user/user-08.png";

const List = [
  {
    imgSrc: User01,
    name: "Henry Dholi",
    message: "I cam across your profile and...",
  },
  {
    imgSrc: User02,
    name: "Mariya Desoja",
    message: "I like your confidence 💪",
  },
  {
    imgSrc: User03,
    name: "Robert Jhon",
    message: "Can you share your offer?",
  },
  {
    imgSrc: User04,
    name: "Cody Fisher",
    message: `I'm waiting for you response!`,
  },
  {
    imgSrc: User05,
    name: "Jenny Wilson",
    message: "I cam across your profile and...",
  },
  {
    imgSrc: User06,
    name: "Robert Jhon",
    message: "Can you share your offer?",
  },
  {
    imgSrc: User07,
    name: "Cody Fisher",
    message: `I'm waiting for you response!`,
  },
  {
    imgSrc: User08,
    name: "Jenny Wilson",
    message: "I cam across your profile and...",
  },
];
export default function ChatList() {
  const [selected, setSelected] = useState(0)


  return (
    <div className='hidden h-full flex-col xl:flex xl:w-1/4'>
      <div className='flex flex-row place-content-between items-center sticky border-b border-stroke dark:border-strokedark px-5 py-4.5'>
        <h3 className='text-lg font-medium text-black dark:text-white 2xl:text-title-md2'>Chat List</h3>
        <div className='rounded-full border-[.5px] border-stroke bg-stone-200 dark:border-white px-1.5 py-1.5 hover:bg-opacity-90 hover:cursor-pointer'>
          <UserPlus size={21} />
        </div>
      </div>

      <div className='flex max-h-full flex-col overflow-auto p-5 no-scrollbar'>
        <from className='sticky'>
          <input placeholder='Search...' type='text' className='w-full rounded border border-stroke bg-gray-2 py-2 pl-5 pr-10 text-sm outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2' />
          <button className='absolute right-4 top-1/2 -translate-y-1/2'>
            <MagnifyingGlass size={20} />
          </button>
        </from>
      </div>

      <div className='no-scrollbar overflow-auto max-h-full space-y-2.5'>
        {/* Chat List item */}
        {List.map((object, item) => {
          return (
            <div
              className={`flex items-center rounded px-4 py-2 ${selected === item ? 'bg-gray dark:bg-boxdark-2 cursor-default' : 'cursor-pointer hover:bg-gray-2 dark:hover:bg-strokedark'}`}
              key={item}
              onClick={() => {
                setSelected(item)
              }}
            >
              <div className='relative mr-3.5 h-11 w-full max-w-11 rounded-full'>
                <img src={object.imgSrc} alt='profile' className='h-full w-full rounded-full object-cover-center' />

                <span className='absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-success'></span>
              </div>

              <div className='w-full'>
                <h5 className='text-sm font-medium text-black dark:text-white'>{object.name}</h5>
                <p className='text-sm'>{object.message}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
