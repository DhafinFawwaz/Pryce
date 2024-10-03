"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import FormAdd from "./FormAdd";

interface TransactionActionProps {
  type: string;
  isOpen: boolean;
  data?: TData;
  title: string;
  onClose: () => void;
}

export default function TransactionAction({
  type,
  data,
  title,
  isOpen = false,
  onClose,
}: TransactionActionProps) {
  return (
    <div>
      {isOpen && (
        <div className="absolute p-4 bg-white rounded-lg shadow-md mt-2">
          <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-80">
            <div className="flex flex-col bg-white-100 rounded-lg w-[400px] max-h-3/4 p-4">
              <button onClick={onClose} className="absolute ml-[350px]">X</button>
              <h2 className="text-center font-RubikBold text-purple-600 text-[30px]">
                {title}
              </h2>
              
              {type === "Add" && <FormAdd onCancel={onClose} />}
              {type === "Edit" && <FormAdd onCancel={onClose} data={data} />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
