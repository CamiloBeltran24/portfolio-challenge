import { SimpleHobbies } from "./SimpleHobbies";
import bikingImage from "../assets/images/biking.jpg";
import cookingImage from "../assets/images/cooking.jpg";
import gamingImage from "../assets/images/gaming.jpg";


export const Hobbies = () => {
  return(
    <>
      <section className="hobbies">
        
        <h2 className="titles">Hobbies</h2>

        <SimpleHobbies image={ bikingImage } title="Mountain Bike" description="Quisque feugiat malesuada molestie."/>
        <SimpleHobbies image={ gamingImage } title="Gaming" description="Quisque feugiat malesuada molestie."/>
        <SimpleHobbies image={ cookingImage } title="Cooking" description="Quisque feugiat malesuada molestie."/>

      </section>
    </>
  );
}