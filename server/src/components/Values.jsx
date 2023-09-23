import Image from "../images/values.jpg";
import SectionHead from "./SectionHead";
import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../ui/Card";

const Values = () => {
  return (
    <>
      <section className="values">
        <div className="container values__container">
          <div className="values__left">
            <div className="values__image">
              <img src={Image} alt="Values Img" />
            </div>
          </div>
          <div className="values__right">
            <SectionHead icon={<GiCutDiamond />} title="Values" />
            <p>
              loremplacerat orci nulla pellentesque dignissim enim sit amet
              venenatis urna
            </p>
            <div className="values__wrapper">
              {values.map(({ id, icon, title, desc }) => {
                return (
                  <Card className="values__value" key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <small>{desc}</small>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Values;
