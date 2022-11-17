import logo from "../../assets/img/logo.svg";
import './styles.css'

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>Metas de Venda</h1>
        <p>
          Desenvolvido por
          <a href="https://www.linkedin.com/in/lucasoalima/"> Lucas Soares de Lima</a>
        </p>
      </div>
    </header>
  );
}

export default Header