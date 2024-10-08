export function Logo(){
    return (
        <div className="d-flex align-items-center justify-content-between">
          <a href="/" className="logo d-flex align-items-center">
            <img src="../assets/img/logo.png" alt=""/>
            <span className="d-none d-lg-block">JobHub</span>
          </a>
          <i className="bi bi-list toggle-sidebar-btn"></i>
        </div>
    )
}
