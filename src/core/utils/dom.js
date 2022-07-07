/**
 * @description Utils for DOM
 */
class Dom {
  /**
   * @param {HTMLElement | string} selector
   */
  constructor(selector) {
    this.$el =
      typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;
  }

  /**
   * @param {string} [content]
   * @return {string | Dom}
   */
  html(content) {
    if (!content) return this.$el.outerHTML.trim();
    this.$el.innerHTML = content;
    return this;
  }

  /**
   * @param {string | {$el: Node}} node
   * @return {Dom}
   */
  append(node) {
    if (node instanceof Dom) node = node.$el;
    this.$el.append(node);

    return this;
  }

  /**
   * @return {Dom}
   */
  clear() {
    this.html('');
    return this;
  }
}

/**
 * @example
 * const element = $('div').html('<p>Hello, test.</p>');
 * console.log(element.html());
 *
 * <div><p>Hello, test.</p></div>
 *
 * @return {Dom}
 * @param {HTMLElement | string} selector'
 *  */
export function $(selector) {
  return new Dom(selector);
}

/**
 *
 * @param {string} element
 * @param {string} classes
 * @return {HTMLElement}
 */
$.__proto__.create = (element, classes = '') => {
  const $el = document.createElement(element);
  if (classes) $el.classList.add(classes);

  return $($el);
};
