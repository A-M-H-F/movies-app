import './footer.css';

function Footer() {
    return (
      <div className="d-flex flex-column fixed-bottom">
        <footer className="text-center text-white footer-cus mt-auto">
          <div className="text-center p-3">
            © 2022 Copyright:
            <a className="text-white" href="https://grow.phoenix-lb.net" target="_blank" rel="noreferrer"> Hussein Istanbouli</a>
          </div>
        </footer>
      </div>
    );
}
export default Footer;
