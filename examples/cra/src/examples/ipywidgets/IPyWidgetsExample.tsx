import { render } from 'react-dom';
import { Jupyter, OutputIPyWidgets } from '@datalayer/jupyter-react';
import { state, view } from './IPyWidgetsSimple';
import IPyWidgetsToolbar from './IPyWidgetsToolbar';
import Layers from '../../layout/Layers';

import './../App.css';

const div = document.createElement('div');
document.body.appendChild(div);

render(
  <Jupyter collaborative={false} terminals={false}>
    <Layers />
    <IPyWidgetsToolbar />
    <OutputIPyWidgets state={state} view={view} />
  </Jupyter>,
  div
);
