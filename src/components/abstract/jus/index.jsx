import React from "react";
import "./styles.css";

function Banner(props) {
  const { images, speed } = props;
  return (
    <div className="inner">
      <div className="wrapper">
        <section style={{ "--speed": `${speed}ms` }}>
          {images.map((itm) => (
            <div className="image" key={crypto.randomUUID()}>
              <img
                src={`https://adminbj.costiadevelopmentagency.fr${itm.attributes.Logo.data.attributes.url}`}
                alt={crypto.randomUUID()}
              />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
        {images.map((itm) => (
            <div className="image" key={crypto.randomUUID()}>
              <img
                src={`https://adminbj.costiadevelopmentagency.fr${itm.attributes.Logo.data.attributes.url}`}
                alt={crypto.randomUUID()}
              />
            </div>
          ))}
        </section>
        <section style={{ "--speed": `${speed}ms` }}>
        {images.map((itm) => (
            <div className="image" key={crypto.randomUUID()}>
              <img
                src={`https://adminbj.costiadevelopmentagency.fr${itm.attributes.Logo.data.attributes.url}`}
                alt={crypto.randomUUID()}
              />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
export default Banner;
