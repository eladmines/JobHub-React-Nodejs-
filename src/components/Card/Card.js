import {Filter} from './Filter';
import {CardBody} from './CardBody';
export function Card(props,children){
  return (
    <div className={props.size}>
      <div className={props.class}>
        {props.showFilter && <Filter />}
        <CardBody title={props.title} time={props.time} number={props.number} showFilter={props.showFilter} showIcon={props.showIcon}>
        {props.children}
        </CardBody>
      </div>
      
    </div>
  );
}