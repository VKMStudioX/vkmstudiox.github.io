import { Project } from "./projects";

export const projectsDef: Project[] = [
    {
      id: 1,
      name: "EMS",
      slides: [
        {
          path: "projects/ems",
          image: "ems-1",
          alt: "ems screen 1",
          title: "title",
        },
        {
          path: "projects/ems",
          image: "ems-2",
          alt: "alt-2",
          title: "title-2",
        },
        {
          path: "projects/ems",
          image: "ems-3",
          alt: "alt-3",
          title: "title-3",
        },
      ],
      content: {
        title: "EMS",
        content:
          "Employee Management System. Its application for reserving the absences and holidays for user and admin management. Also, the admin can create the users, and can add the notifications of the absences. That app was part a recruitment for one company. For the login credentials please contact me or its included in my CV when I sent application to yours company.",
        links: [
            {
                id: 1,
                type: 'Front-End',
                icon: 'github',
                class: 'project-content__link-icon',
                link: 'https://github.com/VKMStudioX/ems_vue'
            },
            {
                id: 2,
                type: 'Back-End',
                icon: 'github',
                class: 'project-content__link-icon',
                link: 'https://github.com/VKMStudioX/ems_api'
            },
            {
                id: 3,
                type: 'WWW',
                icon: 'www',
                class: 'project-content__link-icon',
                link: 'https://ems-vue.herokuapp.com/'
            }
        ],
      },
      technologies: [
        {
          icon: "vue",
          class: "project-technologies__item--icon",
        },
        {
          icon: "laravel",
          class: "project-technologies__item--icon",
        },
        {
          icon: "sass",
          class: "project-technologies__item--icon",
        },
        {
          icon: "css3",
          class: "project-technologies__item--icon",
        },
        {
          icon: "html5",
          class: "project-technologies__item--icon",
        },
        {
          icon: "js",
          class: "project-technologies__item--icon",
        },
        {
          icon: "php",
          class: "project-technologies__item--icon",
        },
      ],
    },
  {
      id: 2,
      name: "Unspash Image Search",
      slides: [
        {
          path: "projects/ups",
          image: "ups-1",
          alt: "alt",
          title: "title",
        },
        {
          path: "projects/ups",
          image: "ups-2",
          alt: "alt-2",
          title: "title-2",
        },
        {
          path: "projects/ups",
          image: "ups-4",
          alt: "alt-3",
          title: "title-3",
        },
      ],
      content: {
        title: "Unsplash",
        content:
          "This is the Unsplash image search portal, which used the Unsplash api, unsplash autocomplete and get results of images from their database.",
        links: [
            {
                id: 1,
                type: 'Front-End',
                icon: 'github',
                class: 'project-content__link-icon',
                link: 'https://github.com/VKMStudioX/ups-vue'
            },
            {
                id: 3,
                type: 'WWW',
                icon: 'www',
                class: 'project-content__link-icon',
                link: 'https://ups-vue.herokuapp.com/'
            }
        ],
      },
      technologies: [
        {
          icon: "vue",
          class: "project-technologies__item--icon",
        },
        {
          icon: "react",
          class: "project-technologies__item--icon",
        },
        {
          icon: "sass",
          class: "project-technologies__item--icon",
        },
        {
          icon: "css3",
          class: "project-technologies__item--icon",
        },
        {
          icon: "html5",
          class: "project-technologies__item--icon",
        },
        {
          icon: "js",
          class: "project-technologies__item--icon",
        },
      ],
    },
    {
      id: 3,
      name: "Desert Shop",
      slides: [
        {
          path: "projects/ds",
          image: "ds-1",
          alt: "alt",
          title: "title",
        },
        {
          path: "projects/ds",
          image: "ds-2",
          alt: "alt-2",
          title: "title-2",
        },
        {
          path: "projects/ds",
          image: "ds-3",
          alt: "alt-3",
          title: "title-3",
        },
      ],
      content: {
        title: "Desert Shop",
        content:
          "This is the MERN Stack project represent the music shop with top albums of 2020 year in stoner/psychedelic/pagan folk genres. You can browse the best albums, log in/register with firebase, filter products, buy and rate the albums. After buy, you get the Spotify access to this album on product site.",
        links: [
            {
                id: 1,
                type: 'Front-End',
                icon: 'github',
                class: 'project-content__link-icon',
                link: 'https://github.com/VKMStudioX/desert-shop-client'
            },
            {
                id: 2,
                type: 'Back-End',
                icon: 'github',
                class: 'project-content__link-icon',
                link: 'https://github.com/VKMStudioX/desert-shop-server'
  
            },
            {
                id: 3,
                type: 'WWW',
                icon: 'www',
                class: 'project-content__link-icon',
                link: 'http://desert-shop.herokuapp.com/'
            }
        ],
      },
      technologies: [
        {
          icon: "react",
          class: "project-technologies__item--icon",
        },
        {
          icon: "express",
          class: "project-technologies__item--icon",
        },
        {
          icon: "nodejs",
          class: "project-technologies__item--icon",
        },
        {
          icon: "mongodb",
          class: "project-technologies__item--icon",
        },
        {
          icon: "sass",
          class: "project-technologies__item--icon",
        },
        {
          icon: "css3",
          class: "project-technologies__item--icon",
        },
        {
          icon: "html5",
          class: "project-technologies__item--icon",
        },
        {
          icon: "js",
          class: "project-technologies__item--icon",
        },
      ],
    },
    {
      id: 4,
      name: "pCOWeb",
      slides: [
        {
          path: "projects/pcoweb",
          image: "pcoweb-image-full-hd-1",
          alt: "alt",
          title: "title",
        },
        {
          path: "projects/pcoweb",
          image: "pcoweb-image-full-hd-2",
          alt: "alt-2",
          title: "title-2",
        },
        {
          path: "projects/pcoweb",
          image: "pcoweb-image-full-hd-3",
          alt: "alt-3",
          title: "title-3",
        },
      ],
      content: {
        title: "pCOWeb",
        content:
          "Visualization of Carel programmable controller for HVAC. Used for monitoring and controlling the AHU Unit or other compressors, cool nodes. Typically the user can get the temperatures measures, device status and alarms, views the charts of these, and customizing performance by parameters.",
        links: [
            {
                id: 3,
                type: 'WWW',
                icon: 'www',
                class: 'project-content__link-icon',
                link: 'https://vkm-pcoweb-ng.herokuapp.com/'
            }
        ],
      },
      technologies: [
        {
          icon: "react",
          class: "project-technologies__item--icon",
        },
        {
          icon: "vue",
          class: "project-technologies__item--icon",
        },
        {
          icon: "angular",
          class: "project-technologies__item--icon",
        },
        {
          icon: "express",
          class: "project-technologies__item--icon",
        },
        {
          icon: "sass",
          class: "project-technologies__item--icon",
        },
        {
          icon: "css3",
          class: "project-technologies__item--icon",
        },
        {
          icon: "html5",
          class: "project-technologies__item--icon",
        },
        {
          icon: "js",
          class: "project-technologies__item--icon",
        },
      ],
    },
    {
      id: 5,
      name: "Portfolio",
      slides: [
        {
          path: "projects/portf",
          image: "portf-1",
          alt: "alt",
          title: "title",
        },
      ],
      content: {
        title: "Portfolio",
        content:
          "This portfolio. At this moment its only one non-commercial Vite (Vitesse) project, its kinda small but there are some nice features of these (including pinia store, generated pages and layouts, internationalisation, swiper, script setup, typescript and many others new technologies).",
        links: [
          {
                id: 1,
                type: 'Front-End',
                icon: 'github',
                class: 'project-content__link-icon',
                link: 'https://github.com/VKMStudioX/desert-shop-client'
            },
            {
                id: 2,
                type: 'WWW',
                icon: 'www',
                class: 'project-content__link-icon',
                link: 'https://vkm-pcoweb-ng.herokuapp.com/'
            }
        ],
      },
      technologies: [
        {
          icon: "vue",
          class: "project-technologies__item--icon",
        },
        {
          icon: "vite",
          class: "project-technologies__item--icon",
        },
        {
          icon: "sass",
          class: "project-technologies__item--icon",
        },
        {
          icon: "css3",
          class: "project-technologies__item--icon",
        },
        {
          icon: "html5",
          class: "project-technologies__item--icon",
        },
        {
          icon: "js",
          class: "project-technologies__item--icon",
        },
      ],
    },
  ]