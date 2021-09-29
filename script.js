                                                            // creation of main container
let body=document.getElementsByTagName('body')[0];
let mainContainer=document.createElement("div");
mainContainer.setAttribute('class', 'mainContainer');
document.body.appendChild(mainContainer);
                                                               // creation of Nav Bar
                                                               //due to some issues with nav bar these kind of shoetcuts used
let navBar=document.createElement("nav");
navBar.setAttribute('class', 'navbar navbar-expand-lg navbar-dark bg-dark')
navBar.innerHTML=` <a class="navbar-brand" href="#">Breaking Bad</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="#season1">Season-1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#season2">Season-2</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#season3">Season-3</a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#charecters">Characters</a>
</li>
<li class="nav-item">
<a class="nav-link" href="#quates">Quotes</a>
</li>
  </ul>
</div>`
mainContainer.appendChild(navBar);
                                                                    // creation of image container
let imageContainer=document.createElement("div");
imageContainer.setAttribute('id', 'imageContainer')
mainContainer.appendChild(imageContainer);
                                                                       // insertion of image 
let mainImage = document.createElement("img");
mainImage.setAttribute('src','assets/images/wp6794318-breaking-bad-4k-wallpapers.jpg')
imageContainer.appendChild(mainImage);
                                                                        //creation of season 1 div
let season1MainDiv = document.createElement("div");
season1MainDiv.setAttribute('class', 'season1MainDiv container')
season1MainDiv.setAttribute('id','season1')
let h21= document.createElement("h2");
h21.setAttribute('class', 'season1MainDivh2');
let h2txt1=document.createTextNode('Season 1')
h21.appendChild(h2txt1)
season1MainDiv.appendChild(h21);
mainContainer.appendChild(season1MainDiv);
let dataContainer1=document.createElement("div");
dataContainer1.setAttribute('class', 'dataContainer1');
season1MainDiv.appendChild(dataContainer1);
                                                                        //creation of season 2 div
let season2MainDiv = document.createElement("div");
season2MainDiv.setAttribute('class', 'season2MainDiv container');
season2MainDiv.setAttribute('id','season2')
let h22= document.createElement("h2");
h22.setAttribute('class', 'season2MainDivh2');
let h2txt2=document.createTextNode('Season 2')
h22.appendChild(h2txt2)
season2MainDiv.appendChild(h22);
mainContainer.appendChild(season2MainDiv);
let dataContainer2=document.createElement("div");
dataContainer2.setAttribute('class', 'dataContainer1');
season2MainDiv.appendChild(dataContainer2);
                                                                        //creation of season 2 div
let season3MainDiv = document.createElement("div");
season3MainDiv.setAttribute('class', 'season3MainDiv container');
season3MainDiv.setAttribute('id','season3')
let h23= document.createElement("h2");
h23.setAttribute('class', 'season2MainDivh23');
let h2txt3=document.createTextNode('Season 3')
h23.appendChild(h2txt3)
season3MainDiv.appendChild(h23);
mainContainer.appendChild(season3MainDiv);
let dataContainer3=document.createElement("div");
dataContainer3.setAttribute('class', 'dataContainer1');
season3MainDiv.appendChild(dataContainer3);
                                                                                        //charecter box
let charMainDiv = document.createElement("div");
charMainDiv.setAttribute('class', 'charMainDiv container');
charMainDiv.setAttribute('id','charecters')
let h2c= document.createElement("h2");
h2c.setAttribute('class', 'charMainDivh2c');
let h2txtc=document.createTextNode('Characters')
h2c.appendChild(h2txtc)
charMainDiv.appendChild(h2c);
mainContainer.appendChild(charMainDiv);
let dataContainerC=document.createElement("div");
dataContainerC.setAttribute('class', 'dataContainer1');
charMainDiv.appendChild(dataContainerC);
                                                                                        //charecter box
let quatesMainDiv = document.createElement("div");
quatesMainDiv.setAttribute('class', 'quatesMainDiv container');
quatesMainDiv.setAttribute('id','quates')
let h2q= document.createElement("h2");
h2q.setAttribute('class', 'quatesMainDivh2q');
let h2txtq=document.createTextNode('Quotes')
h2q.appendChild(h2txtq)
quatesMainDiv.appendChild(h2q);
mainContainer.appendChild(quatesMainDiv);
let dataContainerq=document.createElement("div");
dataContainerq.setAttribute('class', 'dataContainer1');
quatesMainDiv.appendChild(dataContainerq);

