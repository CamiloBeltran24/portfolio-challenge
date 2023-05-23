export const SimpleHobbies = ({ image, title, description }) => {
  return(
    <>
      <div className="hobbie">
        <figure>
          <img src={ image } alt="" />
        </figure>
        <h2 className="small-title"> { title } </h2>
        <div className="description">
          <p>{ description }</p>
        </div>
      </div>
    </>
  );
}