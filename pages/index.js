import NivoCharts from "../components/NivoCharts";
import styles from "../styles/Home.module.css";

const ReChartCharts = dynamic(() => import("../components/ReChartCharts"), {
  ssr: false,
});

import privateData from "../constants/getDiagnosisResult.json";
import dynamic from "next/dynamic";

export default function Home() {
  const chartData = privateData.RupleResults;

  const data = JSON.parse(chartData[0]);

  return (
    <div className={styles.container}>
      <NivoCharts data={data.chartData[0]} />
      <ReChartCharts data={data.chartData[0]} />
    </div>
  );
}
