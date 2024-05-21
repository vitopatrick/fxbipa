"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useFetchAllCoin } from "../../hooks/useFetchAllCoin";
import { useContext } from "react";
import Spinner from "../loaders/Spinner";
import { formatCurrency } from "../../utils/formatCurrency";
import { ChartContext } from "@/context/ChartContext";

const Chart = () => {
  const { coin: selected, setCoin }: any = useContext(ChartContext);

  const { coin, loading } = useFetchAllCoin(selected, 30);

  return (
    <div className="p-4 m-4 bg-sideBar text-white font-body rounded flex-1 items-stretch">
      {/* selector */}
      <div className="mb-8 flex items-center justify-between">
        <div className="bg-stone-900 py-1 px-2 rounded border border-main">
          <select
            className="bg-stone-900 outline-none text-sm font-body"
            value={selected}
            onChange={(e) => setCoin(e.target.value)}
          >
            <option value="bitcoin">BTC/USD</option>
            <option value="tether">USDT</option>
            <option value="ethereum">ETH/USD</option>
            <option value="solana">SOL/USD</option>
            <option value="tron">TRX/USD</option>
          </select>
        </div>
      </div>
      {/* chart */}
      <div className="h-[300px] w-full">
        {loading && <Spinner />}
        {!loading && (
          <ResponsiveContainer height={"100%"} width="100%">
            <AreaChart data={coin}>
              <defs>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3179ff" stopOpacity={0.7} />
                  <stop offset="95%" stopColor="#3179ff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" tickCount={4} />
              <YAxis
                dataKey="price"
                axisLine={false}
                interval="preserveStartEnd"
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#fff"
                strokeWidth={3}
                fill="url(#colorPv)"
              />
              <CartesianGrid vertical={false} opacity={0.4} />
              <Tooltip content={<CustomTooltip />} />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip text-white bg-stone-900 font-main p-2 rounded">
        <p className="label">on {label}</p>
        <p className="desc font-bold">{`Price was ${formatCurrency(
          payload[0].value
        )}`}</p>
      </div>
    );
  }

  return null;
};

export default Chart;
