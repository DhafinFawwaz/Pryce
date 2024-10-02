import MobileNav from "@/components/ui/mobile-nav";
import Sidebar from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import MonthlyIncomeExpensesChart from "@/components/ui/MonthlyIncomeExpensesChart";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 sm:ml-[250px] p-4">
        <MobileNav />
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <MonthlyIncomeExpensesChart />
      </div>
    </div>
  );
}
