
import { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } from "@/state/api";
import DashboardBox from "../../components/DashboardBox"
import BoxHeader from "@/components/BoxHeader";
import { Box } from "@mui/material";
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import {useTheme} from "@mui/material";
import { useMemo } from "react";
/*
h: Recent Orders
s: expense breakdwon by category
*/
// get KPI data-







const Row3 = () => {
    const { palette } = useTheme();
    const {data: transactionData } = useGetTransactionsQuery();
    const {data: kpiData } = useGetKpisQuery();

    const pieChartData = useMemo(() => {
        if (kpiData) {
            const totalExpenses = kpiData[0].totalExpenses;
            return Object.entries(kpiData[0].expensesByCategory).map(
                ([key, value]) => {
                    return [
                        {
                            name: key, 
                            value: value
                        },
                        {
                            name: `${key} of Total`,
                            value: totalExpenses-value
                        }
                    ]
                }
            )
            
        }
        }, [kpiData])

        const transactionColumns = [
    {
      field: "_id",
      headerName: "id",
      flex: 1,
    },
    {
      field: "buyer",
      headerName: "Buyer",
      flex: 0.67,
    },
    {
      field: "amount",
      headerName: "Amount",
      flex: 0.35,
      renderCell: (params: GridCellParams) => `$${params.value}`,
    },
    {
      field: "productIds",
      headerName: "Count",
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
    },
  ];

    
        return(
        <>
            <DashboardBox gridArea="h">
                <BoxHeader
          title="Recent Orders"
          sidetext={`${transactionData?.length} latest transactions`}
        />
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={transactionData || []}
            columns={transactionColumns}
          />
        </Box>

            </DashboardBox>


            
            <DashboardBox gridArea="i">y
                <BoxHeader title="Expense Breakdown by category" sidetext="+4%">
                <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem"  textAlign="center">
                </FlexBetween>
                
                </BoxHeader>

            </DashboardBox>
        </>
    )
}

export default Row3