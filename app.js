const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./imgs/1.avif",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./imgs/2.avif",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./imgs/3.avif",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./imgs/4.avif",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./imgs/5.avif",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./imgs/6.avif",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./imgs/7.avif",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./imgs/8.avif",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./imgs/9.avif",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./imgs/10.avif",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// console.log(btnContainer);

//load item
window.addEventListener("DOMContentLoaded", () => {
  displayMenu(menu);
  displayMenuButtons();
});

//show Menu
function displayMenu(MenuItems) {
  let displayMenu = MenuItems.map((item) => {
    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  //   console.log(displayMenu);
  sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  //   console.log(categories);
  const categoryBtns = categories
    .map((category) => {
      return ` <button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;

  // filter Button
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) return { menuItem };
      });
      if (category === "all") {
        displayMenu(menu);
      } else {
        displayMenu(menuCategory);
      }
    });
  });
}
