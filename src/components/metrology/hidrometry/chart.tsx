import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {},
  scales: {
    y: {
      min: 1,
      max: 4,
    },
    x: {
      ticks: {
        display: false,
        autoSkip: false,
        maxRotation: 0,
        major: {
          enabled: true,
        },
        maxTicksLimit: 10,
      },
    },
  },
};

export type TLabels = string[];

export type TDatasets = {
  id: string;
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
};

type TChartProps = {
  labels: TLabels;
  datasets: TDatasets[];
};

export function Chart({ labels, datasets }: TChartProps) {
  return <Line options={options} data={{ labels, datasets }} />;
}
