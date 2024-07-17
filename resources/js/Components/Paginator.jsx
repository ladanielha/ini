import { Link } from "@inertiajs/react";

const Paginator = ({ meta }) => {
  const current = meta.current_page;
  const prev = meta.links[0]?.url;
  const next = meta.links[meta.links.length - 1]?.url;

  return (
    <div className="paginator grid grid-cols-3 gap-2">
      {prev && (
        <Link href={prev} className="btn btn-outline col-span-1">
          « Prev
        </Link>
      )}
      <div className="col-span-1 flex items-center justify-center">
        <span className="font-bold text-xl">{current}</span>
      </div>
      {next && (
        <Link href={next} className="btn btn-outline col-span-1">
          Next »
        </Link>
      )}
    </div>
  );
};

export default Paginator;
