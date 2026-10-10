// No backend yet: the form builds a WhatsApp message and opens WhatsApp with it.
// Later (Stage 2) this will be replaced by a form that saves enquiries to a database.
const BUSINESS_WHATSAPP = '919598631064'; // country code + number, no + or spaces

const form = document.querySelector('#enquiry-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop the page from reloading

  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();
  const message = form.elements.message.value.trim();

  const text =
    `Hello Shiva Enterprises,\n` +
    `Name: ${name}\n` +
    `Phone: ${phone}\n` +
    `Enquiry: ${message}`;

  // encodeURIComponent makes the text safe to put inside a link
  const url = `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
});
