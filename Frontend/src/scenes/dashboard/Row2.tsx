
import { useGetKpisQuery, useGetProductsQuery } from "@/state/api";
import DashboardBox from "../../components/DashboardBox"
import { LineChart, Line, XAxis, YAxis,  CartesianGrid, Legend, Tooltip, ResponsiveContainer, ScatterChart, Scatter, ZAxis} from "recharts";
import BoxHeader from "@/components/BoxHeader";
import { useTheme } from "@mui/material";
import { useMemo } from "react";
// import { useMemo } from "react";





type Props = {};
const Row2 = (props: Props) => {
    const {palette} = useTheme();
    const { data: operationalData } = useGetKpisQuery()
    const { data: productData } = useGetProductsQuery();
    // console.log("showing data");
    // console.log(operationalData && operationalData[0].monthlyData);

    
    const operationalExpenses = useMemo(() => {
      return(
        operationalData &&
        operationalData[0].monthlyData.map(({month, operationalExpenses, nonOperationalExpenses}) => {
            return {
              name: month.substring(0, 3),
              "Operational Expenses": Number(operationalExpenses),
              "Non Operational Expenses": Number(nonOperationalExpenses)
            }
          }
        )
      );
    }, [operationalData])

    const productExpenses = useMemo(() => {
      return(
        productData &&
        productData.map(({_id, price, expense}) => {
          return {
            id: _id,
            price: price,
            expense: expense
          };
        }) 
      );
    }, [productData])
    return(
        <>
            <DashboardBox gridArea="d">
        <BoxHeader
          title="Operational vs Non-Operational Expenses"
          sidetext="+4%"
        />
        <ResponsiveContainer width="100%" height="100%">
          <LineChart

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
              style={{ fontSize: "10px" }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              tickLine={false}
              axisLine={false}
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
              dataKey="Non Operational Expenses"
              stroke={palette.tertiary[500]}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="Operational Expenses"
              stroke={palette.primary.main}
            />
          </LineChart>
        </ResponsiveContainer>
      </DashboardBox>
            <DashboardBox gridArea="f">
        <BoxHeader 
        title="Product Prices vs Expenses" 
        sidetext="+4%" />
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart
            margin={{
              top: 20,
              right: 25,
              bottom: 40,
              left: -10,
            }}
          >
            <CartesianGrid stroke={palette.grey[800]} />
            <XAxis
              type="number"
              name="price"
              dataKey="price"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <YAxis
              type="number"
              name="expense"
              dataKey="expense"
              axisLine={false}
              tickLine={false}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            />
            <ZAxis type="number" range={[20]} />
            <Tooltip formatter={(v) => `$${v}`} />
            <Scatter
              name="Product Expense Ratio"
              data={productData}
              fill={palette.tertiary[500]}
            />
          </ScatterChart>
        </ResponsiveContainer>
      </DashboardBox>
        </>
    )
}

export default Row2