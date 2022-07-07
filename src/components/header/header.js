import { ExcelComponent } from '@core/excel-component';

/**
 *
 */
export class Header extends ExcelComponent {
  static className = 'excel__header';

  /**
   * @param {HTMLElement} $root
   */
  constructor($root) {
    super($root, {
      name: 'Header',
      listeners: ['click'],
    });
  }

  /**
   * @param {MouseEvent} nativeEvent
   */
  onClick(nativeEvent) {
    console.log(nativeEvent.target);
  }

  /**
   * @return {string}
   */
  toHTML() {
    return `
     <div class='excel__header__left'>
        <img
        class='excel__header__left__image'
        src='../icons/excel_logo.svg'
        alt='excel'>
        <div class='excel__header__left__top'>
          <input class='excel__header__left__input' value='Test table' />
          <div class='excel__header__left__top__buttons'>
            <span class='material-icons'>format_align_right</span>
            <span class='material-icons'>format_align_center</span>
            <span class='material-icons'>format_align_left</span>
            <span class='material-icons'>format_bold</span>
            <span class='material-icons'>format_italic</span>
            <span class='material-icons'>format_underlined</span>
            <span class='material-icons'>strikethrough_s</span>
          </div>
        </div>
      </div>
      <div class='excel__header__right'>
        <div class='excel__header__right__button'>
          <span class='material-icons'>highlight_off</span>
        </div>
    </div>`;
  }
}
