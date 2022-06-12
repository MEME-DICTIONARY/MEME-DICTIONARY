import {Pagination} from 'react-bootstrap'


export default function BasePagination(props) {
  const {totalPage, onClickPage} = props;
  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {Array.from({length:totalPage},(v,i)=> i).map((cur)=> (
        <Pagination.Item onClick={()=>onClickPage(cur)}>{cur}</Pagination.Item>
      ))}
      
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  )
}