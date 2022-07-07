import { DomListener } from '@core/dom-listener';

/**
 *
 */
export class ExcelComponent extends DomListener {
  /**
   * @param {HTMLElement} $root
   * @param {{listeners: []}} options
   */
  constructor($root, options = {}) {
    super($root, options.listeners);
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
}
