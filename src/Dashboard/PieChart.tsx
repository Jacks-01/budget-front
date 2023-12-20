import React from "react";
import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

interface props {
  data: object[];
}

const PieChart: React.FC<props> = ({data}) => {
  return (
    <div style={{height: "800px"}}>
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
