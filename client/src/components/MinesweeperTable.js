import { Tab, tableBodyClasses } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import * as React from 'react';
let Table = [];
let BombLocations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        Table.push(
            {
                bomb: j === i ? true : false,
                number: j === i ? 0 : Math.floor(Math.random() * 9) + 1,
                row: j === 0 ? true : false
            }
        )
    }
}

function getNumber(integer) {
    if (integer === 1) {
        return "1";
    } else if (integer === 2) {
        return "2️⃣";
    } else if (integer === 3) {
        return "3️⃣";
    } else if (integer === 4) {
        return "4️⃣";
    } else if (integer === 5) {
        return "5️⃣";
    } else if (integer === 6) {
        return "6️⃣";
    } else if (integer === 7) {
        return "7️⃣";
    } else if (integer === 8) {
        return "8️⃣";
    } else if (integer === 9) {
        return "9️⃣";
    } else {
        return "💣";
    }
}

// function generateGrid(rows, cols) {
//     var grid = "<table>";
//     for (let row = 1; row <= rows; row++) {
//         grid += "<tr>";
//         for (let col = 1; col <= cols; col++) {
//             grid += <td onClick="myFunction()">
//                 <script>
//                     {function myFunction() {
//                         if (document.getElementById((row * 10) + col).innerHTML === "") {
//                             document.getElementById((row * 10) + col).innerHTML = getNumber(Table[(10 * row) + col].number)
//                         } else {
//                             document.getElementById((row * 10) + col).innerHTML = ""
//                         }
//                     }}
//                 </script></td>

//             }
//         grid += "</tr>";
//     }
//     return grid;
// }
// document.getElementsByName( "td" ).click(function() {
//     var index = $( "td" ).index( this );
//     var row = Math.floor( ( index ) / 10) + 1;
//     var col = ( index % 10 ) + 1;
//     if ($( this ).text === "") {
//     $( this ).text( getNumber(Table[(10 * row) + col].number));
//     } else {
//         $( this ).text = "";
//     }
// });

function generate_table(setClick) {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    for (let y = 0; y < 10; y++) {
        const row = document.createElement("tr");
        for (let x = 0; x < 10; x++) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode("");
            cell.addEventListener("click", () => {
                setClick((10 * y) + x);
                if (cell.textContent === "") {
                    cell.textContent = getNumber(Table[(10 * y) + x].number)
                } else {
                    cell.textContent = "";
                }
            })
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "1");
}

export default function MinesweeperTable({setClick}) {
    return (
        <div>
            {generate_table(setClick)}
        </div>
    )
}