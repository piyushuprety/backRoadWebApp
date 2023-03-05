import { SectionTitle } from './SectionTitle';
import { Servicedata } from '../data';
export const Service = () => {
  return (
    <section className="section services" id="services">
      
      {SectionTitle('services')}

      <div className="section-center services-center">
        
        {Servicedata.map((item)=>{
          return (
            <article className="service" key ={item.id}>
              <span className="service-icon">
                <i className={item.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{item.title}</h4>
                <p className="service-text">
                  {item.text}
                </p>
              </div>
            </article>
          );
        })}
        
        
      </div>
    </section>
  );
};
