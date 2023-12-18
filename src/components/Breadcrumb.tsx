import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<{ breadcrumb: string; href: string }[]>([{ breadcrumb: "Home", href: "/" }]);
  const router = useRouter();
  function capitalizeFirstLetter(string: string) {
    const stringArray = string.split("-");
    const capitalizeArray = stringArray.map((word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizeArray.join(" ");
  }
  const pathname = usePathname();
  useEffect(() => {
    if (router) {
      const linkPath = pathname?.split("/");
      linkPath?.shift();

      const pathArray: any = linkPath?.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath?.slice(0, i + 1).join("/"),
        };
      });
      setBreadcrumbs(pathArray);
    }
  }, [router]);

  return (
    <div className={`my-2 ps-1 ps-md-0`}>
      <Link href="/" className="link fs-14">
        Home
      </Link>
      {breadcrumbs.length > 0 &&
        breadcrumbs?.map((data: any, index: number) => (
          <>
            <span className="link">{" / "}</span>
            <Link href={data.href} key={index} className={`breadcrumb-link fs-14 ${index === breadcrumbs.length - 1 ? "" : "link"}`} style={{ cursor: index === breadcrumbs.length - 1 ? "default" : "pointer", pointerEvents: index === breadcrumbs.length - 1 ? "none" : "auto" }}>
              {capitalizeFirstLetter(data.breadcrumb).replace(/-/g, " ")}
            </Link>
          </>
        ))}
    </div>
  );
};

export default Breadcrumbs;
