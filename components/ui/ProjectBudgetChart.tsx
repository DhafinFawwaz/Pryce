"use client";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Project {
  name: string;
  usedBudget: number;
  totalBudget: number;
}

interface ProjectBudgetChartProps {
  projects: Project[];
}

const ProjectBudgetChart: React.FC<ProjectBudgetChartProps> = ({ projects }) => {
  const data = {
    labels: projects.map(project => project.name),
    datasets: [
      {
        label: 'Used Budget',
        data: projects.map(project => project.usedBudget),
        backgroundColor: '#988bee',
      },
      {
        label: 'Unused Budget',
        data: projects.map(project => project.totalBudget - project.usedBudget),
        backgroundColor: '#d0d5e8',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
      },
      x: {
        stacked: true,
      },
    },  
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Project Budget Usage',
      },
    },
  };

  return (
    <div className="flex flex-col p-4 bg-white rounded-lg shadow-md w-full md:w-1/2 mt-2">
      <Bar data={data} options={options} />
    </div>
  );
};

export default ProjectBudgetChart;
