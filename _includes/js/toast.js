const toastEl = document.getElementById('toast');
const toast = new bootstrap.Toast(toastEl);
showtoast()

// Loads/shows notification bar if users hasn't closed it yet
function showtoast() {
  const toastName = "toast-{{site.toastMsgId}}";
  const hideToast = localStorage.getItem(toastName);
  const timestamp = Math.round(Date.now()/10000)*10;
  if (hideToast != "true" && timestamp < {{site.toastExpiration}}) {
    toast.show();
  }
}
// Hides toast bar when user closes it
function hidetoast() {
  const toastName = "toast-{{site.toastMsgId}}";
  localStorage.setItem(toastName, "true");
}