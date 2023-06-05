import Hero from "../../../../components/hero";
import ArticleWrapper from "../../../../components/articlewrapper";

const post_info = {
  heading: "Find trademark class for over 8000 goods and services",
  subheading: "",
};

export default function Findtrademarkclassforover8000goodsandservices() {
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
  return <article>Coming Soon...</article>;
}
