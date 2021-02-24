import AboutIcon from "../../public/icons/about.svg";
import AppleLogoIcon from "../../public/icons/apple_logo.svg";
import UsaaLogoIcon from "../../public/icons/usaa_logo.svg";

const Icon = ({ name, ...props }) => {
  const component = {
    about: AboutIcon,
    apple_logo: AppleLogoIcon,
    usaa_logo: UsaaLogoIcon,
  };

  if (name && component[name]) {
    const IconName = component[name];
    return <IconName {...props} />;
  }
  return null;
};

export default Icon;
