import { SkillItem } from "./SkillItem";

export const Skills = ({ title, technologies }) => {

  technologies = technologies.split(','); //converts string to an array
  

  return(
    <>
      <section className="skills">
        <h2 className="title-quad">
          { title }
        </h2>

        <ul>
          { 
            technologies.map( tech => <SkillItem key={tech} tech={tech} />)
          }
        </ul>
      </section>
    </>
  );
}