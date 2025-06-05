
import DashboardBox from "../component/DashboardBox"

type Props = {};
const Row2 = (props: Props) => {
    return(
        <>
            <DashboardBox gridArea="e"></DashboardBox>
            <DashboardBox gridArea="f"></DashboardBox>
            <DashboardBox gridArea="g"></DashboardBox>
        </>
    )
}

export default Row2