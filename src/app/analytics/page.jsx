"use client";
import React from "react";
import Layout from "../components/layout";
import PieChart from "../components/pieChart";
import BarChart from "../components/barChart";

function Analytics() {
  return (
    <div>
      <Layout>
        Analytics
        <BarChart />
        <PieChart />
      </Layout>
    </div>
  );
}

export default Analytics;
