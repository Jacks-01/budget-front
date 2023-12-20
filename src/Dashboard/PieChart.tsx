import React from "react";
import { ResponsivePie } from "@nivo/pie";

interface props {
  data: object[];
}

const PieChart: React.FC<props> = ({data}) => {
  return (
    <div style={{height: "400px"}}>
      <ResponsivePie
        data={data}
        margin={{top: 40, right: 80, bottom: 80, left: 80}}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{scheme: "nivo"}}
        borderWidth={1}
        borderColor={{from: "color", modifiers: [["darker", 0.2]]}}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#333333"
        animate
      />
    </div>
  );
};
export default PieChart;
