import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function capitalize([input] /*, hash*/) {
  let r = input;

  if (typeof input === 'string') {
    r = input.capitalize();
  }

  if (typeof input === 'object' && typeof input.toString === 'function') {
    r = input.toString().capitalize();
  }

  return htmlSafe(r);
}

export default helper(capitalize);