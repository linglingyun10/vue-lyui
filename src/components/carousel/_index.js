import LyCarousel from './src/main';
import LyCarouselItem from './src/item';

/* istanbul ignore next */
export default function(Vue) {
  Vue.component(LyCarousel.name, LyCarousel);
  Vue.component(LyCarouselItem.name, LyCarouselItem);
};

export { LyCarousel, LyCarouselItem };
