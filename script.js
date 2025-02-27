function enquireNow(course) {
  const whatsappNumber = "919008726664";
  const message = `I am interested in ${course}`;
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(url, "_blank");
}
