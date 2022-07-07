import { $ } from '@core/utils/dom';

/**
 * @description Based component to request components
 */
export class Excel {
  /**
   * @param {string} root
   * @param {object} options
   */
  constructor(root, options) {
    this.$el = $(root);
    this.components = options.components || [];
  }

  /**
   * @return {HTMLElement}
   */
  getRoot() {
    const $root = $.create('div', 'excel');

    this.components = this.components.map((Component) => {
      const $el = $.create('div', Component.className);
      const component = new Component($el);

      $el.html(component.toHTML());
      $root.append($el);

      return component;
    });

    return $root;
  }

  /**
   * @description Mount some HTML to `$el` node
   */
  render() {
    this.$el.append(this.getRoot());
    this.components.forEach((component) => component.init());
    // setTimeout(
    //   () => this.components.forEach((component) => component.destroy()),
    //   3500
    // );
  }
}
