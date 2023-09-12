import * as React from "react";
import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import MinesweeperTable from "./components/MinesweeperTable";
import View_Table from "./components/view_table";

let Table = [];
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    Table.push(
      {
        number: Math.floor(Math.random() * 10) + 1,
        position: i === 0 ? i + j : (i * 10) + j
      }
    )
  }
}

function nowResetGame() {
  var table = document.getElementById("myTable");
  for (var i = 0, row; row = table.rows[i]; i++) {
    for (var j = 0, col; col = row.cells[j]; j++) {
      col.innerHTML = "";
    }
  }
  Table = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      Table.push(
        {
          number: Math.floor(Math.random() * 10) + 1,
          position: i === 0 ? i + j : (i * 10) + j
        }
      )
    }
  }
}

  function ResetGame() {
    var table = document.getElementById("myTable");
    for (let i = 0, row; row = table.rows[i]; i++) {
      for (let j = 0, col; col = row.cells[j]; j++) {
        col.innerHTML = getNumber(Table[(i * 10) + j].number);
      }
    }
  }

  function getNumber(integer) {
    if (integer === 1) {
      return "1️⃣";
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

  function generate_table(setClick) {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    for (let y = 0; y < 10; y++) {
      const row = document.createElement("tr");
      for (let x = 0; x < 10; x++) {
        const cell = document.createElement("td");
        const cellText = document.createTextNode("");
        cell.addEventListener("click", () => {
          if (cell.textContent === "") {
            cell.textContent = getNumber(Table[(10 * y) + x].number)
            if (Table[(10 * y) + x].number === 10) {
              setClick((10 * y) + x);
              //resetGame();
            }
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
    tbl.setAttribute("border", "1");
    //tblBody.setAttribute("id", "1");
    document.body.appendChild(tbl);

    //   let element = document.getElementById("1");
    // element.remove();
  }

  function DrawTable({ setClick }) {
    const rows = [];
    for (let i = 0; i < 10; i++) {
      const cells = [];
      for (let j = 0; j < 10; j++) {
        cells.push(<td key={j} id={(i * 10) + j} onClick={() => {
          if (document.getElementById((i * 10) + j).textContent === "") {
            document.getElementById((i * 10) + j).textContent = getNumber(Table[(i * 10) + j].number)
            if (Table[(i * 10) + j].number === 10) { ResetGame(setClick) }
          } else {
            document.getElementById((i * 10) + j).textContent = "";
          }
        }}></td>);
      }
      rows.push(<tr key={i}>{cells}</tr>);
    }
    return (
      <table id="myTable">
        <tbody>{rows}</tbody>
      </table>
    );
  }


  function App() {
    // ["💣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"];

    //View_Table(Table);
    let newTable = [];
    for (let i = 1; i <= 10; i++) {
      let currentRow = [];
      for (let j = 1; j <= 10; j++) {
        currentRow.push(
          {
            number: Math.floor(Math.random() * 10) + 1,
            position: i === 0 ? i + j : (i * 10) + j
          }
        )
      }
      newTable.push(currentRow);
    }

    const [click, setClick] = useState([]);
    useEffect(() => {
    }, [click]);
    return (
      <div className="Movie App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <center>
            <h2>Minesweeper</h2>
          </center>

          <DrawTable />
          <button onClick={ () => {nowResetGame()}}>Reset Game</button>
          
        </header>
      </div>
    );
  }

  export default App;
