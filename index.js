var form = `<div>
<div class="form-group">
  <label for="name">Name</label>
  <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter your Name">
</div>
<div class="form-group mt-3">
  <label for="email">Email</label>
  <input type="email" class="form-control" id="email" placeholder="Enter your Email">
</div>

<button type="submit" class="btn btn-primary mt-3"  onclick=save()>Save</button>
</div>`;

function table() {

  let table = `<table class="table">
    <thead>
      <tr>
        <th class="col-1">No</th>
        <th class="col-3">Name</th>
        <th class="col-4">Email</th>
        <th class="col-2">Edit</th>
        <th class="col-2">Delete</th>
      </tr>
    </thead>
    <tbody>`;

  for (let i = 0; i < details.length; i++) {
    table = table + `<tr>
  <td>${i + 1}</td>
  <td>${details[i].Name}</td>
  <td>${details[i].Email}</td>
  <td><button type="dutton" class="btn btn-warning"  onclick=edit(${i})>Edit</button></td>
  <td><button type="dutton" class="btn btn-danger"  onclick="deleteData(${i})">Delete</button></td>
</tr> `
  };
  table = table + `</tbody >
  </table > `;

  document.getElementById("table").innerHTML = table;
}
document.getElementById("form").innerHTML = form;
details = [];
table();
function save() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  if (name.value == 0) {
    alert("Name and Email is Recqurid");
    return
  }

  let data = {
    Name: name.value,
    Email: email.value,
  };

  details.push(data)

  console.log(details)
  // console.log(email.value)
  table();

  name.value = "";
  email.value = "";
}

function deleteData(index) {

  details.splice(index, 1)
  table()
  console.log('delete work')
  console.log(details)
};
function edit(index) {

  let editForm = `<div>
<div class="form-group">
  <label for="newName">Update Name</label>
  <input type="text" value="${details[index].Name}" class="form-control" id="newName" aria-describedby="emailHelp" placeholder="Update your Name">
</div>
<div class="form-group mt-3">
  <label for="newEmail">Update Email</label>
  <input type="email" value="${details[index].Email}" class="form-control" id="newEmail" placeholder="Update your Email">
</div>

<button type="submit" class="btn btn-primary mt-3"  onclick="update(${index})">Update</button>
</div> `;

  document.getElementById("form").innerHTML = editForm;
  console.log('edit work');

};

function update(index) {
  let newName = document.getElementById("newName");
  let newEmail = document.getElementById("newEmail");

  details[index] = {
    Name: newName.value,
    Email: newEmail.value,
  };
  table();
  document.getElementById("form").innerHTML = form;
  console.log('update work')
  console.log(details)
}