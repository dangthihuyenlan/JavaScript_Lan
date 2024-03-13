var arrroom = [
  {
      id: 1,
      loai: "Hotel VIP",
      gio: "TC1025011BA",
      dem: "250.000",
      des: "Vip", // Wrap Vip in quotes
      image:" https://fantasea.vn/wp-content/uploads/2017/10/SG-DL-bynight-1024x683.jpg",
  },
  {
      id: 2,
      loai: "hotel VIP1",  
      gio: "3h",
      dem: "250.000",
      des: "Vip", // Wrap Vip in quotes
      image:"https://tse2.mm.bing.net/th?id=OIP.UvrVscvayoTFT7DEgLAJ5QHaEo&pid=Api&P=0&h=180",
  },
  
  // Add other room objects here
];

function save() {
  var a = {
      id: document.getElementById('id').value,
      loai: document.getElementById('loai').value,
      gio: document.getElementById('gio').value,
      dem: document.getElementById('dem').value,
      des: document.getElementById('des').value,
      image: document.getElementById('image').value
  }

  arrroom.push(a);
  console.log(a);
}

function showroom() {
  var html = '';
  for (var i = 0; i < arrroom.length; i++) {
      html += "<tr>";
      html += "<td>" + (i + 1) + "</td>";
      html += "<td>" + arrroom[i].id + "</td>";
      html += "<td>" + arrroom[i].loai + "</td>";
      html += "<td>" + arrroom[i].gio + "</td>";
      html += "<td>" + arrroom[i].dem + "</td>";
      html += "<td>" + arrroom[i].des + "</td>";
      html += "<td><img src='" + arrroom[i].image + "' alt='Image' style='width: 60px; height: 60px;'></td>";
      html += "<td><button onclick='edit(" + i + ")'>Edit</button><button onclick='remove(" + i + ")'>Delete</button></td>";
      html += "</tr>";
  }
  document.getElementById('room').innerHTML = html;
}

function reset() {
  document.getElementById('id').value = '';
  document.getElementById('loai').value = '';
  document.getElementById('gio').value = '';
  document.getElementById('dem').value = '';
  document.getElementById('des').value = '';
  document.getElementById('image').value = '';
}

function edit(index) {
  var room = arrroom[index];
  var row = document.getElementById('room').rows[index]; // +1 to adjust for header row

  row.cells[1].innerHTML = "<input type='text' id='edit-id' value='" + room.id + "'>";
  row.cells[2].innerHTML = "<input type='text' id='edit-loai' value='" + room.loai + "'>";
  row.cells[3].innerHTML = "<input type='text' id='edit-gio' value='" + room.gio + "'>";
  row.cells[4].innerHTML = "<input type='text' id='edit-dem' value='" + room.dem + "'>";
  row.cells[5].innerHTML = "<input type='text' id='edit-des' value='" + room.des + "'>";
  row.cells[6].innerHTML = "<input type='text' id='edit-image' value='" + room.image + "'>";
  row.cells[7].innerHTML = "<button onclick='saveEdit(" + index + ")'>Save</button>";
}

function saveEdit(index) {
  arrroom[index].id = document.getElementById('edit-id').value;
  arrroom[index].loai = document.getElementById('edit-loai').value;
  arrroom[index].gio = document.getElementById('edit-gio').value;
  arrroom[index].dem = document.getElementById('edit-dem').value;
  arrroom[index].des = document.getElementById('edit-des').value;
  arrroom[index].image = document.getElementById('edit-image').value;
  showroom();
}

function remove(index) {
  arrroom.splice(index, 1);
  showroom();
}
function searchRoom() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("room");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1]; // Chỉ tìm kiếm theo cột "Số Phòng"
      if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
}