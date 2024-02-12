// import { CategoryService } from "./services/CategoryService.js";

// const categoryService = new CategoryService();

// categoryService
//   .getAll("https://northwind.vercel.app/api/categories")
//   .then((categories) => {
//     // const root = document.getElementsByTagName("muratvuranok");
//     const root = document.getElementById("root");
//     const table = document.createElement("table");
//     table.classList.add("table", "table-hover");

//     const headers = ["ID", "Name", "Description"];
//     const thead = document.createElement("thead");
//     const tbody = document.createElement("tbody");

//     const headerRow = document.createElement("tr");
//     headers.forEach((headerText) => {
//       const th = document.createElement("th");
//       th.innerText = headerText;
//       headerRow.appendChild(th);
//     });
//     thead.appendChild(headerRow);

//     categories.forEach((category) => {
//       const row = document.createElement("tr");
//       const rowData = [
//         category.id.toString(),
//         category.name,
//         category.description,
//       ];

//       rowData.forEach((data) => {
//         const td = document.createElement("td");
//         td.innerText = data;
//         row.appendChild(td);
//       });

//       tbody.appendChild(row);
//     });

//     table.appendChild(thead);
//     table.appendChild(tbody);
//     root?.appendChild(table); // kesinlike boş gelmeyecek öğrenci sözü :)
//   });
// // ! -> zorunlu alan
// // ? -> opsiyonel alan

// //  Tapşırıq -> CustomHtmlUIElement sınıf yaradın isim opsiyonlel
// //  bu sınıf içerisinde geriye HTMLTableElement döndüren bir metot olmalıdır.
// //  dataSource özelliğine listeyi verdiğinizde ekranda render edecek.
// class Deneme {
//   HTMLTableElement(): HTMLTableElement {
//     return document.createElement("table");
//   }
// }


// class CustomHtmlUIElement {
//   dataSource: any[];

//   constructor(dataSource: any[]) {
//       this.dataSource = dataSource;
//   }

//   renderTable(): HTMLTableElement {
//       const table = document.createElement("table");

//       // Tablo başlıklarını oluştur
//       const headerRow = table.insertRow();
//       for (const key in this.dataSource[0]) {
//           const headerCell = document.createElement("th");
//           headerCell.textContent = key;
//           headerRow.appendChild(headerCell);
//       }

//       // Verileri tabloya ekle
//       this.dataSource.forEach(dataItem => {
//           const row = table.insertRow();
//           for (const key in dataItem) {
//               const cell = row.insertCell();
//               cell.textContent = dataItem[key];
//           }
//       });

//       return table;
//   }
// }




// const customElement = new CustomHtmlUIElement(data);
// const tableElement = customElement.renderTable();
// document.body.appendChild(tableElement);


async function fetchData(): Promise<any[]> {
 
  const response = await fetch("https://northwind.vercel.app/api/categories");
  console.log(response);
  
  const data = await response.json();
  return data;

}

fetchData().then(datas=>{
const customElement = new CustomHtmlUIElement(datas);
const tableElement = customElement.renderTable();
document.body.appendChild(tableElement); 
})




class CustomHtmlUIElement {
dataSource: any[];

constructor(dataSource: any[]) {
  this.dataSource = dataSource;
}

renderTable(): HTMLTableElement {
  const table = document.createElement("table");

  // Tablede başlıklari olusturur
  const headerRow = table.insertRow();
  for (const key in this.dataSource[0]) {
   
      const headerCell = document.createElement("th");
      headerCell.textContent = key;
      headerRow.appendChild(headerCell);
  }


  this.dataSource.forEach(dataItem => {

    
      const row = table.insertRow();

      
      for (const key in dataItem) {
        
        
          const cell = row.insertCell();
          console.log(cell);
          
          cell.textContent = dataItem[key];
      }
  });

  return table;
}
}




