import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenberBox from './MenberBox';
import registerServiceWorker from './registerServiceWorker';
let  data=[
	{id:1,author:"水冷さん"},
	{id:2,author:"レオさん"}
];

ReactDOM.render(<MenberBox data ={data} />, document.getElementById('root'));
registerServiceWorker();
