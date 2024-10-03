import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import TransactionTable from "./TransactionTable";
import { columns, Transactions } from "./dummy"
import Image from "next/image";
export default function TransactionContent(){
    return (
        <div>
            <ResizablePanelGroup
                direction="vertical"
                className="max-w-full min-h-screenTransaction rounded-lg border-none md:min-w-full"
            >
                <ResizablePanel className="flex gap-4 mb-5">
                    <div className="flex flex-col h-full bg-white-100 rounded-[24px] p-5 pr-0 w-[95%]">
                        <p className="font-RubikSemiBold text-gray-900">Daily Transaction</p>
                        <TransactionTable columns={columns} data={Transactions}/>
                    </div>
                    <div className="flex flex-col mt-10 h-[215px] px-2 py-5 bg-white-100 gap-3 rounded-[8px]">
                        <button className="flex rounded-full w-[35px] h-[35px] p-0">
                            <Image 
                                src={"/images/add.svg"}
                                width={35}
                                height={35}
                                alt="Add Button"
                            />
                        </button>
                        <button className="rounded-full w-[35px] h-[35px]">
                            <Image 
                                src={"/images/edit.svg"}
                                width={35}
                                height={35}
                                alt="Edit Button"
                            />
                        </button>
                        <button className="rounded-full w-[35px] h-[35px]">
                            <Image 
                                src={"/images/delete.svg"}
                                width={35}
                                height={35}
                                alt="Delete Button"
                            />
                        </button>
                        <button className="rounded-full w-[35px] h-[35px]">
                            <Image 
                                src={"/images/scan.svg"}
                                width={35}
                                height={35}
                                alt="Scan Button"
                            />
                        </button>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle className="relative outline-none" />
                <ResizablePanel className="flex gap-4 mt-5">
                    <div className="flex flex-col h-full bg-white-100 rounded-[24px] p-5 pr-0 w-[95%]">
                        <p className="font-RubikSemiBold text-gray-900">Project Transaction</p>
                        <TransactionTable columns={columns} data={Transactions}/>
                    </div>
                    <div className="flex flex-col mt-10 h-[215px] px-2 py-5 bg-white-100 gap-3 rounded-[8px]">
                        <button className="flex rounded-full w-[35px] h-[35px] p-0">
                            <Image 
                                src={"/images/add.svg"}
                                width={35}
                                height={35}
                                alt="Add Button"
                            />
                        </button>
                        <button className="rounded-full w-[35px] h-[35px]">
                            <Image 
                                src={"/images/edit.svg"}
                                width={35}
                                height={35}
                                alt="Edit Button"
                            />
                        </button>
                        <button className="rounded-full w-[35px] h-[35px]">
                            <Image 
                                src={"/images/delete.svg"}
                                width={35}
                                height={35}
                                alt="Delete Button"
                            />
                        </button>
                        <button className="rounded-full w-[35px] h-[35px]">
                            <Image 
                                src={"/images/scan.svg"}
                                width={35}
                                height={35}
                                alt="Scan Button"
                            />
                        </button>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}