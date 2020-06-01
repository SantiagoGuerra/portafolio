import { elementFromString } from '../utils/index';

export default function Header(data) {




const name = elementFromString(`<h1 class="title">${data.name.toUpperCase()}</h1>`);
const role = elementFromString(`<p class="subtitle">${data.role}</p>`);
const description = elementFromString(`<p class="text-center description">${data.description}</p>`);
const socialMedia = elementFromString(`${data.social.map(socialNetwork => `<ul class="social-icons"><li> <a href="${socialNetwork.url}" class="social-link ${socialNetwork.brand}" target="_BLANK"> <i data-feather="${socialNetwork.brand}"></i> </a> </li></ul>`)}`)
const messageMe = elementFromString('<a href="mailto:guerrasantiago19@gmail.com" class="btn" target="_BLANK">Message me!</a>')


  const header = document.createElement('header')
  header.classList.add('header')

  header.appendChild(name);
  header.appendChild(role);
  header.appendChild(description);
  header.appendChild(socialMedia);


  

  return header;
}