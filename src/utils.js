function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const vw = window.innerWidth || document.documentElement.clientWidth;
  const multiplier = 1;

  // Completely in Viewport
  // return (
  //   rect.top * multiplier >= 0 &&
  //   rect.left * multiplier >= 0 &&
  //   rect.bottom * multiplier <= vh &&
  //   rect.right * multiplier <= vw
  // );

  // console.log(`rect.top: ${rect.top}`);
  // console.log(`rect.bottom: ${rect.bottom}`);
  // console.log(`vh: ${vh}`);

  return (
    (rect.top * multiplier >= 0 && rect.top * multiplier <= vh) ||
    (rect.bottom * multiplier >= 0 && rect.bottom * multiplier <= vh)
  );
}

function addClassIfInViewport(selector, ...classes) {
  document.querySelectorAll(selector).forEach((el) => {
    if (isInViewport(el)) el.classList.add(...classes);
  });
}

export { isInViewport, addClassIfInViewport };
