"use client";
import React from "react";
import Layout from "../components/layout";
import { Typography } from "@mui/material";

function Dashboard() {
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1">
            <div className="mx-auto bg-sky-50 rounded-xl shadow-lg">
              <div className="flex justify-between">
                <div className="ml-5 mt-5">Icon</div>
                <div className="pl-7 py-5">Progress Bar</div>
              </div>
              <div>
                <div className="text-blue-600">Total Users</div>
                <div className="text-3xl font-semibold">127</div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Dashboard;
