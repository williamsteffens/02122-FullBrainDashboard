import React from 'react';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from 'recharts';

const BarChartInList = ({data}) => {
    const transformedData = [{...data}]
    const dummy_data_in_list = [
        {name: 'progress', value_complete: 70, value_remaining: 30}
    ]

    const CustomizedLabel = (props) => {
        const {x, y, fill, value, width, height} = props;
        
        const fireOffset = value.toString().length < 5;
        const offset = fireOffset ? -30 : 5;
        
        return (
        <text x={x + width -offset} y={y + height - 50} fill={fireOffset ? "#285A64" :"#fff"} textAnchor="end">
            {value}
        </text>
        );
    }

    return (
        <div className="milestone-horizontal-bar-in-list-item">
    	{data ? <BarChart 
            data={transformedData}
            layout="vertical" barCategoryGap={1}
            margin={{ top: 0, right: 0, bottom: 0 }}
            style={{ marginLeft: '-9.4rem'}}
            width={500} 
            height={20}
        >
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
                    fill="#5F9EA0"
                    stackId="a"
                />
            </BarChart> :''}
    </div>
    )
}
  


export default BarChartInList;
