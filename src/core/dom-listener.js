/**
 *
 */
export class DomListener {
  /**
   * @param {HTMLElement} $root
   */
  constructor($root) {
    if (!$root)
      throw new Error('Root element has not been set for `DomListener`');

    this.$root = $root;
  }
}
