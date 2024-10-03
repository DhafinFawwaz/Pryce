"use client";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import TransactionTable from "./TransactionTable";
import { columns, Transactions } from "./dummy";
import Image from "next/image";
import TransactionAction from "./TransactionAction";
import { useState } from "react";
import TransactionPanel from "./TransactionPanel";
export default function TransactionContent() {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);

  return (
    <div>
      <ResizablePanelGroup
        direction="vertical"
        className="max-w-full min-h-screenTransaction rounded-lg border-none md:min-w-full"
      >
        <TransactionPanel title="Daily Transaction"/>
        <ResizableHandle withHandle className="relative outline-none" />
        <TransactionPanel title="Project Transaction"/>
      </ResizablePanelGroup>
    </div>
  );
}
