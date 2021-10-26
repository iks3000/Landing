import "./hamburger";
import "./smooth-scroll";
import './web-component';
import './performance-api';
import { events, changeContentStandard, changeContentAdvance, remove } from "./join-us-section";
import { sendClickData } from './send-click-data';
import { year } from './full-year';

events();
changeContentStandard();
// changeContentAdvance();
// remove();
sendClickData();
year();
