import '../styles/globals.css'
import './app.css';
import ContextAlarm from '../components/context/ContextAlarm';
import DigitalClock from '../components/DigitalClock/DigitalClock';

function MyApp() {
  return(
  <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <ContextAlarm>
            <DigitalClock />
          </ContextAlarm>
        </div>
      </div>
    </section>
  )

}

export default MyApp
