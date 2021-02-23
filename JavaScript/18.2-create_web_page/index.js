const logo = document.createElement('h1');
logo.textContent = 'A Logo';

const navbar = document.createElement('ul');
navbar.style.listStyle = 'none';
navbar.style.display = 'flex';

const li1 = document.createElement('li');
li1.style.margin = '5px';
const a1 = document.createElement('a');
a1.textContent = 'About';
a1.href = "#";
li1.appendChild(a1);
navbar.appendChild(li1);

const li2 = document.createElement('li');
li2.style.margin = '5px';
const a2 = document.createElement('a');
a2.textContent = 'Contact';
a2.href = "#";
li2.appendChild(a2);
navbar.appendChild(li2);

const paragraph = document.createElement('p');
paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est obcaecati tenetur quidem inventore animi? Illum, voluptatibus et commodi expedita, natus iste nesciunt ut ea officia, magni nemo quo nisi? Eligendi aliquid molestiae laborum cupiditate hic fugit. Eius accusantium cum quia deserunt fuga ipsa exercitationem qui minima. At in expedita libero?';

document.body.appendChild(logo);
document.body.appendChild(navbar);
document.body.appendChild(paragraph);

