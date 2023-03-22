//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import App from './my0drill-menu-function/App'
// import App from './myaxios/App'
// import AppClass from './my1drill-class/AppClass';
// import AppFunction from './my2drill-function/AppFunction';
// import AppArrowFunction from './my3drill-arrow-function/AppArrowFunction';
import Table from './my4drill-table/Table';
import RevTable from "./my4drill-table/RevTable";
// import StyleExample from './my5drill-css/StyleExample';
// import MenuList from './my7drill-props/MenuList';
 import AxiosDrill from './my8drill-axios/AxiosDrill';
// import RouterDrill from './my9drill-router/RouterDrill';
// import CarsDrill from './my10drill-structure/CarsDrill';
// import ChangeDrill from "./my11bdrill-textevent/ChangeDrill";
// import CounterDrill from "./my11adrill-counterevent/CounterDrill";
// import DateTime from "./my12drill-date/DateTime";
// import MemoDrill from "./my13drill-memo/MemoDrill";
// import AppStudentCrud from "./my14drill-student-crud/AppStudentCrud";
import AppClass from "./my1drill-class/AppClass";
import InputGroup from "./layout/InputGroup";
import Form from "./layout/Form";
import FormItem from "./layout/FormItem";



const greetingMessage = <div>Hello Everybody!</div>;

const menu = <ul>
    <li>Home</li>
    <li>Login</li>
    <li>Contact Us</li>
</ul>;

console.log(">>>> Hello Everybody!");

//ReactDOM.render(menu,  document.getElementById('root')  );
const root = ReactDOM.createRoot(document.getElementById('root'));

const names = ["Johann Strauss", "Amadeus Amadeus Mozart", "Giuseppe Verdi"];
root.render(<RevTable names={names} />);




