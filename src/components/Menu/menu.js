import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import CodeIcon from '@material-ui/icons/Code';
import WorkIcon from '@material-ui/icons/Work';
import AppsIcon from '@material-ui/icons/Apps';
import PersonIcon from '@material-ui/icons/Person';

const menu = [
  {
    title: 'Home',
    link: '/',
    icon: HomeIcon,
  },
  {
    title: 'About Me',
    link: '/about-me',
    icon: PersonIcon,
  },
  {
    title: 'Education',
    link: '/education',
    icon: SchoolIcon,
  },
  {
    title: 'Technical Skill',
    link: '/technical-skill',
    icon: CodeIcon,
  },
  {
    title: 'Professional Experience',
    link: '/professional-experience',
    icon: WorkIcon,
  },
  {
    title: 'Portofolio',
    link: '/portofolio',
    icon: AppsIcon,
  },
];

export default menu;
