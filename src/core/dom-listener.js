/**
 *
 */
export class DomListener {
  /**
   * @param {HTMLElement} $root
   * @param {[]} listeners
   */
  constructor($root, listeners = []) {
    if (!$root)
      throw new Error('Root element has not been set for `DomListener`');

    this.$root = $root;
    this.listeners = listeners;
  }

  initDOMListeners() {
    // console.log(this.$root);
  }
}
