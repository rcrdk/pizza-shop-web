import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const data = [
	{
		date: '10/12',
		revenue: 1200,
	},
	{
		date: '11/12',
		revenue: 2000,
	},
	{
		date: '12/12',
		revenue: 900,
	},
	{
		date: '13/12',
		revenue: 160,
	},
	{
		date: '14/12',
		revenue: 640,
	},
	{
		date: '15/12',
		revenue: 1601,
	},
	{
		date: '16/12',
		revenue: 10,
	},
]

export function RevenueChart() {
	return (
		<Card className="col-span-6">
			<CardHeader className="flex-row items-center justify-between pb-8">
				<div className="space-y-1">
					<CardTitle className="text-base font-medium">
						Receita no período
					</CardTitle>
					<CardDescription>Receita diária no período</CardDescription>
				</div>
			</CardHeader>

			<CardContent>
				<ResponsiveContainer width="100%" height={240}>
					<LineChart data={data} style={{ fontSize: 12 }}>
						<YAxis
							stroke="#888"
							width={80}
							axisLine={false}
							tickLine={false}
							tickFormatter={(value: number) =>
								value.toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL',
								})
							}
						/>

						<XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />

						<CartesianGrid vertical={false} className="stroke-muted" />

						<Line
							type="linear"
							strokeWidth={2}
							dataKey="revenue"
							stroke={colors.violet[500]}
						/>
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	)
}
