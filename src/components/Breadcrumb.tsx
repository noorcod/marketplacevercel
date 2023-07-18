import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Breadcrumb } from "react-bootstrap";

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<Array<any>>([]);
  const router = useRouter();
  function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const pathename=usePathname();
  console.log(pathename)
  useEffect(() => {
    if (router) {
      const linkPath = pathename?.split("/");
      linkPath?.shift();

      const pathArray:any = linkPath?.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath?.slice(0, i + 1).join("/"),
        };
      });

      setBreadcrumbs(pathArray);
    }
  }, [router]);
  return (
    <div className="mt-2">
      <Breadcrumb>
        <Breadcrumb.Item className="link" href="/">
          Home
        </Breadcrumb.Item>
        {breadcrumbs?.map((data:any, index:number) => (
          <Breadcrumb.Item
            key={index}
            className={`breadcrumb-link fs-14 ${
              index === breadcrumbs.length - 1 ? "" : "link"
            }`}
            href={data.href}
          >
            {capitalizeFirstLetter(data.breadcrumb)}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumbs;
