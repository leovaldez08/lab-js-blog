class Blog {
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
  constructor(title, detail){
    this.title = title
    this.detail = detail
  }
  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute("id","blog-title");
    console.log(title_card);
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`
