import { elementFromString } from '../utils/index';

export default function Header(data) {
  const socialMediaHelper = data => {
    const list = data.map(socialNetwork => `<li> <a href="${socialNetwork.url}" class="social-link ${socialNetwork.brand}" target="_BLANK"> <i class="ri-${socialNetwork.brand}-line"></i> </a> </li>`).join(' ');

    console.log(list);
    return list;
  };


  const name = elementFromString(`<h1 class="title">${data.name.toUpperCase()}</h1>`);
  const role = elementFromString(`<p class="subtitle">${data.role}</p>`);
  const description = elementFromString(`<p class="text-center description">${data.description}</p>`);
  const socialMedia = elementFromString(`<ul class="social-icons">${socialMediaHelper(data.social)}</ul>`);


  const messageMe = elementFromString('<a href="mailto:guerrasantiago19@gmail.com" class="btn" target="_BLANK">Message me!</a>');


  const header = document.createElement('header');
  header.classList.add('header');

  header.appendChild(name);
  header.appendChild(role);
  header.appendChild(description);
  header.appendChild(socialMedia);
  header.appendChild(messageMe);


  return header;
}