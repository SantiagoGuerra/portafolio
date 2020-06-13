import './css/styles.css';
import 'remixicon/fonts/remixicon.css';
import data from './data.json';

import Header from './layout/Header';


document.querySelector('.main').insertAdjacentElement('beforebegin', Header(data.profile.info));

console.log(Header(data.profile.info));