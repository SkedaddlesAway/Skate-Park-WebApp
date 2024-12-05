import {createApp} from 'vue';

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
      gallery:[
        {
          image: { path: "images\Art\aravil-apples.png", alt:" "}
        },
        {
          image: { path: "images\Art\GOGO GRAFFITI.png", alt:" "}
        },
        {
          image: { path: "images\Art\logogo-lineart.png", alt:" "}
        },
        {
          image: { path: " images\Art\gogolittleones.png", alt:" "}
        },
        {
          image: { path: "images\Art\gogoxsol-poster.png", alt:" "}
        },
        {
          image: { path: "images\Art\cehui-fish.png", alt:" "}
        },
        {
          image: { path: "images\Art\office.png ", alt:" "}
        },
        {
          image: { path: "images\Art\merchshop.png", alt:" "}
        },
        {
          image: { path: " images\Art\gogoslow.png", alt:" "}
        },
        {
          image: { path: "images\Art\entrance.png", alt:" "}
        },
        {
          image: { path: "images\Art\safety.png", alt:" "}
        },
        {
          image: { path: "images\Art\visitorcenter.png", alt:" "}
        },
        {
          image: { path: "images\Art\winslow-icecream.png", alt:" "}
        },
//        {
//          images: { path: " ", alt:" "}
//        },        
      ]

    };
  },
});

app.mount("body");