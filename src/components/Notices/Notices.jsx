import AddNoticeButton from '../AddNoticeButton';
import NoticesCategoriesNav from '../NoticesCategoriesNav';
import NoticesSearch from '../NoticesSearch';
import Container from '../Container';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  NoticeSection,
  NoticesToolBar,
  NoticesWrapper,
} from './Notices.styled';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES } from 'router';
import PageTitle from 'components/UIKit/PageTitle';
import useAuth from 'hooks/useAuth/useAuth';
// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';

const Notices = () => {
  //TEMP CODE FOR FUN!!!!
  // const dispatch = useDispatch();
  //TEMP CODE FOR FUN!!!!

  const { pathname } = useLocation();
  const navigate = useNavigate();

  // const { isLoggedIn } = useAuth();
  const isLoggedIn = true;

  const noticesNavLinks = [
    { title: 'sell', to: ROUTES.NOTICES_SELL },
    { title: 'lost-found', to: ROUTES.NOTICES_LOST_FOUND },
    { title: 'in good hands', to: ROUTES.NOTICES_FOR_FREE },
  ];

  if (isLoggedIn) {
    noticesNavLinks.push(
      { title: 'favorite ads', to: ROUTES.NOTICES_FAVORITE },
      { title: 'my ads', to: ROUTES.NOTICES_OWN }
    );
  }

  useEffect(() => {
    if (pathname === ROUTES.NOTICES) {
      navigate(ROUTES.NOTICES_SELL, { replace: true });
    }
  }, [pathname, navigate]);

  return (
    <NoticesWrapper>
      <NoticeSection>
        <Container>
          {/* <button
            type="button"
            style={{ fontSize: '40px', cursor: 'pointer' }}
            onClick={() => {
              dispatch(logOut());
            }}
          >
            Log Out
          </button> */}
          <PageTitle>Find your favorite pet</PageTitle>

          <NoticesSearch />

          <NoticesToolBar>
            <NoticesCategoriesNav links={noticesNavLinks} />
            <AddNoticeButton />
          </NoticesToolBar>
        </Container>
      </NoticeSection>

      <Outlet context={noticesNavLinks} />
    </NoticesWrapper>
  );
};

export default Notices;
