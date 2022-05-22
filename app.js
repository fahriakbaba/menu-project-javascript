const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-2.jpeg",
    desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-3.jpeg",
    desc: `Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-5.jpeg",
    desc: `Franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-7.jpeg",
    desc: `Carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-8.jpeg",
    desc: `On it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-9.jpeg",
    desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "https://raw.githubusercontent.com/john-smilga/javascript-basic-projects/master/08-menu/final/images/item-10.jpeg",
    desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//selected menu section
const sectionContainer = document.getElementById("section-center");
const btnContainer = document.getElementById("btn-container");

/*  it doesn't work every browser 
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});  */
document.body.onload = function () {
  loadFirstPage();
}
function loadFirstPage() {
  displayMenuItems(menu);
  displayMenuButtons();
}

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(item => {
    return (`<section class="col-4 d-flex justify-content-between p-3 rounded-2">
   <img  style="border: 4px solid #B28B61" class="me-4 rounded rounded-3" width="200" src=${item.img} alt=${item.title}>
   <article>
     <div class="d-flex justify-content-between border-bottom mb-3 gray padding-bottom">
       <h4 class="my-auto text-dark text-capitalize">${item.title}</h4>
       <p class="my-auto bold" style="color:#c48745;">$${item.price}</p>
     </div>
     <p class="text-justify text-muted justify-text">${item.desc}</p>
   </article>
</section>`);
  });
  // to use .join() method
  displayMenu = displayMenu.join("");
  sectionContainer.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ["all"])
  //console.log("Categories category: ", categories);
  const categoryBtns = categories.map(item => {
    return `<button type="button" class="filter-btn" data-id="${item}">${item}</button>`
  });
  btnContainer.innerHTML = categoryBtns.join("");
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => btn.addEventListener("click", (e) => {
    const category = e.currentTarget.dataset.id;
    //console.log("e.currentTarget.dataset.id: ", category);
    //console.log("e.currentTarget: ", e.currentTarget);
    const menuCategory = menu.filter(menuItem => {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displayMenuItems(menu);
    }
    else {
      displayMenuItems(menuCategory);
    }
  })
  )
}