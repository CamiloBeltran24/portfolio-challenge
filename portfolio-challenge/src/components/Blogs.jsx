import { SimpleBlog } from "./SimpleBlog";

export const Blogs = ({ smallTitle }) => {
  return(
    <>
      <section className="blogs">
        <span className="small-label"> { smallTitle } </span>

        <SimpleBlog
          title="How to organize yor CSS"
          image=""
          button="/"
          buttonLabel="dev.io"
        />
      </section>

    </>
  );
}