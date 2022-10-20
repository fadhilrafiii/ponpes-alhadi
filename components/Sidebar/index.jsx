import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Dropdown from 'components/base/Dropdown';
import MyButton from 'components/base/MyButton';

import { SIDEBAR_MENU } from './constants';

import classes from './index.module.css';

const Sidebar = ({ isOpen }) => {
  const router = useRouter();

  const classNames = [classes.sidebarContainer];
  if (isOpen) classNames.push(classes.sidebarContainerOpen);

  const handleGoToRoute = (path) => {
    router.push(path);
  };

  return (
    <aside className={classNames.join(' ')}>
      <div className={classes.sidebar}>
        <div className={classes.sidebarTopButtonContainer}>
          <MyButton theme="primary" fullWidth className={classes.sidebarTopButton}>
            CHECK AVAILABILITY
          </MyButton>
        </div>
        <div>
          {SIDEBAR_MENU.map(({ name, routes }) => (
            <div key={name} className={classes.menuItem}>
              <Dropdown text={name}>
                {routes.map((route) => (
                  <div key={route.name} role="button" onClick={() => handleGoToRoute(route.path)}>
                    {route.name}
                  </div>
                ))}
              </Dropdown>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
