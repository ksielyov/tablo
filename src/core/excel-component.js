import { DomListener } from '@core/dom-listener';

/**
 *
 */
export class ExcelComponent extends DomListener {
  /**
   * @param {HTMLElement} $root
   * @param {{listeners: [], name: string}} options
   */
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  /**
   * @return {string}
   */
  toHTML() {
    return '';
  }

  /**
   * @description Initialize app with listeners
   */
  init() {
    this.initDOMListeners();
  }

  /**
   * @description Unsubscribe app listeners
   */
  destroy() {
    this.removeDOMListeners();
  }
}
