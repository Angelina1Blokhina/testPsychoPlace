
import './App.css';
import FaqItem from './FaqItem';
function App() {
  return (
    <div className="App">
       <h1>Часто задаваемые вопросы</h1>
      <FaqItem
        question="Как забронировать кабинет?"
        answer="Это можно сделать на странице расписания"
      />
      <FaqItem
        question="Как связаться с поддержкой?"
        answer="Вы можете отправить нам письмо на почту"
      />
    </div>
  );
}

export default App;
