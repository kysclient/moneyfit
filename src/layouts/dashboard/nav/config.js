// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

// const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;
const icon = (name) => {
  switch (name) {
    case 'meet': return <>โค๏ธ</>
    default: return <>๐ค</>
  }
}
const navConfig = [
  {
    title: '๋ชจ์',
    path: '/meet',
    icon: icon('meet'),
  },
  {
    title: '๋ด ๋ชจ์',
    path: '/met',
    icon: icon('ic_analytics'),
  },
  {
    title: '์๋ํ๊ธฐ',
    path: '/we',
    icon: icon('ic_user'),
  },
  {
    title: 'ํ๋ณดํ๊ธฐ',
    path: '/promotion',
    icon: icon('ic_cart'),
  },
  // {
  //   title: 'blog',
  //   path: '/home/blog',
  //   icon: icon('ic_blog'),
  // },
  {
    title: '๋ก๊ทธ์ธ',
    path: '/login',
    icon: icon('ic_lock'),
  },
  {
    title: '์๋ฌ ํ์ด์ง',
    path: '/404',
    icon: icon('ic_disabled'),
  },
];

export default navConfig;
