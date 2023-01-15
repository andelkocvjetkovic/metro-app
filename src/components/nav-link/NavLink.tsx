import { NavLink as RouterNavLink, NavLinkProps } from 'react-router-dom';
import className from 'classnames';

function NavLink(props: NavLinkProps) {
  return (
    <RouterNavLink
      {...props}
      className={({ isActive }) =>
        className('text-base font-medium', isActive ? 'text-pink-300' : 'text-gray-900 hover:text-pink-500')
      }
    />
  );
}

export default NavLink;
