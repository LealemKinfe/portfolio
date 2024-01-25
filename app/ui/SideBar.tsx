"use client";

import Link from "next/link";
import { inter } from "../lib/fonts";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const SideBar = () => {
  const pathname = usePathname();
  return (
    <>
      {/* Desktop design */}
      <section
        className={`hidden overflow-hidden shrink-0 lg:block px-1 w-[280px] h-screen bg-[#2F2F2F] ${inter.className}`}
      >
        <div className="p-5 text-white my-4">
          <div className="relative rounded-full bg-[#707070]/50 p-5 text-2xl animate-spin-slow">
            <Link
              href="/"
              className={clsx(
                "absolute -right-1 top-2.5 rotate-45 hover:text-Primary",
                {
                  "text-Primary": pathname === "/",
                }
              )}
            >
              <span className="-rotate-12 inline-block">H</span>
              <span className="inline-block -translate-y-0.5">o</span>
              <span className="inline-block -translate-y-0.5 rotate-3">m</span>
              <span className="inline-block rotate-[9deg]">e</span>
            </Link>

            <Link
              href="https://linktr.ee/munheda"
              target="_blank"
              rel="noreferrer"
              className="absolute -left-5 top-2.5 -rotate-45 hover:text-Primary"
            >
              <span className="inline-block translate-y-1 -rotate-[18deg]">
                L
              </span>
              <span className="inline-block translate-y-[1px] -rotate-12">
                i
              </span>
              <span className="inline-block -translate-y-[1px] -rotate-[9deg]">
                n
              </span>
              <span className="inline-block -translate-y-0.5 -rotate-3">k</span>
              <span className="inline-block -translate-y-0.5 rotate-3">T</span>
              <span className="inline-block -translate-y-[1px] rotate-[9deg]">
                r
              </span>
              <span className="inline-block translate-y-[1px] rotate-[15deg]">
                e
              </span>
              <span className="inline-block translate-y-[5px] rotate-[18deg]">
                e
              </span>
            </Link>

            <Link
              href="/about"
              className={clsx(
                "absolute -bottom-7 left-1/2 -translate-x-1/2 rotate-180 hover:text-Primary",
                {
                  "text-Primary": pathname === "/about",
                }
              )}
            >
              <span className="inline-block translate-y-1 -rotate-12">A</span>
              <span className="inline-block translate-y-[1px] -rotate-6">
                b
              </span>
              <span className="inline-block translate-y-[1px]">o</span>
              <span className="inline-block translate-y-0.5 rotate-[9deg]">
                u
              </span>
              <span className="inline-block translate-y-1 rotate-[15deg]">
                t
              </span>
            </Link>
            <div className="rounded-full p-24 bg-[#C3C3C3]/50"></div>
          </div>
        </div>
      </section>

      {/* Mobile design */}
      <section className="lg:hidden bg-[#2F2F2F] p-5 text-white flex justify-evenly gap-10 text-2xl">
        <Link
          href="/"
          className={clsx("z-10 hover:text-Primary", {
            "text-Primary": pathname === "/",
          })}
        >
          Home
        </Link>

        <Link href="/" className="z-10 hover:text-Primary">
          LinkTree
        </Link>

        <Link
          href="/about"
          className={clsx("z-10 hover:text-Primary", {
            "text-Primary": pathname === "/about",
          })}
        >
          About
        </Link>
      </section>
    </>
  );
};

export default SideBar;
