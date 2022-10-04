import Link from "next/link";

const Page404 = () => {
  return (
    <div className="m-auto text-center">
      <h3 className="mb-6">404 Page not found</h3>

      <Link href="/" passHref>
        <button type="button" className="btn btn-primary">
          Back to main page
        </button>
      </Link>
    </div>
  );
};

export default Page404;
