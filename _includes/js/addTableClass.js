window.onload = addTableClass();

// Adds table class to table tag so markdown tables are styled
function addTableClass() {
  var tables = document.getElementsByTagName('table');
  for (var i = 0; i < tables.length; i++) {
    tables[i].classList.add('table');
    tables[i].classList.add('table-striped');
  }
}