// const res = fetch("https://jsonplaceholder.typicode.com/users");
// res
//   .then((data) => data.json())
//   .then((data1) => {
//     for (var i = 0; i < data1.length; i++) {
//       const div = document.createElement("div");
//       div.innerHTML = `<div class="row row-cols-1 row-cols-md-3 ">
//         <div class="col">
//             <div class"cards">
//               <h5 class="card-title">${data1[i].name}</h5>
//               <p class="card-text"><b>username: ${data1[i].username}</b></p>
//               <p class="card-text"><b>email: ${data1[i].email}</b></p>
//               <p class="card-text"><b>address: ${data1[i].address}</b></p>
//               <p class="card-text"><b>street: ${data1[i].street}</b></p>
//               <p class="card-text"><b>suite: ${data1[i].suite}</b></p>
//               <p class="card-text"><b>city: ${data1[i].city}</b></p>
//               <p class="card-text"><b>zipcode: ${data1[i].zipcode}</b></p>
//               <p class="card-text"><b>geo: ${data1[i].geo}</b></p>
//               <p class="card-text"><b>lat: ${data1[i].lat}</b></p>
//               <p class="card-text"><b>lng: ${data1[i].lng}</b></p>
//               <p class="card-text"><b>phone: ${data1[i].phone}</b></p>
//               <p class="card-text"><b>website: ${data1[i].website}</b></p>
//               <p class="card-text"><b>company: ${data1[i].company}</b></p>
//               <p class="card-text"><b>name: ${data1[i].name}</b></p>
//               <p class="card-text"><b>catchPhrase: ${data1[i].catchPhrase}</b></p>
//               <p class="card-text"><b>bs: ${data1[i].bs}</b></p>
//             </div>
//         </div>
//         </div>`;
//       document.body.append(div);
//     }
//   });

//  const res = fetch("https://jsonplaceholder.typicode.com/users")
//  res.then((data)=>data.json()).then((data1)=>{
//     for(var i=0;i<data1.length;i++){
//         const div = document.createElement("div")
//         div.innerHTML=`${data1[i].name}`
//         document.body.append(div)
//     }

//  });

 /*<div> <div class="card text-bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div></div>*/

   const res = fetch("https://jsonplaceholder.typicode.com/users")
 res.then((data)=>data.json()).then((data1)=>{
    for(var i=0;i<data1.length;i++){
        console.log(data1[i])
        const div=document.createElement("div")
        div.innerHTML=` <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Name:${data1[i].name}</h5>
              <p class="card-text"><b>Username</b>:${data1[i].username}</p>
                <p class="card-text"><b>email</b>:${data1[i].email}</p>
                <p class="card-text"><b>Address</b>:${data1[i].address.city}</p>
                <p class="card-text"><b>Geo</b>:${data1[i].address.geo.lat},${data1[i].address.geo.lng}</p>
                <p class="card-text"><b>Company:Bs</b> :${data1[i].company.bs}</p>
                <p class="card-text"><b>Catchphrase</b>:${data1[i].company.catchPhrase}</p>
                <p class="card-text"><b>Company name</b>:${data1[i].company.name}</p>
                <p class="card-text"><b>website</b>:${data1[i].website}</p>
                <p class="card-text"><b>Street</b>:${data1[i].address.street}</p>
                <p class="card-text"><b>Address</b>:${data1[i].address.city}</p>
                <p class="card-text"><b>Zipcode</b>:${data1[i].address.zipcode}</p>
               
            </div>
          </div>
        </div>`
      document.body.append(div)
    }
   
 });

