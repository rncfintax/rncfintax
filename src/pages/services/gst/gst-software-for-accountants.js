import Hero from "../../../../components/hero";
import ArticleWrapper from "../../../../components/articlewrapper";

const post_info = {
  heading: "GST Software for Accountants",
  subheading: "",
};

export default function GSTSoftwareforAccountants() {
  return (
    <>
      
      <Hero data={post_info} />
      <ArticleWrapper>
        <Article />
      </ArticleWrapper>
    </>
  );
}

function Article() {
  return <article>
    Coming Soon...
  </article>;
}
