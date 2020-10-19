document.getElementById("calendarSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("countryInput").value;
  const value1= document.getElementById("yearInput").value;

if ((value === "") || (value1===""))
return;

  const url = "https://calendarific.com/api/v2/holidays" + "?&api_key=7c3902719b6d5b205cd4b957528240a6b393c042" + "&country=" + value + "&year=" + value1;
  fetch(url)
    .then(function(response) {
      //console.log(response);
      return response.json();
    }).then(function(json) {
      console.log(json);

          let location = 0;
          let calendar = "<table>";

          console.log(json.response.holidays);
          calendar+= "<tr>";
          calendar+="<th>";
          calendar += "<p>Name</p>";
          calendar+="</td>";

          calendar+="<th>";
          calendar += "<p>Description</p>";
          calendar+="</th>";

          calendar+="<th>";
          calendar += "<p>Date</p>";
          calendar+="</th>";
          calendar+= "</tr>";


          for (let row=0; row<json.response.holidays.length; row++) {
            console.log("working");
              calendar+= "<tr>";
              calendar+="<td>";
              calendar += "<p>" + json.response.holidays[location].name +"</p>";
              calendar+="</td>";

              calendar+="<td>";
              calendar += "<p> " + json.response.holidays[location].description +"</p>";
              calendar+="</td>";

              calendar+="<td>";
              calendar += "<p>" + json.response.holidays[location].date.iso +"</p>";
              calendar+="</td>";

              location= location+1;
              calendar+= "</tr>";
          }
          document.getElementById("calendarResults").innerHTML = calendar;
          });
});
