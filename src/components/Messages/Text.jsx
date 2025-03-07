import React from 'react'
import extractLinks from '../../utils/extractLinks'
import Microlink from '@microlink/react'
import { Check, Checks } from '@phosphor-icons/react'
export default function Text({
  incoming,
  author,
  timestamp,
  read_receipt, // 'read' | 'delivered' | 'sent'
  content
}) {

  const { links, originalString } = extractLinks(content)
  return (
    incoming ? (<div className='max-w-125 w-fit'>
      <p className='mb-2.5 text-sm font-medium'>{author}</p>
      <div className='mb-2.5 rounded-2xl bg-gray px-5 py-3 dark:bg-boxdark-2 space-y-2' >
        <p dangerouslySetInnerHTML={{ __html: originalString }}></p>
        {links.length > 0 && <Microlink style={{ width: "100%", border: 'none' }} url={links[0]} />}
      </div>
      <p className='text-xs'>{timestamp}</p>
    </div>
    ) : (
      <div className='max-w-125 w-fit ml-auto'>
        <div className='mb-2.5 rounded-2xl  bg-primary px-5 py-3 space-y-2' >
          <p className='text-white' dangerouslySetInnerHTML={{ __html: originalString }}></p>
          {links.length > 0 && <Microlink style={{ width: "100%", border: 'none' }} url={links[0]} />}
        </div>

        <div className='flex flex-row items-center justify-end space-x-2'>
          <div className={`${read_receipt !== 'read' ? 'text-body dark:text-white' : 'text-primary'}`}>
            {read_receipt !== 'sent' ? <Checks weight='bold' size={18} /> : <Check weight='bold' size={18} />}
          </div>
          <p className='text-xs text-right'>{timestamp}</p>
        </div>

      </div>
    )
  )
}

