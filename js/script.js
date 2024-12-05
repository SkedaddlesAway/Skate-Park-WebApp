//Project idea and tutorial from https://github.com/john-smilga/javascript-basic-projects/tree/master/08-menu
const menu =[
    {
        id: 1,
        category: "Art",
        price: 5,
        img: "images/Art/aravil-apples.png",
        alt: ''
    },
    {
        id: 3,
        category: "Art",
        price: 5,
        img: "images/Art/logogo-lineart.png",
        alt: ''
    },
    {
        id: 4,
        category: "Art",
        price: 5,
        img: "images/Art/gogolittleones.png",
        alt: ''
    },
    {
        id: 5,
        category: "Art",
        price: 5,
        img: "images/Art/yes-gogo.png",
        alt: ''
    },
    {
        id: 6,
        category: "Art",
        price: 5,
        img: "images/Art/merchshop.png",
        alt: ''
    },
    {
        id: 7,
        category: "Art",
        price: 5,
        img: "images/Art/office.png",
        alt: ''
    },
    {
        id: 8,
        category: "Art",
        price: 5,
        img: "images/Art/IMG_9816.PNG",
        alt: ''
    }, 
    {
        id: 9,
        category: "Events",
        price: 5,
        img: "images/pexels-zachtheshoota-1769553.jpg",
        alt: ''
    },
    {
        id: 10,
        category: "Events",
        price: 5,
        img: "images/pexels-greg-melow-414051575-15026027.jpg",
        alt: ''
    },
    {
        id: 11,
        category: "Events",
        price: 5,
        img: "images/pexels-koprivakart-3315961.jpg",
        alt: ''
    },
    {
        id: 13,
        category: "Events",
        price: 5,
        img: "images/pexels-cottonbro-10131805.jpg",
        alt: ''
    }, 
    {
        id: 14, 
        category: "Park", 
        price: 5, 
        img: "images/Revit/court.png", 
        alt: '' 
    }, 
    { 
        id: 15, 
        category: "Park", 
        price: 5, img: "images/Revit/camera.png", 
        alt: '' 
    }, 
    {
         id: 16, 
         category: "Park", 
         price: 5, img: "images/Revit/littlePit.png", 
         alt: ''         
    }, 
    {
         id: 17, 
         category: "Park", 
         price: 5, 
         img: "images/Revit/interPit.png", 
         alt: '' 
    }, 
    { 
        id: 18, 
        category: "Park", 
        price: 5, 
        img: "images/Revit/PROPIT.png", 
        alt: '' 
    } 
    
  ];
  
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      return `
            <img src=${item.img} alt=${item.title} class="photo" />`;
    });
    displayMenu = displayMenu.join("");
  
    sectionCenter.innerHTML = displayMenu;
  }
  
  //Menu Button Functionality
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
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }

let app = Vue.createApp({
    data() {
      return {
        activePage: 0,
        pages: [
          {
            link: { text: "Home", url: "index.html" }
          },
          {
            link: { text: "About", url: "about.html" }
          },
          {
            link: { text: "Events", url: "events.html" }
          },
          {
            link: { text: "Gallery", url: "gallery.html" }
          },
          {
            link: { text: "Our Sponsors", url: "sponsors.html" }
            
          },
        ],
      };
    },
});
  