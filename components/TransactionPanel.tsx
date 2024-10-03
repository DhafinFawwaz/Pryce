import Image from "next/image";
import TransactionTable from "./TransactionTable";
import { columns, Transactions } from "./dummy";
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
  } from "./ui/resizable";

import { useState } from "react";
import TransactionAction from "./TransactionAction";

interface TransactionPanelProps {
    title: string;
}
export default function TransactionPanel({title} : TransactionPanelProps){
    const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
    return (
        <ResizablePanel className="flex gap-4 mb-5">
          <div className="flex flex-col h-full bg-white-100 rounded-[24px] p-5 pr-0 w-[95%]">
            <p className="font-RubikSemiBold text-gray-900">
              {title}
            </p>
            <TransactionTable columns={columns} data={Transactions} />
          </div>
          <div className="flex flex-col mt-10 h-[130px] px-2 py-5 bg-white-100 gap-3 rounded-[8px]">
            <button
              className="rounded-full w-[35px] h-[35px]"
              onClick={() => setIsAddModalOpen(true)}
            >
              <Image
                src={`/images/Add.svg`}
                width={35}
                height={35}
                alt="Add Button"
              />
            </button>
            <button
              className="rounded-full w-[35px] h-[35px]"
            >
              <Image
                src={`/images/scan.svg`}
                width={35}
                height={35}
                alt="Scan Button"
              />
            </button>

            <TransactionAction
              type="Add"
              title="Add Transaction"
              isOpen={isAddModalOpen}
              onClose={() => {
                setIsAddModalOpen(false);
              }}
            />
          </div>
        </ResizablePanel>
    )
}