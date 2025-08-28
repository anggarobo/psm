import ReactDOM from 'react-dom/client';
import App from './App';
import './tailwind.css';
import '@mantine/core/styles.css';
import {
  createTheme,
  MantineColorsTuple,
  MantineProvider,
} from '@mantine/core';
import { screenFit } from './helper/screen';

interface DefaultColor {
  [x: string & {}]: MantineColorsTuple;
}

const colors: DefaultColor = {
  'red-psm': [
    '#F4C2C2',
    '#E78F8F',
    '#DA5C5C',
    '#CD2A2A',
    '#BF0F0F',
    '#A50101',
    '#8B0101',
    '#710101',
    '#580000',
    '#400000',
  ],
  'bright-pink': [
    '#F0BBDD',
    '#ED9BCF',
    '#EC7CC3',
    '#ED5DB8',
    '#F13EAF',
    '#F71FA7',
    '#FF00A1',
    '#E00890',
    '#C50E82',
    '#AD1374',
  ],
};

const theme = createTheme({
  primaryColor: 'red-psm',
  colors,
  radius: {
    default: screenFit(12),
  },
  defaultRadius: 'default',
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
