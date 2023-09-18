// const drag = document.getElementsByClassName("droparea")[0];
const drag = document.getElementsByClassName("droparea")[0];

drag.addEventListener("dragover", (e) => {
  e.preventDefault();
  drag.classList.add("hover");
});
// files
// :
// FileList {length: 0}
// items
// :
// DataTransferItemList {length: 0}
// types
// :
// []

drag.addEventListener("dragleave", (e) => {
  e.preventDefault();

  drag.classList.remove("hover");
});
drag.addEventListener("drag", (e) => {
  e.preventDefault();

  drag.classList.add("valid");
});

drag.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log(e)
var thumnail=e.dataTransfer
  var image = e.dataTransfer.files[0];
  let type = image.type

  console.log(type)
  if (type == "image/jpeg" || type == "JPG" || type == "img/jpeg") {
    return upload(image,thumnail);
  } else {
    drag.setAttribute("class", "droparea invalid");
    drag.innerText = "Invalid File Format!";
    return false;
  }
});

const upload = (image,thumnail) => {
  drag.setAttribute("class", "droparea valid");
 ;
 let imag1=new Image()
 imag1.src="./16.JPG"
  drag.innerHTML = "added" + image.name+ thumnail.setDragImage(imag1,10,10);
};

// const droparea = document.querySelector(".droparea");

// droparea.addEventListener("dragover", (e) => {
//   e.preventDefault();
//   droparea.classList.add("hover");
// });

// droparea.addEventListener("dragleave", () => {
//   droparea.classList.remove("hover");

// });

// droparea.addEventListener("drop", (e) => {
//   e.preventDefault();

//   const image = e.dataTransfer.files;
//   const type = image.type;

//   // if (
//   //   type == "image/png" ||
//   //   type == "image/jpg" ||
//   //   type == "image/jpeg"
//   // ) {
//   //   return upload(image);
//   // } else {
//     // droparea.setAttribute("class", "droparea invalid");
//     // droparea.innerText = "Invalid File Format!";
//     return false;
//   // }
// });

// // const upload = (image) => {
// //   droparea.setAttribute("class", "droparea valid");
  //  droparea.innerText = "Added " + image.name;
// // };
