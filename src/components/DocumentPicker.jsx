import { PaperPlaneTilt, X } from '@phosphor-icons/react'
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToogleDocumentModal } from '../redux/slices/app'
import FileDropZone from './FileDropZone'

export default function DocumentPicker() {
  const modalRef = useRef(null)
  const dispatch = useDispatch()
  const { doc } = useSelector((state) => state.app.modals)

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!doc || keyCode !== 27) return;

      dispatch(ToogleDocumentModal(false))
    }
    document.addEventListener("keydown", keyHandler)
    return () => {
      document.removeEventListener("keydown", keyHandler)
    }
  })

  return (
    <div className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5 ${doc ? 'block' : 'hidden'}`}>
      <div ref={modalRef} className='md:px-17.5 w-full max-w-142.5 rounded-lg bg-white dark:bg-boxdark md:py-8 px-8 py-12'>
        <div className='flex flex-row items-center justify-between mb-8 space-x-2'>
          <div className='text-md font-medium text-black dark:text-white'>Choose files to send</div>

          <button onClick={() => {
            dispatch(ToogleDocumentModal(false))
          }}>
            <X size={20} />
          </button>
        </div>

        {/* FileDrop */}
        <FileDropZone acceptedFiles='.pdf,.ppt,.docx,.xls,.xlsx,.txt,.csv,.fig' maxFileSize={64 * 1024 * 1024} />

        <div className='flex flex-row items-center space-x-2 justify-between mt-4'>
          <input type='text' placeholder='Type your message...' className='border rounded-lg hover:border-primary outline-none w-full p-2 border-stroke dark:border-strokedark bg-transparent dark:bg-form-input' />

          <button className='p-2.5 border border-primary flex items-center justify-center rounded-lg bg-primary hover:bg-opacity-90 text-white'>
            <PaperPlaneTilt size={20} weight='bold' />
          </button>
        </div>
      </div>
    </div>
  )
}
