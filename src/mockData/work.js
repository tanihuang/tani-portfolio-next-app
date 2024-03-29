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

import aeonCover from '../../public/images/aeon_cover.jpg';
import aeonImage1 from '../../public/images/aeon_image1.jpg';

import ontoloCover from '../../public/images/ontolo_cover.jpg';
import ontoloImage1 from '../../public/images/ontolo_image1.jpg';

import ricohCover from '../../public/images/ricoh_cover.jpg';
import ricohImage1 from '../../public/images/ricoh_image1.jpg';

import tbbCover from '../../public/images/tbb_cover.jpg';
import tbbImage1 from '../../public/images/tbb_image1.jpg';

import mystartrCover from '../../public/images/mystartr_cover.jpg';
import mystartrImage1 from '../../public/images/mystartr_image1.jpg';

import wynnCover from '../../public/images/wynn_cover.jpg';
import wynnImage1 from '../../public/images/wynn_image1.jpg';

import megabankCover from '../../public/images/megabank_cover.jpg';
import megabankImage1 from '../../public/images/megabank_image1.jpg';

import cookingpalCover from '../../public/images/cookingpal_cover.jpg';
import cookingpalImage1 from '../../public/images/cookingpal_image1.jpg';


export const CATEGORY = {
  design: 'Web Design',
  development: 'Web Development',
  animation: 'Animation',
  other: 'Other',
};

export const WORKS = [
  {
    id: 1,
    name: 'MyStartr Crowdfunding Platform',
    slug: 'mystartr',
    url: 'https://www.mystartr.com/',
    categories: [
      CATEGORY.development,
    ],
    description: '',
    credit: [
      {
        name: 'Design',
        description: 'MyStartr Crowdfunding Platform',
      },
      {
        name: 'Development',
        description: 'Mystartr Sdn Bhd, Tani Huang',
      },
      {
        name: 'Technical',
        description: 'CSS, HTML, JQuery, PHP',
      },
      {
        name: 'Year',
        description: '2022',
      },
    ],
    coverImage: mystartrCover,
    images: [
      mystartrImage1,
    ],
    isFeatured: true,
  },
  {
    id: 2,
    name: 'Taiwan Business Bank',
    slug: 'tbb',
    url: 'https://ebank.tbb.com.tw/nb3/login',
    categories: [
      CATEGORY.development,
    ],
    description: '',
    credit: [
      {
        name: 'Design',
        description: 'Taiwan Business Bank',
      },
      {
        name: 'Development',
        description: 'Taiwan Business Bank, Tani Huang',
      },
      {
        name: 'Technical',
        description: 'CSS, HTML, JQuery, Spring Boot',
      },
      {
        name: 'Year',
        description: '2021',
      },
    ],
    coverImage: tbbCover,
    images: [
      tbbImage1,
    ],
    isFeatured: true,
  },
  {
    id: 3,
    name: '永利澳門－酒店訂房系統',
    slug: 'wynn',
    url: '',
    categories: [
      CATEGORY.development,
    ],
    description: '',
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
        name: 'Technical',
        description: 'CSS, HTML, Vue, Nuxt',
      },
      {
        name: 'Year',
        description: '2019',
      },
    ],
    coverImage: wynnCover,
    images: [
      wynnImage1,
    ],
    isFeatured: true,
  },
  {
    id: 4,
    name: 'CookingPal',
    slug: 'cookingpal',
    url: 'https://www.cookingpal.com/',
    categories: [
      CATEGORY.development,
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
        name: 'Technical',
        description: 'CSS, HTML, Vue, Nuxt',
      },
      {
        name: 'Year',
        description: '2019',
      },
    ],
    coverImage: cookingpalCover,
    images: [
      cookingpalImage1,
    ],
    isFeatured: false,
  },
  {
    id: 5,
    name: '兆豐銀行－「房貸E把兆」房屋估價網站',
    slug: 'megabank',
    url: 'https://estimation.megabank.com.tw/',
    categories: [
      CATEGORY.development,
    ],
    description: '',
    credit: [
      {
        name: 'Design',
        description: 'DigiSalad Limit',
      },
      {
        name: 'Development',
        description: 'DigiSalad Limit',
      },
      {
        name: 'Technical',
        description: 'CSS, HTML, JQuery',
      },
      {
        name: 'Year',
        description: '2018',
      },
    ],
    coverImage: megabankCover,
    images: [
      megabankImage1,
    ],
    isFeatured: false,
  },
  {
    id: 6,
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
        name: 'Technical',
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
    isFeatured: false,
  },
  {
    id: 7,
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
        name: 'Technical',
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
    id: 8,
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
        name: 'Technical',
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
    isFeatured: false,
  },
  {
    id: 9,
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
        name: 'Technical',
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
    id: 10,
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
        name: 'Technical',
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
    id: 11,
    name: 'Silubr 施鉑',
    slug: 'silubr',
    url: 'https://www.silubr.com.tw/',
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
        name: 'Technical',
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
  {
    id: 12,
    name: 'Aeon Credit Service M Bhd',
    slug: 'aeon',
    url: 'https://www.aeon.com.hk/tc/index.html',
    categories: [
      CATEGORY.development,
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
        name: 'Technical',
        description: 'CSS, HTML, JQuery',
      },
      {
        name: 'Year',
        description: '2018',
      },
    ],
    coverImage: aeonCover,
    images: [
      aeonImage1,
    ],
    isFeatured: true,
  },
  {
    id: 13,
    name: 'ONTOLO 朗濤| 鷹君集團',
    slug: 'ontolo',
    url: 'https://www.ontolo.com.hk/landing',
    categories: [
      CATEGORY.development,
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
        name: 'Technical',
        description: 'CSS, HTML, VUE, NUXT',
      },
      {
        name: 'Year',
        description: '2019',
      },
    ],
    coverImage: ontoloCover,
    images: [
      ontoloImage1,
    ],
    isFeatured: true,
  },
  {
    id: 14,
    name: '理光香港 Ricoh',
    slug: 'ricoh',
    url: 'https://www.ricoh.com.hk/',
    categories: [
      CATEGORY.development,
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
        name: 'Technical',
        description: 'CSS, HTML, JQuery',
      },
      {
        name: 'Year',
        description: '2018',
      },
    ],
    coverImage: ricohCover,
    images: [
      ricohImage1,
    ],
    isFeatured: true,
  },
  {
    id: 15,
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
        name: 'Technical',
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
    id: 16,
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
        name: 'Technical',
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
];
