import { ExcelComponent } from '@core/excel-component';
import { generateTable } from './table.template';

/**
 *
 */
export class Table extends ExcelComponent {
  static className = 'excel__table';

  /**
   * @return {string}
   */
  toHTML() {
    return generateTable();
    // TEMP! Will remove after end of dynamically render table
    return `
      <div class='excel__table__row'>
        <div class='excel__table__row__numeric'></div>
        <div class='excel__table__row__content'>A</div>
        <div class='excel__table__row__content'>B</div>
        <div class='excel__table__row__content'>C</div>
      </div>
      
      <div class='excel__table__row'>
        <div class='excel__table__row__numeric'>1</div>
        <div class='excel__table__row__cell active' contenteditable>A1</div>
        <div class='excel__table__row__cell' contenteditable>B1</div>
        <div class='excel__table__row__cell' contenteditable>C1</div>
      </div>
      
      <div class='excel__table__row'>
        <div class='excel__table__row__numeric'>2</div>
        <div class='excel__table__row__cell' contenteditable>A1</div>
        <div class='excel__table__row__cell' contenteditable>B1</div>
        <div class='excel__table__row__cell' contenteditable>C1</div>
      </div>
      
      <div class='excel__table__row'>
        <div class='excel__table__row__numeric'>3</div>
        <div class='excel__table__row__cell ' contenteditable>A1</div>
        <div class='excel__table__row__cell' contenteditable>B1</div>
        <div class='excel__table__row__cell' contenteditable>C1</div>
      </div>
    `;
  }
}
