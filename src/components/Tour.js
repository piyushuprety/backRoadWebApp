import { Tourdata } from '../data';
import { SectionTitle } from './SectionTitle';
export const Tour = () => {
  return (
    <section className="section" id="tours">
      {SectionTitle('tours')}

      <div className="section-center featured-center">
        
        {Tourdata.map((item)=> {
          return (
            <article className="tour-card" key={item.id}>
              <div className="tour-img-container">
                <img src={item.img} className="tour-img" alt="" />
                <p className="tour-date">{item.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{item.title}</h4>
                </div>
                <p>
                  {item.text1}
                </p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {item.country}
                  </p>
                  <p>{item.duration}</p>
                  <p>{item.price}</p>
                </div>
              </div>
            </article>
          );})}
        
        
      </div>
    </section>
  );
}