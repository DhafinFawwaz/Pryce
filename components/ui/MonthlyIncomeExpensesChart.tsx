"use client";
import { useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

interface CategoryData {
  category: string;
  amount: number;
}

const MonthlyIncomeExpensesChart = () => {
  const [period, setPeriod] = useState('12');
  const [incomeCategoryPeriod, setIncomeCategoryPeriod] = useState('12');
  const [expensesCategoryPeriod, setExpensesCategoryPeriod] = useState('12');
  const [showIncomeLegend, setShowIncomeLegend] = useState(false);
  const [showExpensesLegend, setShowExpensesLegend] = useState(false);

  const allLabels = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const incomeData = [3000, 2500, 4000, 3500, 4500, 5000, 6000, 5500, 7000, 8000, 7500, 9000];
  const expensesData = [2000, 1500, 3000, 2500, 3500, 4000, 4500, 4000, 5000, 5500, 5000, 6000];

  const getChartData = () => {
    let labels = [];
    let income = [];
    let expenses = [];

    switch (period) {
      case '1':
        labels = [allLabels[11]];
        income = [incomeData[11]];
        expenses = [expensesData[11]];
        break;
      case '3':
        labels = allLabels.slice(9, 12);
        income = incomeData.slice(9, 12);
        expenses = expensesData.slice(9, 12);
        break;
      case '6':
        labels = allLabels.slice(6, 12);
        income = incomeData.slice(6, 12);
        expenses = expensesData.slice(6, 12);
        break;
      case '12':
      default:
        labels = allLabels;
        income = incomeData;
        expenses = expensesData;
    }

    return { labels, income, expenses };
  };

  const getPieChartData = (categoryData: CategoryData[]): { labels: string[], data: number[] } => {
    const labels: string[] = [];
    const data: number[] = [];

    categoryData.forEach((entry) => {
      labels.push(entry.category);
      data.push(entry.amount);
    });

    return { labels, data };
  };

  const incomeCategoryData = [
    { category: 'Salary', amount: 7000 },
    { category: 'Investments', amount: 1500 },
    { category: 'Freelancing', amount: 1000 },
  ];

  const expensesCategoryData = [
    { category: 'Groceries', amount: 2000 },
    { category: 'Rent', amount: 1500 },
    { category: 'Utilities', amount: 500 },
    { category: 'Entertainment', amount: 800 },
    { category: 'Transportation', amount: 300 },
  ];

  const { labels, income, expenses } = getChartData();
  const { labels: incomePieLabels, data: incomePieData } = getPieChartData(incomeCategoryData);
  const { labels: expensesPieLabels, data: expensesPieData } = getPieChartData(expensesCategoryData);

  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: income,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Expenses',
        data: expenses,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const incomePieDataConfig = {
    labels: incomePieLabels,
    datasets: [
      {
        label: 'Income by Category',
        data: incomePieData,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
        ],
      },
    ],
  };

  const expensesPieDataConfig = {
    labels: expensesPieLabels,
    datasets: [
      {
        label: 'Expenses by Category',
        data: expensesPieData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Income and Expenses',
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Income and Expenses by Category',
      },
    },
  };

  return (
    <div>
      <div className="flex flex-col p-4 bg-white rounded-lg shadow-md w-1/2">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">Monthly Income and Expenses</h2>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-blue-600">
              {period} Months
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setPeriod('12')} className={period === '12' ? 'bg-blue-100' : ''}>
                12 Months
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod('6')} className={period === '6' ? 'bg-blue-100' : ''}>
                6 Months
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod('3')} className={period === '3' ? 'bg-blue-100' : ''}>
                3 Months
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setPeriod('1')} className={period === '1' ? 'bg-blue-100' : ''}>
                1 Month
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="h-72">
          <Bar data={data} options={options} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 mt-4">
        <div className="flex flex-col p-4 bg-white rounded-lg shadow-md w-full md:w-1/4 mt-4">
          <h2 className="text-lg font-semibold">Income by Category</h2>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-blue-600 mb-2">
              {incomeCategoryPeriod} Months
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setIncomeCategoryPeriod('12')} className={incomeCategoryPeriod === '12' ? 'bg-blue-100' : ''}>
                12 Months
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIncomeCategoryPeriod('6')} className={incomeCategoryPeriod === '6' ? 'bg-blue-100' : ''}>
                6 Months
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIncomeCategoryPeriod('3')} className={incomeCategoryPeriod === '3' ? 'bg-blue-100' : ''}>
                3 Months
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIncomeCategoryPeriod('1')} className={incomeCategoryPeriod === '1' ? 'bg-blue-100' : ''}>
                1 Month
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button onClick={() => setShowIncomeLegend(!showIncomeLegend)} className="mb-2 w-8 h-8 bg-transparent border border-gray-300 rounded shadow-none flex items-center justify-center">☰</button>
          <div className="h-72">
            <Pie data={incomePieDataConfig} options={{ ...pieOptions, plugins: { ...pieOptions.plugins, legend: { display: showIncomeLegend } } }} />
          </div>
        </div>

        <div className="flex flex-col p-4 bg-white rounded-lg shadow-md w-full md:w-1/4 mt-4">
          <h2 className="text-lg font-semibold">Expenses by Category</h2>
          <DropdownMenu>
            <DropdownMenuTrigger className="text-blue-600 mb-2">
              {expensesCategoryPeriod} Months
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setExpensesCategoryPeriod('12')} className={expensesCategoryPeriod === '12' ? 'bg-blue-100' : ''}>
                12 Months
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setExpensesCategoryPeriod('6')} className={expensesCategoryPeriod === '6' ? 'bg-blue-100' : ''}>
                6 Months
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setExpensesCategoryPeriod('3')} className={expensesCategoryPeriod === '3' ? 'bg-blue-100' : ''}>
                3 Months
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setExpensesCategoryPeriod('1')} className={expensesCategoryPeriod === '1' ? 'bg-blue-100' : ''}>
                1 Month
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button onClick={() => setShowExpensesLegend(!showExpensesLegend)} className="mb-2 w-8 h-8 bg-transparent border border-gray-300 rounded shadow-none flex items-center justify-center">☰</button>
          <div className="h-72">
            <Pie data={expensesPieDataConfig} options={{ ...pieOptions, plugins: { ...pieOptions.plugins, legend: { display: showExpensesLegend } } }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyIncomeExpensesChart;
