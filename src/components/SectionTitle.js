import {Titledata} from '../data.js'


export const SectionTitle = (id) => {
  const item = Titledata.find(item => item.id === id);
  return (
    <div className="section-title" key={item.id}>
      <h2>
        {item.first_half} <span>{item.second_half}</span>
      </h2>
    </div>
  );
}

