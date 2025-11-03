import './App.css'
import visa from './assets/visa.png';
import balls from './assets/balls.png';
import aexpress from './assets/aexpress.png';
import jcb from './assets/jcb.png';
import { useNavigate } from 'react-router-dom';

export default function Premium() {
    const navigate = useNavigate();

    return (
    <div>
        <div className='premium-div'>
            <h2 className='premium-message'>Premium 개인 요금제로 최고<br/>의 음악 서비스를 경험하세요.</h2>
            <p className='premium-viral'>Spotify 프리미엄에서 끊김없이 음악을 즐겨보세요. 요금은  ₩10,900(부가세 별도)<br/>부터 시작합니다. 언제든지 해지 가능합니다.</p>
            <button className='premium-start-but'> <b>Premium</b> 개인 시작하기 </button>
            <button className='premium-show-but'> 모든 요금제 보기 </button>
        </div>

        <div className='pay-system-div'>
            <h2 className='pay-system-viral'>어떤 상황에도 합리적인 요금제</h2>
            <p className='pay-system-intro'>Premium 요금제를 선택하고 휴대폰, 스피커 및 기타 기기에서 제한없이 광고 없는 음악<br/>
            을 들으세요. 다양한 방법으로 요금을 결제하세요. 언제든지 해지 가능합니다.</p>
            <div className='pay-system-list'>
                <div className='pay-system-method'>
                    <img src={visa} className='pay-system-img'/>
                </div>

                <div className='pay-system-method'>
                    <img src={balls} className='pay-system-img'/>
                </div>

                <div className='pay-system-method'>
                   <img src={aexpress} className='pay-system-img'/>
                </div>

                <div className='pay-system-method'>
                    <img src={jcb} className='pay-system-img'/>
                </div>
            </div>

            <button className='premium-return' onClick={() => {
                navigate('/')}
            }>돌아가기</button>
        </div>
    </div>
    )
}