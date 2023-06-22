import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Breadcrumb } from "react-bootstrap";

const Breadcrumbs = () => {
  const [breadcrumbs, setBreadcrumbs] = useState<Array<any>>([]);
  const router = useRouter();
  function capitalizeFirstLetter(string:string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split("/");
      linkPath.shift();

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: path,
          href: "/" + linkPath.slice(0, i + 1).join("/"),
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
