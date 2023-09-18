const collectionName = "userdata";
const DBObj = window.indexedDB;
let a=+localStorage.getItem("number")||1

const request = DBObj.open("db-v1", 1);

request.onupgradeneeded = (event) => {
  const db = event.target.result;
  if (!db.objectStoreNames.contains(collectionName)) {
    db.createObjectStore(collectionName, {
      keyPath: "id",
      autoIncrement: true,
    });
  }
};

document.getElementById("myForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const dbpromise = DBObj.open("db-v1", 1);
  dbpromise.onsuccess = (event) => {
    const db = dbpromise.result;
    const tx = db.transaction(collectionName, "readwrite");
    const userModel = tx.objectStore(collectionName);
    let a=+localStorage.getItem("number")||1


    const user = {
      id:  a,
      name: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    
    const addUserRequest = userModel.put(user);
    
    addUserRequest.onsuccess = () => {
      a++
      localStorage.setItem('number', a);
      tx.oncomplete = () => {
        location.reload()
        db.close();
      };
      alert("usersucessfull added");
    };
    addUserRequest.onerror = () => {
      alert("Failed to add user");
    };
  };
});

function getData() {
  const dbpromise = DBObj.open("db-v1", 1);

  dbpromise.onsuccess = () => {
    const db = dbpromise.result;
    const tx = db.transaction(collectionName, "readonly");
    const userData = tx.objectStore(collectionName);
    const user = userData.getAll();

    user.onsuccess = (result) => {
      const userInfo = result.srcElement.result;

      for (const { id, name, email, password } of userInfo) {
        const paragraph = document.createElement("ul");

        paragraph.innerHTML = `
        
        <li>${id}</li>
        <li>${name}</li>
        <li>${email}</li>
        <li>${password}</li>
        <li onClick="edit(${id}) " id='edit'>edit</li>
        <li onClick="remove(${id})" id='remove'>remove</li>
        
         `;

        const container = document.getElementById("indexDB-data");
        container.appendChild(paragraph);
      }
    };
  };
}

function edit() {
  const dbPromise = DBObj.open("db-v1", 1);
  dbPromise.onsuccess = () => {
    const db = dbPromise.result;

    const tx = db.transaction(collectionName, "readwrite");
    const data = tx.objectStore(collectionName);
    const request = data.put({});
  };

  alert("edit");
}
function remove(id) {
  const dbPromise = DBObj.open("db-v1", 1);

  dbPromise.onsuccess = () => {
    const db = dbPromise.result;

    const tx = db.transaction(collectionName, "readwrite");
    const data = tx.objectStore(collectionName);
    const user = data.delete(id);
    location.reload();
  };

  // request.onsuccess = () => {
  //   alert("successfully delete data");
  //   dbPromise.close();
  // };
}

window.onload = () => {
  getData();
};
