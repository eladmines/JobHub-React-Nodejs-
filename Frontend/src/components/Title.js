export function Title(props) {
    const HeadingTag = props.size || 'h5'; // Use h5 as default if no size is passed
  
    return (
      <div className={props.class}> {/* Change class to className */}
        <HeadingTag>{props.title}</HeadingTag> {/* Properly treat HeadingTag as JSX */}
      </div>
    );
  }