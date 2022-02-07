import kaiportCover from '../../public/images/kaiport_cover.jpg';
import kaiportImage1 from '../../public/images/kaiport_image1.jpg';
import kaiportImage2 from '../../public/images/kaiport_image2.jpg';
import kaiportImage3 from '../../public/images/kaiport_image3.jpg';
import kaiportImage4 from '../../public/images/kaiport_image4.jpg';

import championreitCover from '../../public/images/championreit_cover.jpg';
import championreitImage1 from '../../public/images/championreit_image1.jpg';

import tcgCover from '../../public/images/tcg_cover.jpg';
import tcgImage1 from '../../public/images/tcg_image1.jpg';
import tcgImage2 from '../../public/images/tcg_image2.jpg';
import tcgImage3 from '../../public/images/tcg_image3.jpg';
import tcgImage4 from '../../public/images/tcg_image4.jpg';

import panasonicCover from '../../public/images/panasonic_cover.jpg';
import panasonicImage1 from '../../public/images/panasonic_image1.jpg';
import panasonicImage2 from '../../public/images/panasonic_image2.jpg';
import panasonicImage3 from '../../public/images/panasonic_image3.jpg';
import panasonicImage4 from '../../public/images/panasonic_image4.jpg';

import facerecoganizeCover from '../../public/images/facerecoganize_cover.jpg';
import facerecoganizeImage1 from '../../public/images/facerecoganize_image1.jpg';

import bravobeerCover from '../../public/images/bravobeer_cover.jpg';
import bravobeerImage1 from '../../public/images/bravobeer_image1.jpg';

import actwgCover from '../../public/images/actwg_cover.jpg';
import actwgImage1 from '../../public/images/actwg_image1.jpg';

import silubrCover from '../../public/images/silubr_cover.jpg';
import silubrImage1 from '../../public/images/silubr_image1.jpg';
import silubrImage2 from '../../public/images/silubr_image2.jpg';
import silubrImage3 from '../../public/images/silubr_image3.jpg';
import silubrImage4 from '../../public/images/silubr_image4.jpg';

export const CATEGORY = {
  design: 'Web Design',
  development: 'Web Development',
  animation: 'Animation',
  other: 'Other',
};

