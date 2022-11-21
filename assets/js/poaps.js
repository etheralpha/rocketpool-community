var detailsModal = document.getElementById('detailsModal');
detailsModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var id = button.getAttribute('data-bs-id');
  var link = button.getAttribute('data-bs-link');
  var imgUrl = button.getAttribute('data-bs-imgurl');
  var title = button.getAttribute('data-bs-title');
  var description = button.getAttribute('data-bs-desc');
  var descUrl = button.getAttribute('data-bs-descurl');
  var date = button.getAttribute('data-bs-date');
  var supply = button.getAttribute('data-bs-supply');
  var creator = button.getAttribute('data-bs-creator');
  var type = document.getElementById(id + "badge").innerHTML;

  if (creator != "POAP Art Canvas") {
    document.getElementById("modalId").innerHTML = "#" + id;
  } else {
    document.getElementById("modalId").innerHTML = "Art Canvas";
  }
  document.getElementById("modalLink").href = link;
  document.getElementById("modalImg").src = imgUrl;
  document.getElementById("modalTitle").innerHTML = title;
  document.getElementById("modalDescription").innerHTML = description;
  document.getElementById("modalDescLink").innerHTML = descUrl;
  document.getElementById("modalDescLink").href = descUrl;
  document.getElementById("modalDate").innerHTML = date;
  document.getElementById("modalSupply").innerHTML = supply;
  document.getElementById("modalCreator").innerHTML = creator;
  document.getElementById("modalType").innerHTML = type;
})