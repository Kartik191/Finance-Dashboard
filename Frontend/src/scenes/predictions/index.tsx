import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";
import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useMemo, useState } from "react";
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// 🔁 Replace this array with your actual prediction data
const customForecastData = [
  { month: "Jan", predictedRevenue: 1798 },
  { month: "Feb", predictedRevenue: 5341 },
  { month: "Mar", predictedRevenue: 9255 },
  { month: "Apr", predictedRevenue: 13184 },
  { month: "May", predictedRevenue: 17112 },
  { month: "Jun", predictedRevenue: 21041 },
];

const Predictions = () => {
  const { palette } = useTheme();
  const [showChart, setShowChart] = useState(true);

  const formattedData = useMemo(() => {
    return customForecastData.map((item) => ({
      name: item.month,
      "Predicted Revenue": item.predictedRevenue,
    }));
  }, []);

  return (
    <DashboardBox width="100%" height="100%" p="1rem" overflow="hidden">
      <FlexBetween m="1rem 2.5rem" gap="1rem">
        <Box>
          <Typography variant="h3">Predicted Revenue</Typography>
          <Typography variant="h6">
            Displaying revenue predicted by your custom model.
          </Typography>
        </Box>
        <Button
          onClick={() => setShowChart((prev) => !prev)}
          sx={{
            color: palette.grey[900],
            backgroundColor: palette.grey[700],
            boxShadow: "0.1rem 0.1rem 0.1rem 0.1rem rgba(0,0,0,.4)",
          }}
        >
          {showChart ? "Hide Chart" : "Show Chart"}
        </Button>
      </FlexBetween>

      {showChart && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={formattedData}
            margin={{
              top: 20,
              right: 75,
              left: 20,
              bottom: 80,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke={palette.grey[800]} />
            <XAxis
              dataKey="name"
              tickLine={false}
              style={{ fontSize: "10px" }}
            >
              <Label value="Month" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis
              domain={["auto", "auto"]}
              axisLine={{ strokeWidth: "0" }}
              style={{ fontSize: "10px" }}
              tickFormatter={(v) => `$${v}`}
            >
              <Label
                value="Revenue in USD"
                angle={-90}
                offset={-5}
                position="insideLeft"
              />
            </YAxis>
            <Tooltip />
            <Legend verticalAlign="top" />
            <Line
              strokeDasharray="5 5"
              type="monotone"
              dataKey="Predicted Revenue"
              stroke={palette.secondary[500]}
              dot={{ strokeWidth: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </DashboardBox>
  );
};

export default Predictions;
