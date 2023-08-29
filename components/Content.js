import Thumbnail from "./Thumbnail";

function Content({ results }) {
  return (
    <div className=" px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 justify-center ">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
}

export default Content;
