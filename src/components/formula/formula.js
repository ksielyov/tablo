import { ExcelComponent } from '@core/excel-component';

/**
 * @description Formula component
 */
export class Formula extends ExcelComponent {
  static className = 'excel__formula';

  /**
   * @param {HTMLElement} $root
   */
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  /**
   * @description onInput worker for input `excel__formula__input`
   * @param {InputEvent} nativeEvent
   */
  onInput(nativeEvent) {
    console.log(this.$root);
    console.log(nativeEvent.target.textContent.trim());
  }

  /**
   * @description onClick worker for input `excel__formula__input`
   * @param {InputEvent} nativeEvent
   */
  onClick(nativeEvent) {
    console.log(this.$root);
    console.log(nativeEvent.target.textContent.trim());
  }

  /**
   * @return {string}
   */
  toHTML() {
    return `
      <div class='excel__formula__icon__container'>
        <span class="material-icons">functions</span>
      </div>
      <div
        class='excel__formula__input'
        contenteditable
        spellcheck='false'
      >
        =МАКС(А1;А2)
      </div>
    `;
  }
}