export const WORKS = [
  {
    id: 1,
    name: 'Kaiport',
    slug: 'kaiport',
    url: 'http://demo.grnet.com.tw/kaiport/demo/',
    categories: [
      CATEGORY.design,
      CATEGORY.development,
    ],
    description: 'Kaiport is a Taiwan manufacture company since 1984. For over 30 years, they have been making optical frames and innovative product requests from customers. Develop over 500 styles every season. The website is focused on the product page, people can choose patterns and colors. The website also provides the member, to create and save the product.',
    credit: [
      {
        name: 'Design',
        description: 'Groad Web Service, Tani Huang',
      },
      {
        name: 'Development',
        description: 'Groad Web Service, Tani Huang',
      },
      {
        name: 'Skills',
        description: 'Adobe Photoshop, CSS, HTML, JQuery',
      },
      {
        name: 'Year',
        description: '2016',
      },
    ],
    coverImage: kaiportCover,
    images: [
      kaiportImage1, kaiportImage2, kaiportImage3, kaiportImage4,
    ],
    isFeatured: true,
  },
  {
    id: 2,
    name: 'ChampionREIT',
    slug: 'championreit',
    url: 'https://www.championreit.com/',
    categories: [
      CATEGORY.development,
    ],
    description: 'Champion REIT is a Hong Kong real estate investment trust, based in Asia.',
    credit: [
      {
        name: 'Design',
        description: 'DigiSalad Limit',
      },
      {
        name: 'Development',
        description: 'DigiSalad Limit, Tani Huang, Hanson Wu',
      },
      {
        name: 'Skills',
        description: 'Sketch, CSS, HTML, Vue, Nuxt',
      },
      {
        name: 'Year',
        description: '2019',
      },
    ],
    coverImage: championreitCover,
    images: [
      championreitImage1,
    ],
    isFeatured: true,
  },
  {
    id: 3,
    name: 'Tainan Member Centre',
    slug: 'tainan-member-centre',
    url: 'https://cititb.tainan.gov.tw/',
    categories: [
      CATEGORY.design,
      CATEGORY.development,
    ],
    description: '',
    credit: [
      {
        name: 'Design',
        description: 'TOL Studio, Tani Huang',
      },
      {
        name: 'Development',
        description: 'Tainan Goverment, TOL Studio, Tani Huang',
      },
      {
        name: 'Skills',
        description: 'Sketch, CSS, HTML, JavaScript',
      },
      {
        name: 'Year',
        description: '2020',
      },
    ],
    coverImage: tcgCover,
    images: [
      tcgImage1, tcgImage2, tcgImage3, tcgImage4,
    ],
    isFeatured: true,
  },
  {
    id: 4,
    name: 'Panasonic Animation',
    slug: 'panasonic-animation',
    url: 'https://www.plshk.panasonic.hk/sites/all/modules/custom/web_animation/html/build/index.html',
    categories: [
      CATEGORY.development,
      CATEGORY.animation,
    ],
    description: '',
    credit: [
      {
        name: 'Design',
        description: 'DigiSalad Limit',
      },
      {
        name: 'Development',
        description: 'DigiSalad Limit, Tani Huang',
      },
      {
        name: 'Skills',
        description: 'CSS, HTML, JQuery',
      },
      {
        name: 'Year',
        description: '2018',
      },
    ],
    coverImage: panasonicCover,
    images: [
      panasonicImage1, panasonicImage2, panasonicImage3, panasonicImage4,
    ],
    isFeatured: true,
  },
  {
    id: 5,
    name: 'Face recognize project',
    slug: 'face-recognize-project',
    url: 'https://www.b-futures.net/face_ai_camera_multi.html',
    categories: [
      CATEGORY.design,
      CATEGORY.development,
    ],
    description: '',
    credit: [
      {
        name: 'Design',
        description: 'B-Futures, Tani Huang',
      },
      {
        name: 'Development',
        description: 'B-Futures, Tani Huang',
      },
      {
        name: 'Skills',
        description: 'Adobe Photoshop, CSS, HTML, JQuery, Gulp, Java (Spring Boot), Thymeleaf',
      },
      {
        name: 'Year',
        description: '2020',
      },
    ],
    coverImage: facerecoganizeCover,
    images: [
      facerecoganizeImage1,
    ],
    isFeatured: true,
  },
  {
    id: 6,
    name: 'Bravo Beer',
    slug: 'bravo-beer',
    url: 'http://www.bravobeer.com.tw/',
    categories: [
      CATEGORY.development,
    ],
    description: '',
    credit: [
      {
        name: 'Design',
        description: 'Groad Web Service',
      },
      {
        name: 'Development',
        description: 'Tani Huang',
      },
      {
        name: 'Skills',
        description: 'Adobe Photoshop, CSS, HTML, JQuery',
      },
      {
        name: 'Year',
        description: '2017',
      },
    ],
    coverImage: bravobeerCover,
    images: [
      bravobeerImage1,
    ],
    isFeatured: false,
  },
  {
    id: 7,
    name: '大地假期旅遊網',
    slug: 'actwg',
    url: 'https://www.actwg.com.tw/',
    categories: [
      CATEGORY.development,
    ],
    description: '',
    credit: [
      {
        name: 'Design',
        description: 'Groad Web Service',
      },
      {
        name: 'Development',
        description: 'Tani Huang',
      },
      {
        name: 'Skills',
        description: 'Adobe Photoshop, CSS, HTML, JQuery',
      },
      {
        name: 'Year',
        description: '2016',
      },
    ],
    coverImage: actwgCover,
    images: [
      actwgImage1,
    ],
    isFeatured: false,
  },
  {
    id: 8,
    name: 'Silubr 施鉑',
    slug: 'silubr',
    url: 'https://www.silubr.com.tw/',
    // url: 'http://demo.grnet.com.tw/silubr/gia/',
    categories: [
      CATEGORY.development,
    ],
    description: '',
    credit: [
      {
        name: 'Design',
        description: 'Groad Web Service',
      },
      {
        name: 'Development',
        description: 'Tani Huang',
      },
      {
        name: 'Skills',
        description: 'Adobe Photoshop, CSS, HTML, JQuery',
      },
      {
        name: 'Year',
        description: '2016',
      },
    ],
    coverImage: silubrCover,
    images: [
      silubrImage1, silubrImage2, silubrImage3, silubrImage4,
    ],
    isFeatured: false,
  },
];
