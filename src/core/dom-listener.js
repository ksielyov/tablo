import { capitalize } from '@core/utils/capitalize';

/**
 * @description Manipulates with listeners
 */
export class DomListener {
  /**
   * @param {Dom} $root
   * @param {[]} listeners
   */
  constructor($root, listeners = []) {
    if (!$root)
      throw new Error('Root element has not been set for `DomListener`');

    this.$root = $root;
    this.listeners = listeners;
  }

  /**
   * @description subscribes to listeners
   */
  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = generateDomListenerPrefix(listener);
      const fn = this[method];

      if (!fn) throw new Error(`${method} has not been set in DomListener`);
      this.$root.on(listener, fn.bind(this));
    });
  }
}

/**
 * @description Generates prefix for `DomListener`
 * @param {string} eventName
 * @return {string}
 * @example
 * onClick
 */
function generateDomListenerPrefix(eventName) {
  return 'on' + capitalize(eventName);
}
