export function CardIcon(props){
    return (
        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
          <i className={props.image}></i>
        </div>
      );
}