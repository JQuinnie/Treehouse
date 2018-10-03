const getJSON = url => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onreadystatechange = handleResponse;
  xhr.onerror = (error) => {
    reject(error);
  };
  xhr.send();

  function handleResponse() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const employees = JSON.parse(xhr.responseText);
        resolve(employees);
      } else {
        reject(this.statusText);
      }
    }
  }
});

// takes in employees and returns list items
function generatListItems(employees) {
  let statusHTML = '';
  for (let i = 0; i < employees.length; i += 1) {
    if (employees[i].inoffice === true) {
      statusHTML += '<li class="in">';
    } else {
      statusHTML += '<li class="out">';
    }
    statusHTML += employees[i].name;
    statusHTML += '</li>';
  }

  return statusHTML;
}

// takes in list items and returns final HTML to append to DOM
function generateUnorderedList(listItems) {
  return `<ul class="bulleted">${listItems}</ul>`;
}

// Appending unordered list to DOM
function addEmployeesToPage(unorderedList) {
  document.getElementById('employeeList').innerHTML = unorderedList;
}

const ajaxPromise = getJSON('../data/employees.json');

// new promise return items will be HTML snippets with all list items, then wrap unordered list around it, then append the list to the page, last is to catch all errors thrown to code
ajaxPromise
  .then(generatListItems)
  .then(generateUnorderedList)
  .then(addEmployeesToPage)
  .catch((error) => {
    console.log(error);
  });
