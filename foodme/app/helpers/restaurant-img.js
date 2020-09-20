import { helper } from '@ember/component/helper';

export function restaurantImg(id) {
  return `/img/restaurants/${id}.jpg`;
}

export default helper(restaurantImg);
