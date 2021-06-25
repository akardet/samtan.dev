import AboutIcon from "../../public/icons/about.svg";
import AppleLogoIcon from "../../public/icons/apple_logo.svg";
import UsaaLogoIcon from "../../public/icons/usaa_logo.svg";
import ChevronRightIcon from "../../public/icons/chevron_right.svg";
import EmailIcon from "../../public/icons/email.svg";
import GithubIcon from "../../public/icons/github.svg";
import TwitterIcon from "../../public/icons/twitter.svg";
import LinkedinIcon from "../../public/icons/linkedin.svg";

const Icon = ({ name, ...props }) => {
  const component = {
    about: AboutIcon,
    apple_logo: AppleLogoIcon,
    usaa_logo: UsaaLogoIcon,
    chevron_right: ChevronRightIcon,
    email: EmailIcon,
    twitter: TwitterIcon,
    linkedin: LinkedinIcon,
    github: GithubIcon,
  };

  if (name && component[name]) {
    const IconName = component[name];
    return <IconName {...props} />;
  }
  return null;
};

export default Icon;
