import { MenuEntry } from 'pikachus-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
 // {
  //  label: 'About',
   // icon: 'AboutIcon',
   // href: '/about',
 // },
  {
    label: 'Zap',
    icon: 'TradeIcon',
    href: 'https://exchange.pikafinance.io/#/swap',
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'PokeMart',
    icon: 'PoolIcon',
    href: '#',
  },
   {
     label: 'Coming Soon',
     icon: 'PoolIcon',
     href: '#',
   },
   {
     label: 'Coming Soon',
     icon: 'TicketIcon',
     href: '#',
   },
   {
     label: 'Coming Soon',
     icon: 'NftIcon',
     href: '#',
   },
]

export default config
