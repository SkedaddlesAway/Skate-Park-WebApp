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
      
    };
  },
});

app.mount("body");