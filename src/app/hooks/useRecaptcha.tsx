import { useEffect, useState } from 'react';

const useReCaptcha = (siteKey) => {
  const [isScriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      script.onload = null;
      document.body.removeChild(script);
    };
  }, [siteKey]);

  return isScriptLoaded;
};

export default useReCaptcha;
