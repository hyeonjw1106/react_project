import './App.css';

export default function Friend({ onClose }) {
  return (
    <div className='modal-div'>
      <button onClick={onClose} className='modal-close-button'> X </button>
      <h4 className='modal-intro'>Mac 앱에서 친구들이<br/>어떤 콘텐츠를 감상하<br/>고 있는지 확인하세요</h4>
      <button className='app-download'> 무료 앱 다운로드하기 </button>
    </div>
  );
}