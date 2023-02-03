import { createRoot } from 'react-dom/client';
import Jupyter from '../jupyter/Jupyter';
import Cell from '../components/cell/Cell';

import "./../../style/index.css";

const div = document.createElement('div');
document.body.appendChild(div);
const root = createRoot(div)

root.render(
  <Jupyter>
    <Cell />
  </Jupyter>
);