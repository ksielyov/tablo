import { ExcelComponent } from '@core/excel-component';

/**
 *
 */
export class Formula extends ExcelComponent {
  static className = 'excel__formula';

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
