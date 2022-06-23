import React from "react";
import "./recharts.scss";
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function Recharts({data}) {
    return (
        <div className="responsiveContainer">
            <ResponsiveContainer >
                <AreaChart data={data}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="week" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#008eff" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#008eff" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="month" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="rgb(63, 81, 181)" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="rgb(63, 81, 181)" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="year" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="4 4" />
                    <Tooltip />
                    <Area type="monotone" dataKey="last month" stroke="rgb(63, 81, 181)" fillOpacity={1} fill="url(#month)" />
                    <Area type="monotone" dataKey="last week" stroke="#008eff" fillOpacity={1} fill="url(#week)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Recharts;
