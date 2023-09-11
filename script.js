
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

