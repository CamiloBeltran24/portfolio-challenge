

export const Anchor = ({ label, href, icon }) => {

  let myClass = '';

  icon
    ? myClass = `anchor icon`
    : myClass = `anchor`

  return(
    <>
      <a className={ myClass } href={ href }>
        <div className="icon">
          <img src={ icon } alt="" />
        </div>
        <span>{ label }</span>
      </a>
    </>
  );
}