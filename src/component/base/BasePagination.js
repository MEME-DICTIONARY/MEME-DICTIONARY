import { Pagination } from 'react-bootstrap';
import { useState } from 'react';

export default function BasePagination(props) {
  const { totalPage, onClickPage } = props;
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <Pagination>
      <Pagination.First onClick={() => onClickPage(0)} />
      <Pagination.Prev onClick={() => onClickPage(currentPage - 1)} />
      {Array.from({ length: totalPage }, (v, i) => i).map((cur) => (
        <Pagination.Item key={cur} onChange={() => setCurrentPage(cur)} onClick={() => onClickPage(cur)}>
          {cur + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => onClickPage(currentPage + 1)} />
      <Pagination.Last onClick={() => onClickPage(totalPage - 1)} />
    </Pagination>
  );
}
