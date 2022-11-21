var detailsModal = document.getElementById('detailsModal');
detailsModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var link = button.getAttribute('data-bs-link');
  var imgUrl = button.getAttribute('data-bs-imgurl');
  var title = button.getAttribute('data-bs-title');
  var date = button.getAttribute('data-bs-date');

  document.getElementById("modalLink").href = link;
  document.getElementById("modalImg").src = "/" +imgUrl;
  document.getElementById("modalTitle").innerHTML = title;
  document.getElementById("modalDate").innerHTML = date;
})