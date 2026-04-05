import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';

function NavItem({ label, hasArrow, active, onClick }) {
  return (
    <button
      style={{ ...styles.navItem, ...(active ? styles.navItemActive : {}) }}
      onClick={onClick}
    >
      {label}
      {hasArrow && <span style={styles.dropArrow}>▾</span>}
    </button>
  );
}

function Navbar() {
  const { isMobile } = useWindowSize();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname === '/planner' ? 'planner' : 'home';

  const go = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={styles.nav}>
        {/* 로고 */}
        <div style={styles.logoArea} onClick={() => go('/')}>
          <div style={styles.logoIcon}>🔥</div>
          <span style={styles.logoText}>거울던전 도감</span>
        </div>

        {/* 데스크톱: 네비 링크 */}
        {!isMobile && (
          <div style={styles.navLinks}>
            <NavItem
              label="거울던전 플래너"
              active={currentPage === 'planner'}
              onClick={() => go('/planner')}
            />
            <NavItem label="에고기프트" hasArrow />
            <NavItem label="커뮤니티" hasArrow />
            <NavItem label="기타" hasArrow />
          </div>
        )}

        {/* 데스크톱: 우측 버튼 */}
        {!isMobile && (
          <div style={styles.rightArea}>
            <button style={styles.searchButton}>
              🔍 검색
              <span style={styles.shortcutBadge}>Ctrl K</span>
            </button>
            <button style={styles.loginButton}>
              <span style={styles.googleG}>G</span>
              로그인
            </button>
          </div>
        )}

        {/* 모바일: 로그인 + 햄버거 */}
        {isMobile && (
          <div style={styles.rightArea}>
            <button style={styles.loginButton}>
              <span style={styles.googleG}>G</span>
              로그인
            </button>
            <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        )}
      </nav>

      {/* 모바일 드롭다운 */}
      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          <NavItem
            label="거울던전 플래너"
            active={currentPage === 'planner'}
            onClick={() => go('/planner')}
          />
          <NavItem label="에고기프트" hasArrow />
          <NavItem label="커뮤니티" hasArrow />
          <NavItem label="기타" hasArrow />
          <div style={{ marginTop: '8px' }}>
            <button style={{ ...styles.searchButton, width: '100%', justifyContent: 'center' }}>
              🔍 검색
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '56px',
    background: 'rgba(10, 10, 10, 0.95)',
    borderBottom: '1px solid #1e1e1e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    zIndex: 100,
    backdropFilter: 'blur(8px)',
  },
  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
  },
  logoIcon: {
    width: '30px',
    height: '30px',
    background: 'radial-gradient(circle at 38% 35%, #ffaa00, #cc4400, #6b1200)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '15px',
    boxShadow: '0 0 10px rgba(255, 100, 0, 0.35)',
    flexShrink: 0,
  },
  logoText: {
    color: '#c8860a',
    fontSize: '15px',
    fontWeight: '700',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  },
  navItem: {
    background: 'none',
    border: 'none',
    color: '#b0b0b0',
    fontSize: '14px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    fontFamily: 'inherit',
    padding: '12px 0',
    borderBottom: '2px solid transparent',
    transition: 'color 0.2s',
  },
  navItemActive: {
    color: '#c8860a',
    borderBottom: '2px solid #c8860a',
  },
  dropArrow: {
    fontSize: '9px',
    color: '#666',
  },
  rightArea: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  searchButton: {
    background: '#141414',
    border: '1px solid #2c2c2c',
    borderRadius: '6px',
    color: '#888',
    padding: '6px 12px',
    fontSize: '13px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'inherit',
  },
  shortcutBadge: {
    background: '#222',
    border: '1px solid #3a3a3a',
    borderRadius: '3px',
    padding: '1px 5px',
    fontSize: '10px',
    color: '#666',
  },
  loginButton: {
    background: '#111',
    border: '1px solid #3a3a3a',
    borderRadius: '6px',
    color: '#ccc',
    padding: '7px 14px',
    fontSize: '13px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'inherit',
  },
  googleG: {
    fontWeight: '800',
    fontSize: '14px',
    background: 'linear-gradient(135deg, #4285F4 25%, #EA4335 50%, #FBBC05 75%, #34A853 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  },
  hamburger: {
    background: 'none',
    border: '1px solid #333',
    borderRadius: '6px',
    color: '#ccc',
    fontSize: '18px',
    width: '38px',
    height: '38px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'inherit',
  },
  mobileMenu: {
    position: 'fixed',
    top: '56px',
    left: 0,
    right: 0,
    background: 'rgba(10, 10, 10, 0.98)',
    borderBottom: '1px solid #2a2a2a',
    display: 'flex',
    flexDirection: 'column',
    padding: '8px 24px 16px',
    zIndex: 99,
    backdropFilter: 'blur(8px)',
  },
};
