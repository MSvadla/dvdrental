import React from "react";
import Page from "../components/Page";

import { InsightView } from "@gooddata/sdk-ui-ext";
import * as DvdRentalObjects from "../ldm/full";

import { PieChart } from "@gooddata/sdk-ui-charts";
import { DashboardView } from "@gooddata/sdk-ui-ext";

const Home = () => {
    return (
        <Page>
            <InsightView insight={DvdRentalObjects.Insights.RentalsByWeek} />
            <PieChart
                measures={[DvdRentalObjects.RentalCount]}
                viewBy={DvdRentalObjects.CityName}
                config={{
                    colors: ["rgb(195, 49, 73)", "rgb(168, 194, 86)"],
                }}
            />
            <DashboardView dashboard={DvdRentalObjects.Dashboards.Untitled_5} />
        </Page>
    );
};

export default Home;
