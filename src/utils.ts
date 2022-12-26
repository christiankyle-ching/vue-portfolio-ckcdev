export const isInViewport = (
  element: Element | HTMLElement,
  withinScreenBoundaries = false
) => {
  const rect = element.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const vw = window.innerWidth || document.documentElement.clientWidth;
  const multiplier = 1;

  // console.log(`rect.top: ${rect.top}`);
  // console.log(`rect.bottom: ${rect.bottom}`);
  // console.log(`vh: ${vh}`);

  // Completely in Viewport
  if (withinScreenBoundaries) {
    return (
      rect.top * multiplier >= 0 &&
      rect.left * multiplier >= 0 &&
      rect.bottom * multiplier <= vh &&
      rect.right * multiplier <= vw
    );
  }

  return (
    (rect.top * multiplier >= 0 && rect.top * multiplier <= vh) ||
    (rect.bottom * multiplier >= 0 && rect.bottom * multiplier <= vh)
  );
};

export const addClassIfInViewport = (
  selector: string,
  ...classes: string[]
) => {
  document.querySelectorAll(selector).forEach((el: Element) => {
    if (isInViewport(el)) el.classList.add(...classes);
  });
};

export type AnimateOnScrollOptions = {
  transformScale: boolean;
  transformRotate: boolean;
  transformOpacity: boolean;
  scrollThreshold: number;
};

export const DEFAULT_ANIMATE_ON_SCROLL_OPTIONS: AnimateOnScrollOptions = {
  transformScale: false,
  transformRotate: false,
  transformOpacity: true,
  scrollThreshold: 50,
};

export const animateOnScroll = (
  selector: string,
  _options?: Partial<AnimateOnScrollOptions>
) => {
  // Default Options
  const options = {
    ...DEFAULT_ANIMATE_ON_SCROLL_OPTIONS,
    ..._options,
  };

  document.querySelectorAll(selector).forEach((_el: Element) => {
    const el = _el as HTMLElement;

    const elTop = el.getBoundingClientRect().top;

    let percentage = elTop / options.scrollThreshold;
    // Limit lower
    percentage = percentage > 0 ? percentage : 0;
    // Limit upper
    percentage = percentage < 1 ? percentage : 1;

    let transforms = [];
    if (options.transformScale) transforms.push(`scale(${percentage})`);
    if (options.transformRotate)
      transforms.push(`rotate(${percentage * 365}deg)`);

    el.style.transform = transforms.join(" ");

    if (options.transformOpacity) {
      el.style.opacity = `${percentage}`;
    }
  });
};

export const makeHTMLLink = (
  text: string,
  link: string,
  openInNewTab = true
) => {
  return createHTMLElement("a", {
    attributes: {
      href: link,
      target: openInNewTab ? "_blank" : "",
    },
    innerHTML: text,
  });
};

export type CreateHTMLElementExtraOptions<
  K extends keyof HTMLElementTagNameMap
> = {
  attributes: Partial<HTMLElementTagNameMap[K]>;
  innerHTML: string;
};

/**
 * Creates an HTML DOM element and returns its string HTML counterpart.
 */
export const createHTMLElement = <K extends keyof HTMLElementTagNameMap>(
  tag: K,
  extraOptions?: Partial<CreateHTMLElementExtraOptions<K>>
): string => {
  const element = document.createElement(tag);

  if (!!extraOptions?.attributes) {
    for (const key in Object.keys(extraOptions.attributes)) {
      const _key = key as keyof typeof element;
      const value = extraOptions.attributes[_key];
      if (!!value) {
        element[_key] = value!;
      }
    }
  }

  if (!!extraOptions?.innerHTML) {
    element.innerHTML = extraOptions.innerHTML;
  }

  return element.outerHTML;
};

export const getHTMLMetaElement = (metaName: string) => {
  return document.querySelector(`head > meta[name='${metaName}']`) ?? null;
};
