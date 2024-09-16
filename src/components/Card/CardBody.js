import {CardIcon} from './CardIcon';

export function CardBody(props,children) {
  return (
    <div className="card-body">
      <h5 className="card-title">
        {props.title} <span>| {props.time}</span>
      </h5>

      <div className="d-flex align-items-center">
        {props.showIcon && <CardIcon />}
        <div className="ps-3">
          <h6>{props.number}</h6>
        </div>
        {props.children}
      </div>
    </div>
  );
}
