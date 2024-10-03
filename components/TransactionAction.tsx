"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import FormAdd from './FormAdd';

interface TransactionActionProps {
  type: string,
  title: string,
}

export default function TransactionAction({type,title}: TransactionActionProps){
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    console.log(isModalOpen)
    setIsModalOpen((current) => {return !current});
  };
  function handleCancel(){
    setIsModalOpen(false)
  }

  return (
    <div>
      <button className="rounded-full w-[35px] h-[35px]" onClick={() => toggleModal()}>
          <Image 
              src={`/images/${type}.svg`}
              width={35}
              height={35}
              alt="Edit Button"
          />
      </button>
      {isModalOpen && (
        <div className="absolute p-4 bg-white rounded-lg shadow-md mt-2">
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-80">
            <div className="flex flex-col bg-white-100 rounded-lg w-[400px] md:w-1/3 max-h-3/4 p-4">
              <h2 className="text-center font-RubikBold text-purple-600 text-[30px]">{title}</h2>
              {type === 'Add' && <FormAdd onCancel={handleCancel}/>}
              {type === 'Edit' && <div />}
            </div>
          </div>
        </div>
      )}
    </div>
  );  
};  
