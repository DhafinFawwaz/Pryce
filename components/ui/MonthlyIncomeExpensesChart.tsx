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
import PeopleCard from './PeopleCard';
import ProjectBudgetChart from './ProjectBudgetChart';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

interface TransactionData {
  amount: number;
  type: 'income' | 'expense';
  date: string;
  category: string;
  user: string;
}

interface CategoryData {
  category: string;
  amount: number;
}

const MonthlyIncomeExpensesChart = () => {
  const [period, setPeriod] = useState('12');
  const [incomeCategoryPeriod, setIncomeCategoryPeriod] = useState('12');
  const [expensesCategoryPeriod, setExpensesCategoryPeriod] = useState('12');
  const [showIncomeLegend, setShowIncomeLegend] = useState(true);
  const [showExpensesLegend, setShowExpensesLegend] = useState(true);

  const allLabels = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const transactions: TransactionData[] = [
    { amount: 7000, type: 'income', date: '2024-01-15', category: 'Salary', user: 'User A' },
    { amount: 1500, type: 'income', date: '2024-01-20', category: 'Investments', user: 'User A' },
    { amount: 1000, type: 'income', date: '2024-01-25', category: 'Freelancing', user: 'User B' },
    { amount: 2000, type: 'expense', date: '2024-01-05', category: 'Groceries', user: 'User A' },
    { amount: 1500, type: 'expense', date: '2024-01-10', category: 'Rent', user: 'User A' },
    { amount: 500, type: 'expense', date: '2024-01-15', category: 'Utilities', user: 'User B' },
    { amount: 800, type: 'expense', date: '2024-01-18', category: 'Entertainment', user: 'User A' },
    { amount: 300, type: 'expense', date: '2024-01-20', category: 'Transportation', user: 'User B' },
    { amount: 8000, type: 'income', date: '2024-02-01', category: 'Salary', user: 'User A' },
    { amount: 2500, type: 'income', date: '2024-02-05', category: 'Freelancing', user: 'User B' },
    { amount: 2000, type: 'expense', date: '2024-02-02', category: 'Groceries', user: 'User A' },
    { amount: 1200, type: 'expense', date: '2024-02-10', category: 'Rent', user: 'User A' },
    { amount: 4000, type: 'income', date: '2024-03-01', category: 'Investments', user: 'User B' },
    { amount: 1500, type: 'expense', date: '2024-03-05', category: 'Utilities', user: 'User A' },
    { amount: 5000, type: 'income', date: '2024-03-10', category: 'Salary', user: 'User A' },
    { amount: 700, type: 'expense', date: '2024-03-15', category: 'Transportation', user: 'User B' },
    { amount: 3500, type: 'income', date: '2024-04-01', category: 'Freelancing', user: 'User A' },
    { amount: 600, type: 'expense', date: '2024-04-07', category: 'Entertainment', user: 'User A' },
    { amount: 4500, type: 'income', date: '2024-04-15', category: 'Salary', user: 'User B' },
    { amount: 3000, type: 'expense', date: '2024-04-20', category: 'Groceries', user: 'User A' },
    { amount: 9000, type: 'income', date: '2024-05-01', category: 'Salary', user: 'User A' },
    { amount: 400, type: 'expense', date: '2024-05-05', category: 'Utilities', user: 'User B' },
    { amount: 2000, type: 'income', date: '2024-05-10', category: 'Investments', user: 'User A' },
    { amount: 800, type: 'expense', date: '2024-05-15', category: 'Entertainment', user: 'User B' },
    { amount: 5000, type: 'income', date: '2024-06-01', category: 'Freelancing', user: 'User A' },
    { amount: 1500, type: 'expense', date: '2024-06-05', category: 'Transportation', user: 'User A' },
    { amount: 3000, type: 'income', date: '2024-06-10', category: 'Investments', user: 'User B' },
    { amount: 2000, type: 'expense', date: '2024-06-15', category: 'Rent', user: 'User A' },
    { amount: 6000, type: 'income', date: '2024-07-01', category: 'Salary', user: 'User A' },
    { amount: 700, type: 'expense', date: '2024-07-05', category: 'Groceries', user: 'User B' },
    { amount: 4500, type: 'income', date: '2024-07-10', category: 'Freelancing', user: 'User A' },
    { amount: 900, type: 'expense', date: '2024-07-15', category: 'Utilities', user: 'User A' },
    { amount: 5500, type: 'income', date: '2024-08-01', category: 'Salary', user: 'User B' },
    { amount: 1500, type: 'expense', date: '2024-08-05', category: 'Entertainment', user: 'User A' },
    { amount: 3000, type: 'income', date: '2024-08-10', category: 'Investments', user: 'User A' },
    { amount: 1200, type: 'expense', date: '2024-08-15', category: 'Transportation', user: 'User B' },
    { amount: 4000, type: 'income', date: '2024-09-01', category: 'Freelancing', user: 'User A' },
    { amount: 1800, type: 'expense', date: '2024-09-05', category: 'Groceries', user: 'User A' },
    { amount: 6500, type: 'income', date: '2024-09-10', category: 'Salary', user: 'User B' },
    { amount: 2000, type: 'expense', date: '2024-09-15', category: 'Rent', user: 'User A' },
    { amount: 3000, type: 'income', date: '2024-10-01', category: 'Freelancing', user: 'User A' },
    { amount: 1500, type: 'expense', date: '2024-10-05', category: 'Utilities', user: 'User B' },
  ];

  const getChartData = () => {
    let labels: string[] = [];
    let income: number[] = [];
    let expenses: number[] = [];

    const currentMonthIndex = new Date().getMonth();
    
    switch (period) {
      case '1':
        labels = [allLabels[currentMonthIndex]];
        break;
      case '3':
        labels = allLabels.slice(Math.max(0, currentMonthIndex - 2), currentMonthIndex + 1);
        break;
      case '6':
        labels = allLabels.slice(Math.max(0, currentMonthIndex - 5), currentMonthIndex + 1);
        break;
      case '12':
      default:
        labels = allLabels;
    }

    const groupedData = transactions.reduce((acc, transaction) => {
      const transactionDate = new Date(transaction.date);
      const monthIndex = transactionDate.getMonth();

      if (monthIndex >= currentMonthIndex - 11 && monthIndex <= currentMonthIndex) {
        if (!acc[monthIndex]) {
          acc[monthIndex] = { income: 0, expenses: 0 };
        }
        if (transaction.type === 'income') {
          acc[monthIndex].income += transaction.amount;
        } else if (transaction.type === 'expense') {
          acc[monthIndex].expenses += transaction.amount;
        }
      }
      return acc;
    }, {} as { [key: number]: { income: number; expenses: number } });

    income = labels.map((label) => {
      const monthIndex = allLabels.indexOf(label);
      return groupedData[monthIndex]?.income || 0;
    });
    
    expenses = labels.map((label) => {
      const monthIndex = allLabels.indexOf(label);
      return groupedData[monthIndex]?.expenses || 0;
    });

    return { labels, income, expenses };
};

  const getPieChartDataI = (categoryData: TransactionData[]): { labels: string[], data: number[] } => {
    const labels: string[] = [];
    const data: number[] = [];

    categoryData = transactions.filter(transaction => transaction.type === 'income');
    const categoryGroups = categoryData.reduce((acc, entry) => {
      if (!acc[entry.category]) {
        acc[entry.category] = 0;
      }
      acc[entry.category] += entry.amount;
      return acc;
    }, {} as { [key: string]: number });

    for (const [category, amount] of Object.entries(categoryGroups)) {
      labels.push(category);
      data.push(amount);
    }

    return { labels, data };
  };

  const getPieChartDataE = (categoryData: TransactionData[]): { labels: string[], data: number[] } => {
    const labels: string[] = [];
    const data: number[] = [];

    categoryData = transactions.filter(transaction => transaction.type === 'expense');
    const categoryGroups = categoryData.reduce((acc, entry) => {
      if (!acc[entry.category]) {
        acc[entry.category] = 0;
      }
      acc[entry.category] += entry.amount;
      return acc;
    }, {} as { [key: string]: number });

    for (const [category, amount] of Object.entries(categoryGroups)) {
      labels.push(category);
      data.push(amount);
    }

    return { labels, data };
  };

  const { labels, income, expenses } = getChartData();
  const { labels: incomePieLabels, data: incomePieData } = getPieChartDataI(transactions);
  const { labels: expensesPieLabels, data: expensesPieData } = getPieChartDataE(transactions);

  const data = {
    labels,
    datasets: [
      {
        label: 'Income',
        data: income,
        backgroundColor: '#8dce97',
      },
      {
        label: 'Expenses',
        data: expenses,
        backgroundColor: '#ffb50a',
      },
    ],
  };

  const incomeColors = [
    'rgba(255, 99, 132, 0.6)',
    'rgba(54, 162, 235, 0.6)', 
    'rgba(255, 205, 86, 0.6)',   
    'rgba(75, 192, 192, 0.6)',
    'rgba(153, 102, 255, 0.6)',  
    'rgba(255, 159, 64, 0.6)',   
    'rgba(255, 99, 71, 0.6)',   
    'rgba(100, 149, 237, 0.6)',
    'rgba(34, 193, 195, 0.6)', 
    'rgba(255, 20, 147, 0.6)',  
  ];
  
  const expensesColors = [
    'rgba(255, 165, 0, 0.6)', 
    'rgba(75, 0, 130, 0.6)', 
    'rgba(0, 255, 127, 0.6)',  
    'rgba(240, 128, 128, 0.6)', 
    'rgba(0, 191, 255, 0.6)',     
    'rgba(255, 69, 0, 0.6)',      
    'rgba(148, 0, 211, 0.6)',   
    'rgba(255, 215, 0, 0.6)',      
    'rgba(0, 255, 255, 0.6)',   
    'rgba(255, 20, 147, 0.6)', 
  ];

  const incomePieDataConfig = {
    labels: incomePieLabels,
    datasets: [
      {
        label: 'Income by Category',
        data: incomePieData,
        backgroundColor: incomeColors,
      },
    ],
  };

  const expensesPieDataConfig = {
    labels: expensesPieLabels,
    datasets: [
      {
        label: 'Expenses by Category',
        data: expensesPieData,
        backgroundColor: expensesColors,
      },
    ],
  };


  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
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
      // title: {
      //   display: true,
      //   text: 'Income and Expenses by Category',
      // },
    },
  };

  const projects = [
    { name: 'Project A', usedBudget: 3000, totalBudget: 5000 },
    { name: 'Project B', usedBudget: 2000, totalBudget: 4000 },
    { name: 'Project C', usedBudget: 4500, totalBudget: 7000 },
    { name: 'Project E', usedBudget: 3700, totalBudget: 9000 },
    { name: 'Project F', usedBudget: 1000, totalBudget: 8000 },
    { name: 'Project G', usedBudget: 9000, totalBudget: 12000 },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:space-x-4 mt-2">
        <div className="flex flex-col p-2 bg-white rounded-lg shadow-md w-full md:w-1/2">
          <div className="flex justify-between mb-2">
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
          <div className="h-full">
            <Bar data={data} options={options} />
          </div>
        </div>
        <ProjectBudgetChart projects={projects}></ProjectBudgetChart>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4 mt-2">
        <div className="flex flex-col p-2 bg-white rounded-lg shadow-md w-full md:w-1/3 mt-2">
          <h2 className="text-lg font-semibold">Income by Category</h2>
          {/* <DropdownMenu>
            <DropdownMenuTrigger className="text-blue-600 mb-1">
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
          </DropdownMenu> */}
          {/* <button onClick={() => setShowIncomeLegend(!showIncomeLegend)} className="mb-2 w-8 h-8 bg-transparent border border-gray-300 rounded shadow-none flex items-center justify-center">☰</button> */}
          <div className="h-48">
            <Pie data={incomePieDataConfig} options={{ ...pieOptions, plugins: { ...pieOptions.plugins, legend: { display: showIncomeLegend } } }} />
          </div>
        </div>

        <div className="flex flex-col p-2 bg-white rounded-lg shadow-md w-full md:w-1/3 mt-2">
          <h2 className="text-lg font-semibold">Expenses by Category</h2>
          {/* <DropdownMenu>
            <DropdownMenuTrigger className="text-blue-600 mb-1">
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
          </DropdownMenu> */}
          {/* <button onClick={() => setShowExpensesLegend(!showExpensesLegend)} className="mb-2 w-8 h-8 bg-transparent border border-gray-300 rounded shadow-none flex items-center justify-center">☰</button> */}
          <div className="h-48">
            <Pie data={expensesPieDataConfig} options={{ ...pieOptions, plugins: { ...pieOptions.plugins, legend: { display: showExpensesLegend } } }} />
          </div>
        </div>
        <PeopleCard></PeopleCard>
      </div>
    </div>
  );
};

export default MonthlyIncomeExpensesChart;