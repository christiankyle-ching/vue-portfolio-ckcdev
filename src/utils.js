function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const multiplier = 0.75;
  return (
    rect.top * multiplier >= 0 &&
    rect.left * multiplier >= 0 &&
    rect.bottom * multiplier <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right * multiplier <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
}

export { isInViewport };
