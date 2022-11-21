---
---

var detailsModal = document.getElementById('detailsModal');
const modal = new bootstrap.Modal(detailsModal);
detailsModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  var link = button.getAttribute('data-bs-link');
  var title = link.split("/poaps/abandoned/").pop();
  // title = title.split("videos/").pop();
  var creator = button.getAttribute('data-bs-creator');

  document.getElementById("modalTitle").innerHTML = title;
  document.getElementById("modalCreator").innerHTML = creator;

  if (link.includes(".mp4")) {
    document.getElementById("modalImg").src = "";
    document.getElementById("modalImg").style.display = "none";
    document.getElementById("modalVidSrc").src = link;
    document.getElementById("modalVid").style.display = "block";
  } else {
    document.getElementById("modalVidSrc").src = "";
    document.getElementById("modalVid").style.display = "none";
    document.getElementById("modalImg").src = link;
    document.getElementById("modalImg").style.display = "block";
  }
})

function showRandom() {
  // file.path item example: /assets/img/memes/2021-07-12--rsmall.zloty--b.jpg
  const siteUrl = "{{site.url}}";
  const file = fileArray[Math.floor(Math.random()*fileArray.length)];
  const path = file.path;
  const filename = file.basename;
  console.log(filename);
  const date = filename.split("--")[0];
  const creator = filename.split("--")[1].replace("-", " ");

  document.getElementById("modalTitle").innerHTML = filename;
  document.getElementById("modalCreator").innerHTML = creator;
  // document.getElementById("modalRandom").innerHTML = `<a class="btn btn-dark" onclick="showRandom()">Random</a>`;

  if (path.includes(".mp4")) {
    document.getElementById("modalImg").src = "";
    document.getElementById("modalImg").style.display = "none";
    document.getElementById("modalVidSrc").src = siteUrl + path;
    document.getElementById("modalVid").style.display = "block";
  } else {
    document.getElementById("modalVidSrc").src = "";
    document.getElementById("modalVid").style.display = "none";
    document.getElementById("modalImg").src = siteUrl + path;
    document.getElementById("modalImg").style.display = "block";
  }

  modal.show();
}