//season1 content Box & fetch data
async function fetchapi1(){
        try{
            let response = await fetch(`https://www.breakingbadapi.com/api/episodes`);
            if(response.status==200){
                let data = await response.json();
                console.log(data);
                data.map(a=>{
                    if(a.season==='1'){
                        let episodeContainer = document.createElement("div");
                        episodeContainer.setAttribute("class", 'episodeContainer card');
                        let img= document.createElement("img");
                        img.setAttribute("class", 'card-img-top');
                        img.setAttribute("src",'assets/images/season1.jpg');
                        episodeContainer.appendChild(img);
                        let cardDiv1 = document.createElement("div");
                        cardDiv1.setAttribute("class", 'card-body');
                        let h5= document.createElement("h5");
                        h5.setAttribute("class", 'card-title');
                        h5.innerHTML=`<b><u>${a.title}<u></b>`
                        cardDiv1.appendChild(h5);
                        let cardP= document.createElement("p");
                        cardP.setAttribute('class','card-text');
                        cardP.innerHTML=`<b>Episode: </b>${a.episode_id}`
                        cardDiv1.appendChild(cardP);
                        let cardP1= document.createElement("p");
                        cardP1.setAttribute('class','card-text');
                        cardP1.innerHTML=`<b>Released On: </b>${a.air_date}`
                        cardDiv1.appendChild(cardP1);
                        episodeContainer.appendChild(cardDiv1);
                        dataContainer1.appendChild(episodeContainer)
                    }
                    if(a.season==='2'){
                        let episodeContainer = document.createElement("div");
                        episodeContainer.setAttribute("class", 'episodeContainer card');
                        let img= document.createElement("img");
                        img.setAttribute("class", 'card-img-top');
                        img.setAttribute("src",'assets/images/season2.jpg');
                        episodeContainer.appendChild(img);
                        let cardDiv1 = document.createElement("div");
                        cardDiv1.setAttribute("class", 'card-body');
                        let h5= document.createElement("h5");
                        h5.setAttribute("class", 'card-title');
                        h5.innerHTML=`<u>${a.title}<u>`
                        cardDiv1.appendChild(h5);
                        let cardP= document.createElement("p");
                        cardP.setAttribute('class','card-text');
                        cardP.innerHTML=`<b>Episode: </b>${a.episode_id}`
                        cardDiv1.appendChild(cardP);
                        let cardP1= document.createElement("p");
                        cardP1.setAttribute('class','card-text');
                        cardP1.innerHTML=`<b>Released On: </b>${a.air_date}`
                        cardDiv1.appendChild(cardP1);
                        episodeContainer.appendChild(cardDiv1);
                        dataContainer2.appendChild(episodeContainer)
                    }
                    if(a.season==='3'){
                        let episodeContainer = document.createElement("div");
                        episodeContainer.setAttribute("class", 'episodeContainer card');
                        let img= document.createElement("img");
                        img.setAttribute("class", 'card-img-top');
                        img.setAttribute("src",'assets/images/season1.jpg');
                        episodeContainer.appendChild(img);
                        let cardDiv1 = document.createElement("div");
                        cardDiv1.setAttribute("class", 'card-body');
                        let h5= document.createElement("h5");
                        h5.setAttribute("class", 'card-title');
                        h5.innerHTML=`<u>${a.title}<u>`
                        cardDiv1.appendChild(h5);
                        let cardP= document.createElement("p");
                        cardP.setAttribute('class','card-text');
                        cardP.innerHTML=`<b>Episode: </b>${a.episode_id}`
                        cardDiv1.appendChild(cardP);
                        let cardP1= document.createElement("p");
                        cardP1.setAttribute('class','card-text');
                        cardP1.innerHTML=`<b>Released On: </b>${a.air_date}`
                        cardDiv1.appendChild(cardP1);
                        episodeContainer.appendChild(cardDiv1);
                        dataContainer3.appendChild(episodeContainer)
                    }
                })
            }else{
                throw new Error("Failed to fetch")
            }
        }catch(err){
            console.log(err.message);
        }
    }
    fetchapi1();
    async function fetchapi2(){
      try{
          let response = await fetch(`https://www.breakingbadapi.com/api/characters`);
          if(response.status==200){
              let data = await response.json();
              // console.log(data);
              data.map(a=>{
                if(a.char_id<20){
                  let episodeContainer = document.createElement("div");
                  episodeContainer.setAttribute("class", 'episodeContainer card');
                  let img= document.createElement("img");
                  img.setAttribute("class", 'card-img-top');
                  img.setAttribute("src",a.img);
                  episodeContainer.appendChild(img);
                  let cardDiv1 = document.createElement("div");
                  cardDiv1.setAttribute("class", 'card-body');
                  let h5= document.createElement("h5");
                  h5.setAttribute("class", 'card-title');
                  h5.innerHTML=`<u>${a.name}<u>`
                  cardDiv1.appendChild(h5);
                  let cardP= document.createElement("p");
                  cardP.setAttribute('class','card-text');
                  cardP.innerHTML=`<b>Portrayed As:</b> ${a.portrayed}`
                  cardDiv1.appendChild(cardP);
                  let cardP1= document.createElement("p");
                  cardP1.setAttribute('class','card-text');
                  cardP1.innerHTML=`<b>Occupation:</b> ${a.occupation[0]}`
                  cardDiv1.appendChild(cardP1);
                  episodeContainer.appendChild(cardDiv1);
                  dataContainerC.appendChild(episodeContainer)
                }
               
              })
          }else{
              throw new Error("Failed to fetch")
          }
      }catch(err){
          console.log(err.message);
      }
  }
  fetchapi2();
    async function fetchapi3(){
        try{
            let response = await fetch(`https://www.breakingbadapi.com/api/quotes`);
            if(response.status==200){
                let data = await response.json();
                console.log(data);
                data.map(a=>{
                  let div = document.createElement('div');
                  div.setAttribute('class','alert alert-dark');
                  div.setAttribute('role','alert')
                  div.innerHTML=`"<b>${a.quote}</b>"<address>-${a.author}</address>`;
                  dataContainerq.appendChild(div);

                })
            }else{
                throw new Error("Failed to fetch")
            }
        }catch(err){
            console.log(err.message);
        }
    }
    fetchapi3();