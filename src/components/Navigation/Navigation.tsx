import { useGlobalContext } from '@/context/GlobalContext';
// import { NavItem, NavList, NavTag } from './Navigation.styles';
// import { HeaderNav } from '../Header/Header.styles';
// import { FooterNav } from '../Footer/Footer.styles';

const Navigation = ({ element }: { element: string }) => {
  const { access } = useGlobalContext();

  console.log('Nav access:', access);

  return (
    <nav>
      <p>Nav</p>
      {/* <NavList element={element}>
        {element === 'header' && (
          <>
            {memoizedData?.isAdmin && (
              <NavItem element={element}>
                <HeaderNav
                  to='/admin/dashboard/articles'
                  element={element}
                  admin={'admin'}
                >
                  Редактор
                </HeaderNav>
              </NavItem>
            )}
          </>
        )}
        <NavItem element={element}>
          {element === 'header' ? (
            <HeaderNav to='/articles' element={element}>
              Статьи
            </HeaderNav>
          ) : (
            <FooterNav to='/articles' element={element}>
              Статьи
            </FooterNav>
          )}
        </NavItem>
        <NavItem element={element}>
          {element === 'header' ? (
            <HeaderNav to='/about' element={element}>
              О нас
            </HeaderNav>
          ) : (
            <FooterNav to='/about' element={element}>
              О нас
            </FooterNav>
          )}
        </NavItem>
        <NavItem element={element}>
          {element === 'header' ? (
            <HeaderNav to='/contacts' element={element}>
              Контакты
            </HeaderNav>
          ) : (
            <FooterNav to='/contacts' element={element}>
              Контакты
            </FooterNav>
          )}
        </NavItem>
        {element === 'footer' && (
          <NavItem element={element}>
            <FooterNav to='/admin' element={element}>
              Админ
            </FooterNav>
          </NavItem>
        )}
      </NavList> */}
    </nav>
  );
};

export default Navigation;
