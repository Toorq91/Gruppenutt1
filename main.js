const data = [
    { name: "Audun N", trait: "Rask", team: "Team 1" },
    { name: "Aleksander Agledal", trait: "Kul", team: "Team 1" },
    { name: "Kim T", trait: "Trivelig", team: "Team 1" },
    { name: "Thomas H", trait: "Snill", team: "Team 1" },
    { name: "Per Ivar K", trait: "Ærlig", team: "Team 1" },
    { name: "Tommy M", trait: "Jordnær", team: "Team 1" },
    { name: "Aneel P S G", trait: "Reflektert", team: "Team 2" },
    { name: "Thor Christer H", trait: "Inspirerende", team: "Team 2" },
    { name: "Kristoffer G", trait: "Fokusert", team: "Team 2" },
    { name: "William Buwembo", trait: "Entusiastisk", team: "Team 2" },
    { name: "Hakan Erol", trait: "Elegant", team: "Team 2" },
    { name: "Adrian A F N", trait: "Flittig", team: "Team 2" },
    { name: "Christopher S", trait: "Lojal", team: "Team 3" },
    { name: "Hanne Sofie A", trait: "Kreativ", team: "Team 3" },
    { name: "Emma M", trait: "Taktfull", team: "Team 3" },
    { name: "Marcus H J", trait: "Ansvarsfull", team: "Team 3" },
    { name: "Miguel F", trait: "Selvstendig", team: "Team 3" },
    { name: "Aleksander Antonsen", trait: "Oppmuntrende", team: "Team 3" },
    { name: "Thomas K", trait: "Fornuftig", team: "Team 4" },
    { name: "Frode O J", trait: "Engasjert", team: "Team 4" },
    { name: "Rune S", trait: "Troverdig", team: "Team 4" },
    { name: "Robin S", trait: "Behersket", team: "Team 4" },
    { name: "Kenneth J", trait: "Hjelpsom", team: "Team 4" },
    { name: "Thomas L", trait: "Målrettet", team: "Team 4" },
    { name: "Viktor Elliot D", trait: "Optimistisk", team: "Team 5" },
    { name: "Edvinas Ziogas", trait: "Oppfinnsom", team: "Team 5" },
    { name: "Chrisoffer J", trait: "Strukturert", team: "Team 5" },
    { name: "Nicolai R", trait: "Rettferdig", team: "Team 5" },
    { name: "Henrik B", trait: "Ambisiøs", team: "Team 5" },
    { name: "William Thorkildsen", trait: "Besluttsom", team: "Team 5" },
    { name: "Karl Morten Lunna", trait: "Ydmyk", team: "Team 6" },
    { name: "Thomas T", trait: "Tilittsfull", team: "Team 6" },
    { name: "Aleksander K", trait: "Inspirerende", team: "Team 6" },
    { name: "Stian F", trait: "Oppriktig", team: "Team 6" },
    { name: "Lisa H", trait: "Imøtekommende", team: "Team 6" },
    { name: "Christopher K", trait: "Nysjerrig", team: "Team 6" },
];

function populateTable(data) {
    const tableBody = document.getElementById("studentsTable").querySelector("tbody");
    tableBody.innerHTML = ""; 

    let previousTeam = ""; 

    data.forEach((student, index) => {
        if (student.team !== previousTeam && index !== 0) {
            
            const emptyRow = document.createElement("tr");
            emptyRow.classList.add("empty-row"); 
            emptyRow.innerHTML = '<td colspan="3"></td>';
            tableBody.appendChild(emptyRow);
        }

        const row = document.createElement("tr");

        const teamCell = document.createElement("td");
        teamCell.textContent = student.team;

        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;

        const traitCell = document.createElement("td");
        traitCell.textContent = student.trait;

        row.appendChild(teamCell);
        row.appendChild(nameCell);
        row.appendChild(traitCell);

        tableBody.appendChild(row);

        previousTeam = student.team; 
    });
}

        document.addEventListener("DOMContentLoaded", () => {
            populateTable(data);
        });