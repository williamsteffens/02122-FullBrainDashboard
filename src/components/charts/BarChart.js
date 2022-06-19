import React from 'react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar, Cell } from 'recharts';

const HorizontalBarChart = ({data}) => {

    const barColors = ["#9966cc", "#00FA9A", "#FF1493", "#FFD700"]
    
    const CustomizedLabel = (props) => {
        const {x, y, fill, value, width, height} = props;
        
        const fireOffset = value.toString().length < 5;
        const offset = fireOffset ? - 35 : 5;
        
        return (
        <text x={x + width -offset} y={y + height - 50} fill={fireOffset ? "#285A64" :"#fff"} textAnchor="end">
            {value}
        </text>
        );
    }

    return (
        <div className="milestone-horizontal-bar">
    	{data ? <BarChart 
            data={data}
            layout="vertical" barCategoryGap={1}
            margin={{ top: 0, right: 50, left: 0, bottom: 0 }}
            width={450} 
            height={350}
        >
            <XAxis type="number" orientation="top" stroke="#285A64" />
            <YAxis 
                type="category" 
                width={150} 
                padding={{ left: 20 }} 
                dataKey="name" 
                style={{
                    fontSize: '0.5rem',
            }}/>
            <Bar 
            dataKey="value" 
            label={<CustomizedLabel />}
            >
            {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                        ))
            }    
            </Bar>
            </BarChart> : ''}
    </div>
    )
}
  


export default HorizontalBarChart;
