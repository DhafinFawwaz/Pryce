import TransactionContent from "@/components/TransactionContent"
import MobileNav from "@/components/ui/mobile-nav"
import Sidebar from "@/components/ui/sidebar"

export default function TransactionPage() {
  return (
    <div>
      <Sidebar />
      <MobileNav />
      <div className="mx-5 md:ml-[260px] h-screenContent">
        <TransactionContent />
      </div>
    </div>
  )
}
