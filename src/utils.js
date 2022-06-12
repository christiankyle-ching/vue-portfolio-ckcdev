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

function animateOnScroll(
  selector,
  { transformScale, transformRotate, transformOpacity, scrollThreshold }
) {
  // Default Options
  transformScale ??= false;
  transformRotate ??= false;
  transformOpacity ??= true;
  scrollThreshold ??= 50;

  document.querySelectorAll(selector).forEach((el) => {
    const elTop = el.getBoundingClientRect().top;

    let percentage = elTop / scrollThreshold;
    // Limit lower
    percentage = percentage > 0 ? percentage : 0;
    // Limit upper
    percentage = percentage < 1 ? percentage : 1;

    let transforms = [];
    if (transformScale) transforms.push(`scale(${percentage})`);
    if (transformRotate) transforms.push(`rotate(${percentage * 365}deg)`);

    el.style.transform = transforms.join(" ");

    if (transformOpacity) {
      el.style.opacity = `${percentage}`;
    }
  });
}

export { isInViewport, addClassIfInViewport, animateOnScroll };
