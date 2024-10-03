import MobileNav from "@/components/ui/mobile-nav";
import Sidebar from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table } from "@/components/ui/table";
import MonthlyIncomeExpensesChart from "@/components/ui/MonthlyIncomeExpensesChart";
import { getSessionAndEnsureAuthenticated } from "../api/auth/[...nextauth]/utils";

export default async function DashboardPage() {
  const user = await getSessionAndEnsureAuthenticated();

  return (
    <div>
      <Sidebar />
      <MobileNav />
      <div className="flex-1 md:ml-[250px] mx-5">
        {/* <h1 className="text-2xl font-bold mb-4">Dashboard</h1> */}
        <MonthlyIncomeExpensesChart />
      </div>
    </div>
  );
}
