import React from 'react'
import { DotsThree, LinkSimple, PaperPlaneTilt, Smiley } from '@phosphor-icons/react';
import User01 from "../../assets/images/user/user-01.png";
import Dropdown from '../../components/Dropdown';
export default function Inbox() {
  return (
    <div className='flex h-full flex-col border-l border-stroke dark:border-strokedark xl:w-3/4'>
      {/*Chat header */}
      <div className='sticky flex items-center flex-row justify-between border-b border-stroke dark:border-strokedark px-5 py-5'>
        <div className='flex items-center'>
          <div className='mr-4.5 h-11.5 w-full max-w-11.5 rounded-full relative'>
            <img src={User01} alt='avatar' className='h-full object-cover object-center' />
            <span className='absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-2 bg-success'></span>
          </div>
          <div>
            <h5 className='font-medium text-black dark: dark:text-white'>
              Henry Dholi
            </h5>
            <p className='text-sm'>online</p>
          </div>
        </div>

        <div>
          <Dropdown />
        </div>
      </div>

      {/*Chat body */}
      <div className='max-h-full space-y-3.5 flex flex-col gap-2 overflow-auto no-scrollbar px-5 py-7 grow'>
        <div className='max-w-125 w-fit'>
          <p className='mb-2.5 text-sm font-medium'>Andri Thomas</p>
          <div className='mb-2.5 rounded-2xl  bg-gray px-5 py-3 dark:bg-boxdark-2' >
            <p>I want to make an appointment fkjasdkfjsdfas asdfjksd daskfjs fsdfs </p>
          </div>
          <p className='text-xs'>5:05pm</p>
        </div>

        {/* copy */}
        <div className='max-w-125 w-fit ml-auto'>
          <div className='mb-2.5 rounded-2xl  bg-primary px-5 py-3' >
            <p className='text-white'>hello </p>
          </div>
          <p className='text-xs text-right'>5:05pm</p>
        </div>

        {/* copy */}
        <div className='max-w-125 w-fit'>
          <p className='mb-2.5 text-sm font-medium'>Andri Thomas</p>
          <div className='mb-2.5 rounded-2xl bg-gray px-5 py-3 dark:bg-boxdark-2' >
            <p>test thôi </p>
          </div>
          <p className='text-xs'>5:05pm</p>
        </div>

        {/* copy */}
        <div className='max-w-125 w-fit'>
          <p className='mb-2.5 text-sm font-medium'>Andri Thomas</p>
          <div className='mb-2.5 rounded-2xl bg-gray px-5 py-3 dark:bg-boxdark-2' >
            <p>test thôi </p>
          </div>
          <p className='text-xs'>5:05pm</p>
        </div>
      </div>

      {/*Chat footer */}
      <div className='sticky bottom-0 border-t border-stroke bg-white px-6 py-5 dark:border-strokedark dark:bg-boxdark'>
        <form className='flex items-center justify-between space-x-4.5'>
          <div className='relative w-full'>
            <input type='text' placeholder='Type something here' className='h-12 w-full rounded-md border border-stroke bg-gray pl-5 pr-19 text-black placeholder-body outline-none focus:border-primary dark:border-strokedark dark:bg-boxdark-2 dark:text-white' />

            {/* icon link */}
            <div className='absolute flex right-5 top-1/2 -translate-y-1/2 items-center justify-end space-x-4'>
              <button className='hover:text-primary' >
                <LinkSimple size={24} />
              </button>
              <button className='hover:text-primary' >
                <Smiley size={24} />
              </button>
            </div>
          </div>

          <button className='flex items-center justify-center h-12 max-w-12 w-full rounded-md bg-primary text-white hover:bg-opacity-90 '>
            <PaperPlaneTilt size={24} weight='bold' />
          </button>
        </form>
      </div>
    </div>
  )
}
