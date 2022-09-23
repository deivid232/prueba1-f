import NE_Version from 'components/common/NE_Version/NE_Version';
import {
  BsApple,
  BsBook,
  BsChatLeftText,
  BsDiscord,
  BsFileEarmarkText,
  BsGithub,
  BsGlobe2,
  BsMedium,
  BsPeople,
  BsReddit,
  BsTelegram,
  BsTwitter,
  BsWallet2,
  BsYoutube,
} from 'react-icons/bs';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { SiGitbook } from 'react-icons/si';

export const FooterTypes = {
  FOOTER_ITEMS: {
    PRIMARY: {
      ABOUT_NEXUS: {
        title: 'F Chain',
        items: [
          {
            href: 'https://fchain.live',
            label: 'FChain.live',
            target: '_blank',
            icon: (props) => <BsGlobe2 {...props} />,
          },
        ],
      },
      SOCIAL_MEDIA: {
        title: 'Social Media',
        items: [
          {
            href: '#',
            target: '_blank',
            label: 'Telegram',
            icon: (props) => <BsTelegram {...props} />,
          },
        ]
      },
    },
    SECONDARY: {
      SUPPORT: {
        title: undefined,
        items: [
          {
            href: '#',
            label: <NE_Version />,
            target: '_self',
            icon: undefined,
          },
          {
            href: '/about',
            label: 'About Nexplorer',
            target: '_self',
            icon: (props) => <BsPeople {...props} />,
          },
          /* {
            href: 'https://github.com/rayanfer32/nexus-explorer-next',
            label: 'Github Repository',
            target: '_blank',
            icon: (props) => <BsGithub {...props} />,
          }, */
        ],
      },
      LEGAL_RIGHTS: {
        title: undefined,
        items: [
          {
            href: null,
            target: '_blank',
            label: 'Copyright © 2022 fChain.live',
            icon: undefined,
          },
        ],
      },
    },
  },
};
