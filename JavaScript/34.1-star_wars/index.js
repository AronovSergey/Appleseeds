const table = document.createElement('table');
table.classList.add('t01');

table.innerHTML = `<tr>
    <th colspan="5">Star Wars</th>
</tr>
<tr>
    <th>Name</th>
    <th>Height</th> 
    <th>Hair Color</th>
    <th>Planet Name</th> 
    <th>Planet population</th>
</tr>
`;

document.body.appendChild(table);

const baseEndpoint = 'https://swapi.dev/api';
const peopleEndpoint = `${baseEndpoint}/people/`;


async function fetchCharacters() {
    const response = await fetch(peopleEndpoint);
    const data = await response.json();

    
    data.results.forEach(async (person) => {
        const homeworldResponse = await fetch(person.homeworld);
        const homeworldData = await homeworldResponse.json();

        const row = document.createElement('tr');

        row.innerHTML = `<td>${person.name}</td>
        <td>${person.hair_color}</td>
        <td>${person.height}</td>
        <td>${homeworldData.name}</td>
        <td>${homeworldData.population}</td>`;

        table.appendChild(row);
    });
}

fetchCharacters();