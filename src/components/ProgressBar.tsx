import * as PropTypes from "prop-types";
import * as React from "react";
import * as NProgress from "nprogress";

export type ProgressBarProps = {
  color?: string;
  initialPosition?: number;
  crawlSpeed?: number;
  height?: number;
  crawl?: boolean;
  showSpinner?: boolean;
  easing?: string;
  speed?: number;
  shadow?: string | false;
  template?: string;
  zIndex?: number;
};

const ProgressBar = ({ color: propColor, height: propHeight, showSpinner, crawl, crawlSpeed, initialPosition, easing, speed, shadow, template, zIndex = 1600 }: ProgressBarProps) => {
  const defaultColor = "#29d";
  const defaultHeight = 3;

  const color = propColor ?? defaultColor;
  const height = propHeight ?? defaultHeight;

  // Any falsy (except undefined) will disable the shadow
  const boxShadow = !shadow && shadow !== undefined ? "" : shadow ? `box-shadow:${shadow}` : `box-shadow:0 0 10px ${color},0 0 5px ${color}`;

  const styles = (
    <style>
      {`#nprogress{pointer-events:none}#nprogress .bar{background:${color};position:fixed;z-index:${zIndex};top:0;left:0;width:100%;height:${height}px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;${boxShadow};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:${zIndex};top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:2px solid transparent;border-top-color:${color};border-left-color:${color};border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}
    </style>
  );

  React.useEffect(() => {
    NProgress.configure({
      showSpinner: showSpinner ?? true,
      trickle: crawl ?? true,
      trickleSpeed: crawlSpeed ?? 200,
      minimum: initialPosition ?? 0.08,
      easing: easing ?? "ease",
      speed: speed ?? 200,
      template: template ?? '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
    });

    function isAnchorOfCurrentUrl(currentUrl: string, newUrl: string) {
      if (newUrl.slice(0, -1) === currentUrl) {
        return true;
      } else {
        const currentUrlObj = new URL(currentUrl);
        const newUrlObj = new URL(newUrl);
        // Compare hostname, pathname, and search parameters
        if (currentUrlObj.hostname === newUrlObj.hostname && currentUrlObj.pathname === newUrlObj.pathname && currentUrlObj.search === newUrlObj.search) {
          // Check if the new URL is just an anchor of the current URL page
          const currentHash = currentUrlObj.hash;
          const newHash = newUrlObj.hash;
          return currentHash !== newHash && currentUrlObj.href.replace(currentHash, "") === newUrlObj.href.replace(newHash, "");
        }
        return false;
      }
    }

    var npgclass = document.querySelectorAll("html");

    function findClosestAnchor(element: HTMLElement | null): HTMLAnchorElement | null {
      while (element && element.tagName.toLowerCase() !== "a") {
        element = element.parentElement;
      }
      return element as HTMLAnchorElement;
    }

    function handleClick(event: MouseEvent) {
      try {
        const target = event.target as HTMLElement;
        const anchor = findClosestAnchor(target);
        const newUrl: string | undefined = anchor?.href;
        if (newUrl) {
          const currentUrl = window.location.href;
          const isExternalLink = (anchor as HTMLAnchorElement).target === "_blank";
          const isBlob = newUrl.startsWith("blob:");
          const isAnchor = isAnchorOfCurrentUrl(currentUrl, newUrl);
          if (newUrl === currentUrl || isAnchor || isExternalLink || isBlob || event.ctrlKey || newUrl.split("/")?.slice(-1)[0] === "#") {
            // NProgress.start();
            // NProgress.done();
            [].forEach.call(npgclass, function (el: Element) {
              el.classList.remove("nprogress-busy");
            });
          } else {
            NProgress.start();
            (function (history) {
              const pushState = history.pushState;
              history.pushState = function () {
                NProgress.done();
                [].forEach.call(npgclass, function (el: Element) {
                  el.classList.remove("nprogress-busy");
                });
                // eslint-disable-next-line prefer-rest-params, @typescript-eslint/no-explicit-any
                return pushState.apply(history, arguments as any);
              };
            })(window.history);
          }
        }
      } catch (err) {
        // Log the error in development only!
        // console.log('ProgressBar error: ', err);
        NProgress.start();
        NProgress.done();
      }
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return styles;
};

export default ProgressBar;

ProgressBar.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  showSpinner: PropTypes.bool,
  crawl: PropTypes.bool,
  crawlSpeed: PropTypes.number,
  initialPosition: PropTypes.number,
  easing: PropTypes.string,
  speed: PropTypes.number,
  template: PropTypes.string,
  shadow: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  zIndex: PropTypes.number,
};
