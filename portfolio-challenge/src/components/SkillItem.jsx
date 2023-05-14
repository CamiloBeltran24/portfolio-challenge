export const SkillItem = ({ tech }) => {

  return(
    <>
      <li>
        { tech }
        <div className="progress-bar" ></div>
      </li>
    </>
  );
}