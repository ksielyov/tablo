const CODES = {
  A: 65,
  Z: 90,
};

/**
 * @return {string}
 */
export function generateTable() {
  let firstRow = "<div class='excel__table__row__numeric'></div>";

  for (let i = CODES.A; i <= CODES.Z; i++) {
    firstRow += `<div class='excel__table__row__content'>
      ${String.fromCodePoint(i)}
    </div>`;
  }

  firstRow = `<div class='excel__table__row'>${firstRow}</div>`;

  return firstRow;
}
