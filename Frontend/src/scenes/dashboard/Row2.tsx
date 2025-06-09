
import { useGetProductsQuery } from "@/state/api";
import DashboardBox from "../../components/DashboardBox"

type Props = {};
const Row2 = (props: Props) => {
    const { data } = useGetProductsQuery();
    console.log("got data");
    console.log(data);
    return(
        <>
            <DashboardBox gridArea="d"></DashboardBox>
            {/* <DashboardBox gridArea="e"></DashboardBox> */}
            <DashboardBox gridArea="f"></DashboardBox>
            {/* <DashboardBox gridArea="g"></DashboardBox> */}
        </>
    )
}

export default Row2