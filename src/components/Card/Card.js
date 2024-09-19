import {Filter} from './Filter';

export function Card(props,children){
  return (
    <div className={props.size}>
      <div className={props.class}>
        {props.showFilter && <Filter />}
        <div className="card-body">
        {props.children}
        </div>
        
      </div>
      
    </div>
  );
}