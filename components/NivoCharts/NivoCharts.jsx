import dynamic from "next/dynamic";

const NivoLineChart = dynamic(() => import("./NivoLineChart"), {
  ssr: false,
});

const NivoCharts = ({ data }) => {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2>Nivo </h2>
        <div style={{ marginLeft: "1em" }} />
        <a href="https://nivo.rocks/line/"> docs</a>
      </div>

      <div style={{ height: 300 }}>
        <NivoLineChart data={data} />
      </div>
    </div>
  );
};

export default NivoCharts;
