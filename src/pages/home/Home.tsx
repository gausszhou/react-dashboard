import ChartBox from '../../components/chartBox/ChartBox';
import TopBox from '../../components/topBox/TopBox';
import { chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className='box box1'>
        <TopBox></TopBox>
      </div>
      <div className='box box2'>
        <ChartBox item={chartBoxUser}></ChartBox>
      </div>
      <div className='box box3'><ChartBox item={chartBoxProduct}></ChartBox></div>
      <div className='box box4'>Box4</div>
      <div className='box box5'><ChartBox item={chartBoxRevenue}></ChartBox></div>
      <div className="box box6"><ChartBox item={chartBoxConversion}></ChartBox></div>
      <div className="box box7">Box7</div>
      <div className="box box8">Box8</div>
      <div className="box box9">Bo9</div>
    </div>
  )
}

export default Home