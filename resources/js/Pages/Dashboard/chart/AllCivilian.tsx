import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/Components/ui/chart";
const chartData = [
    { browser: "chrome", visitors: 1000, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "terdata",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Belum terdata",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export default function AllCivilian() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
    }, []);

    return (
        <>
            <div className="text-xl font-semibold text-center mt-3">
                Total Data Masuk
            </div>
            <ChartContainer
                config={chartConfig}
                className=" mx-auto aspect-square max-h-[90px]"
            >
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={chartData}
                        dataKey="visitors"
                        nameKey="browser"
                        innerRadius={25}
                        strokeWidth={5}
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (
                                    viewBox &&
                                    "cx" in viewBox &&
                                    "cy" in viewBox
                                ) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-foreground font-bold"
                                            >
                                                {75} %
                                            </tspan>
                                        </text>
                                    );
                                }
                            }}
                        />
                    </Pie>
                </PieChart>
            </ChartContainer>
        </>
    );
}
