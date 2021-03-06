import { useState } from "react";
import { ResponsiveLine } from "@nivo/line";
import { COLORS } from "../../constants/colors";

const NivoLineChart = ({ data }) => {
  const [stacked, setStacked] = useState(true);
  const getCoords = (item) => {
    const itemWDuplicates = item.x.map((xInfo, idx) => {
      const date = new Date(xInfo);

      return { x: date.toDateString(), y: item.y[idx] };
    });
    const uniqueIds = new Set();

    const unique = itemWDuplicates.filter((element) => {
      const isDuplicate = uniqueIds.has(element.x);

      uniqueIds.add(element.x);

      if (!isDuplicate) {
        return true;
      }

      return false;
    });

    return unique;
  };

  const parseData = () => {
    return data.map((item, idx) => {
      return {
        id: `item-${idx + 1}`,
        color: COLORS[0],
        data: getCoords({ x: item.x, y: item.y }),
      };
    });
  };

  const test = parseData();

  return (
    <>
      <div
        onClick={() => {
          setStacked(!stacked);
        }}
      >
        change Stacked
      </div>
      <ResponsiveLine
        data={test}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: stacked,
          reverse: false,
        }}
        markers={[
          {
            axis: "y",
            value: 100,
            lineStyle: { stroke: "#b0413e", strokeWidth: 1 },
            legend: "reference",
            legendPosition: "bottom-left",
          },
        ]}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </>
  );
};

export default NivoLineChart;
