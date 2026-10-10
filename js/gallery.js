// Photos are stored on Cloudinary, not in this repo, so the repo stays tiny.
// 1. Create a free Cloudinary account and copy your "cloud name" from the dashboard.
// 2. Upload photos in Cloudinary's Media Library.
// 3. Add one line per photo below, using the photo's "Public ID" as shown in Cloudinary.
const CLOUD_NAME = 'penhyxp1';

const projects = [
  { id: 'IMG-20260930-WA0036', name: 'grill boundry wall', place: 'red stone ,ayodhya', alt: 'red stone rajasthani marble' },
  { id: 'IMG-20261007-WA0029', name: 'Project name', place: 'Type of work, City', alt: 'Describe the second photo' },
];

// Cloudinary resizes the photo for you: w_ = width, q_auto = best quality for size,
// f_auto = modern format (WebP/AVIF) when the visitor's browser supports it.
const photoUrl = (id, width) =>
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_${width},q_auto,f_auto/${id}`;

const gallery = document.querySelector('#gallery');

gallery.innerHTML = projects.map(p => `
  <li>
    <figure>
      <img src="${photoUrl(p.id, 800)}"
           srcset="${photoUrl(p.id, 500)} 500w, ${photoUrl(p.id, 800)} 800w, ${photoUrl(p.id, 1200)} 1200w"
           sizes="(min-width: 48rem) 33vw, 100vw"
           alt="${p.alt}" width="1200" height="900" loading="lazy">
      <figcaption>
        <span class="project-name">${p.name}</span>
        <span class="project-place">${p.place}</span>
      </figcaption>
    </figure>
  </li>
`).join('');
