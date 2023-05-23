import image from "../assets/images/blog.jpg";

export const SimpleBlog = ({ title, button, buttonLabel }) => {
  return(
    <>
      <div className="blog-container">
        <div className="top">
          <h2 className="titles">
            { title }
          </h2>

          <figure>
            <img src={ image } alt="" />
          </figure>
        </div>

        <div className="desc">
          <p>In this article I tell the story about Proin eu justo sit amet lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.</p>
          <p>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.</p>
        </div>

        <a href={ button } target="_blank" rel="noopener noreferrer"> { buttonLabel } </a>
      </div>
    </>
  )
}