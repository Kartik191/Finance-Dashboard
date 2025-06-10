
import { useGetProductsQuery } from "@/state/api";
import DashboardBox from "../../components/DashboardBox"
import { LineChart, Line, XAxis, YAxis,  CartesianGrid, Legend, Tooltip, ResponsiveContainer} from "recharts";
import BoxHeader from "@/components/BoxHeader";
import { useTheme } from "@mui/material";
// import { useMemo } from "react";





type Props = {};
const Row2 = (props: Props) => {
    const {palette} = useTheme();
    const { data } = useGetProductsQuery();
    console.log("got data");
    console.log(data);
    const operationalExpenses = null;
    
    // const operationalExpenses = useMemo(() => {
    //     data && 
    // })
    return(
        <>
            <DashboardBox gridArea="d">
        {/* <BoxHeader
          title="Operational vs Non-Operational Expenses"
          sidetext="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={400}
            data={operationalExpenses}
            margin={{
              top: 20,
              right: 0,
              left: -10,
              bottom: 55,
            }}
          >
            <CartesianGrid vertical={false} stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickLine={false}
              axisLine={false}
              dataKey="Non-Operational-Expenses"
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
              dataKey="Operational-Expenses"
              style={{ fontSize: "10px" }}
            />
            <Tooltip />
            
            <Legend
              height={20}
              wrapperStyle={{
                margin: "0 0 10px 0",
              }}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="profit"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer> */}
      </DashboardBox>
            <DashboardBox gridArea="f"></DashboardBox>
        </>
    )
}

export default Row2