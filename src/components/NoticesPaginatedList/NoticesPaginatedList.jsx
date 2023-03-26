import NoticesCardList from 'components/NoticesCardList';
import Paginator from 'components/Paginator';
import { useWindowSize } from 'hooks/useWindowSize';
import { PaginatorWrapper } from './NoticesPaginatedList.styled';

const NoticesPaginatedList = ({
  label,
  list,
  isLoggedIn,
  totalItems,
  currentPage,
  onPageClick,
  perPage,
  onFavoriteClick,
}) => {
  const { isDesktop } = useWindowSize();
  return (
    list && (
      <>
        <NoticesCardList
          label={label}
          list={list}
          isLoggedIn={isLoggedIn}
          onFavoriteClick={onFavoriteClick}
        />

        <PaginatorWrapper>
          <Paginator
            totalItems={totalItems}
            currentPage={currentPage}
            onPageClick={onPageClick}
            nearbyQtyPages={isDesktop ? 2 : 1}
            perPage={perPage}
            // shouldScrollUp
          />
        </PaginatorWrapper>
      </>
    )
  );
};

export default NoticesPaginatedList;
