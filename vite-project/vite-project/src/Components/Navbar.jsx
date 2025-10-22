import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Heart, Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);

  return (
    <nav className="navbar">
      {/* Top Bar */}
      <div className="navbar-top">
        <div className="navbar-container">
          <div className="navbar-top-left">
            <Phone size={16} />
            <span>Consultas: 29082329 - FarmaUY</span>
          </div>
          <div className="navbar-top-right">
            <span>Compra aqui, y colabora con la Teletón</span>
          </div>
        </div>
      </div>

      {/* NavBar Principal */}
      <div className="navbar-main">
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo */}
            <div className="navbar-logo">
              <span className="logo-text">🏥 FarmaUY</span>
            </div>

            {/* Buscador en Pc */}
            <div className="navbar-search-desktop">
              <div className="search-wrapper">
                <input
                  type="text"
                  placeholder="Buscar medicamentos, vitaminas..."
                  className="search-input"
                />
                <button className="search-button">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Iconos derecha */}
            <div className="navbar-actions">
              {/* Favorito */}
              <button className="navbar-icon favorites-icon">
                <Heart size={24} />
              </button>

              {/* Usuario */}
              <button className="navbar-icon user-icon">
                <User size={24} />
                <span className="icon-text">Mi Cuenta</span>
              </button>

              {/* Carrito */}
              <button className="navbar-icon cart-icon">
                <ShoppingCart size={24} />
                <span className="cart-count-desktop">{cartCount}</span>
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </button>

              {/* Menu en Celular */}
              <button
                className="navbar-icon menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Buscador en Celular */}
          <div className="navbar-search-mobile">
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="search-input"
              />
              <button className="search-button">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Links de Navegación, Celular */}
          <div className="navbar-links">
            <a href="#medicamentos">Medicamentos</a>
            <a href="#vitaminas">Vitaminas</a>
            <a href="#cuidado-personal">Cuidado Personal</a>
            <a href="#sobre-nosotros">Sobre Nosotros</a>
            <a href="#donaciones">Donaciones</a>
            <a href="#ofertas" className="ofertas-link">Ofertas</a>
          </div>
        </div>
      </div>

      {/* Menu en Celular */}
      {isMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-container">
            <div className="mobile-menu-content">
              <a href="#medicamentos" onClick={() => setIsMenuOpen(false)}>
                Medicamentos
              </a>
              <a href="#vitaminas" onClick={() => setIsMenuOpen(false)}>
                Vitaminas
              </a>
              <a href="#cuidado-personal" onClick={() => setIsMenuOpen(false)}>
                Cuidado Personal
              </a>
              <a href="#sobre-nosotros" onClick={() => setIsMenuOpen(false)}>
                Sobre Nosotros
              </a>
              <a href="#donaciones" onClick={() => setIsMenuOpen(false)}>
                Donaciones
              </a>
              <a href="#ofertas" className="ofertas-link" onClick={() => setIsMenuOpen(false)}>
                Ofertas
              </a>
              <div className="mobile-menu-divider"></div>
              <a href="#cuenta" className="mobile-menu-icon-link">
                <User size={20} />
                Mi Cuenta
              </a>
              <a href="#favoritos" className="mobile-menu-icon-link">
                <Heart size={20} />
                Favoritos
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;