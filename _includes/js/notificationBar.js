window.onload = showNotification();

// Loads/shows notification bar if users hasn't closed it yet
function showNotification() {
  const notificationName = "notification-{{site.notificationMsgId}}";
  const hideNotification = localStorage.getItem(notificationName);
  const timestamp = Math.round(Date.now()/10000)*10;
  if (hideNotification != "true" && timestamp < {{site.notificationExpiration}}) {
    const notification = document.getElementById("notification");
    notification.style.display = "block";
  }
}
// Hides notification bar when user closes it
function hideNotification() {
  const notification = document.getElementById("notification");
  notification.style.display = "none";
  const notificationName = "notification-{{site.notificationMsgId}}";
  localStorage.setItem(notificationName, "true");
}