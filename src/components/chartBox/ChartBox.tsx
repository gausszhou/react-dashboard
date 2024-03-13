import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import './chartbox.scss'
import { Link } from 'react-router-dom'

type Item = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: Object[]
}

type Props = {
  item: Item
}

const ChartBox = (props: Props) => {
  const { item } = props;
  return (
    <div className='chartBox'>
      <div className="boxInfo">
        <div className="title">
          <img src={item.icon} alt="" />
          <span>{item.title}</span>
        </div>
        <h1>{item.number}</h1>
        <Link to="/">View all</Link>
      </div>
      <div className='chartInfo'>
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={item.chartData}>
              <Tooltip
                contentStyle={{
                  background: 'transparent',
                  border: 'none',
                }}
                labelStyle={{
                  display: 'none'
                }}
                position={{ x: 10, y: 50 }}
              />
              <Line
                type="monotone"
                dataKey={item.dataKey}
                stroke={item.color}
                strokeWidth={2}
                dot={false}

              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div className="percentage"
            style={{
              color: item.percentage < 0 ? 'tomato' : 'limegreen'
            }}
          >{item.percentage}%</div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  )
}

export default ChartBox