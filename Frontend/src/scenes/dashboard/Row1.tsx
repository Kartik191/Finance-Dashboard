
import { useGetKpisQuery } from "@/state/api";
import DashboardBox from "../../components/DashboardBox"

type Props = {};
const Row1 = (props: Props) => {
    const { data}  = useGetKpisQuery();
    return(
        <>

        <DashboardBox gridArea="a"></DashboardBox>
        <DashboardBox gridArea="b"></DashboardBox>
        <DashboardBox gridArea="c"></DashboardBox>
        <DashboardBox gridArea="d"></DashboardBox>
        </>
    )
}

export default Row1