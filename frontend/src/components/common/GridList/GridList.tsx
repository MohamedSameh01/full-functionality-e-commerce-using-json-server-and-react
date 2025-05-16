import LottieHandler from "@components/feedback/lottieHandler/LottieHandler";
import {  Row, Col } from "react-bootstrap";

interface GridListProps<T>{
  records:T[];
  renderItem:(record:T)=>React.ReactNode

}

type HasID={
  id?:number
}

const GridList = <T extends HasID>({ records, renderItem }: GridListProps<T>) => {
  const categotiesList =
    records.length > 0 ? (
      records.map((record) => {
        return (
          <Col
            xs={6}
            md={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(record)}
          </Col>
        );
      })
    ) : (
      <LottieHandler type="empty"  />
    );

  return <Row>{categotiesList}</Row>;
};

export default GridList