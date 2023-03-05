import imgabout from '../images/about.jpeg';
import { SectionTitle } from './SectionTitle';

export const About = (id='3') => {
  return (
    <section class="section" id="about">
      {SectionTitle('about')}
      <div class="section-center about-center">
        <div class="about-img">
          <img src={imgabout} class="about-photo" alt="awesome beach" />
        </div>
        <article class="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>

          <a href="#about" rel="noreferrer"class="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
