import profileImage from '../assets/images/christian_beltran.jpg';

export const ProfilePicture = () => {
  return(
    <>
      <figure className="image">
        <img src={ profileImage } alt="" />
      </figure>
    </>
  )
}