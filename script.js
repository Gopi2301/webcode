var url = "https://www.anapioficeandfire.com/api?page=1&pageSize=50";

async function reqFetch(url) {
  var urlFetch = await fetch(url);
  var urlData = await urlFetch.json();
  console.log(urlData);
  //  ------------------- Books Fetch --------------
  var urlFetch2 = await fetch(urlData.books);
  var books = await urlFetch2.json();

  // ------------------ DOM Manipulation --------------------
  for (i of books) {
    var card = document.createElement("p");
   
    
    card.innerHTML = `<div class="card" ><h3 class ="book-title" >${i.name}</h3>
    <ul class="list-group list-group-flush">
    <li class="card_li book-isbn">isbn : ${i.isbn}</li>
    <li class="card_li book-pages">Number of Pages : ${i.numberOfPages}</li>
    <li class="card_li book-author">Authors : ${i.authors}</li>
    <li class="card_li book-author">Characters : ${charactersName}</li>
    

    </ul>
    

    

    </ul>
    <div class="card-footer text-muted"><small>
    ${i.publisher} & ${i.released}</small>
    
  </div>
    
    </div>
    `;
    // ---------- characters Fetch------------------

    for (var j = 0; j < 5; j++) {
      var urlFetch3 = await fetch(i.characters[j]);
      var charactersData = await urlFetch3.json();
      var charactersName = charactersData.name;
      // console.log(charactersName)
    }
      
      
      var parent = document.querySelector("#main");
      parent.append(card);
    }
  }


reqFetch(url);


