import { v4 as uuidv4 } from 'uuid';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export enum BAR_LIST_ITEM_BUTTON_ACTION {
  NEWS = 'NEWS',
  ARCHIVES = 'ARCHIVES',
  TAGS = 'TAGS',
  CONTACT = 'CONTACT',
}

export const LIST = [
  { id: uuidv4(), icon: <HomeIcon />, label: 'News', actionKey: BAR_LIST_ITEM_BUTTON_ACTION.NEWS },
  {
    id: uuidv4(),
    icon: <ArticleIcon />,
    label: 'Archives',
    actionKey: BAR_LIST_ITEM_BUTTON_ACTION.ARCHIVES,
  },
  {
    id: uuidv4(),
    icon: <LocalOfferIcon />,
    label: 'Tags',
    actionKey: BAR_LIST_ITEM_BUTTON_ACTION.TAGS,
  },
  {
    id: uuidv4(),
    icon: <LocalPhoneIcon />,
    label: 'Contact Us',
    actionKey: BAR_LIST_ITEM_BUTTON_ACTION.CONTACT,
  },
];
