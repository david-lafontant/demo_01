import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import homeStyles from './home.module.css';

function Home() {
  return (
    <section className={`${homeStyles.home} hero min-h-screen bg-base-200`}>
      <div className="hero-content text-center">

        <div className="max-w-md">

          <div className="flex">
            <div className={homeStyles.arrowLeft}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div>
              <h3>Welcome to sushi restaurant</h3>
              <p>
                People eat with their eyes and we create an easy way for customers
                to order
              </p>

              <div>
                <button type="button" className="btn bg-slate-100 text-slate-800 btn-xs sm:btn-sm md:btn-md lg:btn-lg">ABOUT</button>
                <button type="button" className="btn bg-slate-100 text-slate-800 btn-xs sm:btn-sm md:btn-md lg:btn-lg">MENU</button>
              </div>
            </div>
            <div className={homeStyles.arrowRight}>
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>

        </div>

      </div>
    </section>

  );
}

export default Home;
