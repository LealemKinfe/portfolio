import Link from "next/link";

const SideBar = () => {
  return (
    <section className="w-1/5 h-screen border bg-[#2F2F2F]">
      SIDEBAR
      <div className="p-5 text-white -z-10">
        <div className="relative rounded-full bg-[#707070]/50 p-5">
          <Link href="/" className="absolute -right-1 top-1 text-2xl rotate-45">
            Home
          </Link>
          <Link href="/" className="absolute -left-5 top-1 text-2xl -rotate-45">
            LinkTree
          </Link>
          <Link
            href="/"
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-2xl rotate-180"
          >
            About
          </Link>
          <div className="rounded-full p-24 bg-[#C3C3C3]/50"></div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
