// @ts-nocheck

import React from "react";


const { useRef, useState, useEffect } = React;

function Header({ children, sticky = false, className, ...rest }) {
  const [isSticky, setIsSticky] = useState(false);
  const ref = useRef();

  // mount
  useEffect(() => {
    const cachedRef = ref.current,
      observer = new IntersectionObserver(
        ([e]) => setIsSticky(e.intersectionRatio < 1),
        {
          threshold: [1],
          // rootMargin: '-1px 0px 0px 0px',  // alternativly, use this and set `top:0` in the CSS
        }
      );

    observer.observe(cachedRef);

    // unmount
    return function () {
      observer.unobserve(cachedRef);
    };
  }, []);

  return (
    <header
      className={className + (isSticky ? " isSticky" : "")}
      ref={ref}
      {...rest}
    >
      {children}
    </header>
  );
}

export const TripInfoDrawerTest = () => {
  return (
    <>
      <section>
        <a href="https://stackoverflow.com/a/57991537/104380" target="_blank">
          Event when position:sticky is triggered
        </a>
      </section>
      <Header className="bottom-header">Sticky header</Header>
    </>
  );
};
