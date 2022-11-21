---
---

// filter resources to ones that match search term
function searchResources(searchText) {
  searchText = searchText.toLowerCase();
  if(event.keyCode == 13) {
    let resources = document.getElementsByClassName("resource");
    for (let i = 0; i < resources.length; i++) {
      resources[i].style.display = 'none';
      if (resources[i].innerText.toLowerCase().match(searchText) != null) {
        resources[i].style.display = 'block';
      }
    }
  }
}


// filter resources to only ones with all checked categories
function filterResources() {
  // hide all resources to reset
  var resources = document.getElementsByClassName("resource");
  for (let i = 0; i < resources.length; i++) {
    resources[i].style.display = "none";
  }

  // get a list of checked filters
  let selected = [];
  let checkboxes = document.querySelectorAll('input[name=filter]:checked');
  for (let i = 0; i < checkboxes.length; i++) {
    selected.push(checkboxes[i].value)
  }

  // show resources that have all filter categories
  for (let i = 0; i < resources.length; i++) {
    let show = true;
    for (let j = 0; j < selected.length; j++) {
      if (!resources[i].classList.contains(selected[j])) {
        show = false;
      }
    }
    if (show) {
      resources[i].style.display = "block";
    }
  }
}