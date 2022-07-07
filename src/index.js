import './scss/index.scss';
import { Excel } from './components/excel/excel';
import { Header } from './components/header/header';
import { Formula } from './components/formula/formula';
import { Table } from './components/table/table';

const excel = new Excel('#app', {
  components: [Header, Formula, Table],
});

excel.render();
