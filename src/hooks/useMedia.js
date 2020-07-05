import { useState, useEffect } from 'react';

const useMedia = (queries, values, defaultValue) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const mediaQueryLists = queries.map(q => window.matchMedia(q));

    const getValue = () => {
      const index = mediaQueryLists.findIndex(mql => mql.matches);
      return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
    };

    setValue(getValue);
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach(mql => mql.addListener(handler));
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
  }, [defaultValue, queries, values]);

  return value;
};

export default useMedia;
