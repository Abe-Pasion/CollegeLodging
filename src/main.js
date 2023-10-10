//import { Home } from "./components/Home";

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("root").innerText = "Hello, World!";
  
  const testDiv = document.createElement('div');
  testDiv.innerText = 'Test Div';
  document.getElementById('root').appendChild(testDiv);

});
