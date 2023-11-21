
document.addEventListener('DOMContentLoaded', function () {
    getData();
    // console.log("calling");
}) 

let data;

async function getData() {
    const response = await fetch(
      `https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2023-01`
    );
    data = await response.json();
    // console.log(data);
    }


function filterData (){
    let s=document.getElementById("input").value;
    // console.log(s);

    function filterAndLimit(data, category, limit) {
        const filteredData = data.filter(item => item.category === category);
        const limitedData = filteredData.slice(0, limit);
        return limitedData;
      }

    const filteredAndLimitedData = filterAndLimit(data, s, 1000);
    console.log(filteredAndLimitedData);

    // var filteredHtml = filteredAndLimitedData.map(function(person) {
    //     // console.log(person)
    //     return (`<div id="ans"> <div id="ans2"> ${person.location.street.name},</div><div id="ans3">${person.outcome_status.date},</div><div id="ans4">${person.outcome_status.category}</div></div>`);
      
    //     //experiment code
    //   });
      function generateTableHTML(data) {
        var tableHTML = '<table border="5" color="purple"><thead><tr><th>Street Name</th><th>Date</th><th>Status</th></tr></thead><tbody>';
  
      filteredAndLimitedData.forEach(function (item) {
          tableHTML += '<tr>';
          tableHTML += '<td id="ans2">' + item.location.street.name + '</td>';
          tableHTML += '<td id="ans3">' + item.outcome_status.date + '</td>';
          tableHTML += '<td id=ans4>' + item.outcome_status.category + '</td>';
          tableHTML += '</tr>';
        });
  
        tableHTML += '</tbody></table>';
        //console.log(tableHTML);
        return tableHTML;
      }
  
      // // Get the container element
      var tableContainer = document.getElementById('table-container');
      
      // // Set the innerHTML of the container with the generated table HTML
      tableContainer.innerHTML = generateTableHTML(data);
       
      // var resultContainer = document.getElementById('result');
      // resultContainer.innerHTML = filteredHtml.join('');
}   

// function filterDataByCategory(data1, cat) {
//     return data1.filter((item )=>
//         {
//             console.log(item);
//             return item.category === cat;
//         } );
//   }

//   const filteredData = filterDataByCategory(data, 'burglary');
//   console.log(filteredData) ;


