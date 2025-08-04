"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A radar chart"

const chartData = [
  { metric: "Milestones", value: 85 },
  { metric: "Timeline", value: 90 },
  { metric: "Creative", value: 78 },
  { metric: "Strategy", value: 92 },
  { metric: "Audience", value: 88 },
  { metric: "Research", value: 82 },
]

const chartConfig = {
  value: {
    label: "Strategy Score",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartRadarDefault() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg p-8">
        <ChartContainer
          config={chartConfig}
          className="mx-auto w-full h-full min-h-[350px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="metric" />
            <PolarGrid />
            <Radar
              dataKey="value"
              fill="#dc2626"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </div>
    </div>
  )
}
