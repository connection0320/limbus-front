import { useNavigate } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';

function DiscordIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
    </svg>
  );
}

function HeroSection({ characterImage }) {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useWindowSize();

  const bgImage = characterImage
    ? `url(${characterImage})`
    : 'linear-gradient(135deg, #141414 0%, #1a1212 40%, #1a1010 70%, #0f0a0a 100%)';

  // 모바일: 캐릭터 이미지를 배경으로, 콘텐츠는 전체 너비
  if (isMobile) {
    return (
      <section style={styles.sectionMobile}>
        {/* 배경 이미지 */}
        <div style={{ ...styles.mobileBg, backgroundImage: bgImage }}>
          <div style={styles.mobileBgOverlay} />
        </div>

        {/* 콘텐츠 */}
        <div style={styles.leftContentMobile}>
          <div style={styles.logoBadgeMobile}>🔥</div>

          <h1 style={styles.mainTitleMobile}>
            SAIGO NO
            <br />
            DANTE
          </h1>

          <p style={styles.subTitleMobile}>
            <em style={styles.subTitleEm}>Limbus Company</em> 팬 아카이브
          </p>

          <div style={styles.tagLineMobile}>
            <span style={styles.tagDots}>◈◈◈</span>
            <span style={styles.tagText}>거머쥔 악지 제자</span>
            <span style={styles.tagSub}>—파우스트</span>
          </div>

          <div style={styles.buttonGridMobile}>
            <button style={styles.primaryButton}>수감자 목록</button>
            <button style={styles.outlineButtonGold}>덱 게시판</button>
            <button style={styles.outlineButton} onClick={() => navigate('/planner')}>거던 플래너</button>
            <button style={styles.outlineButton}>
              <DiscordIcon />
              디스코드 봇
            </button>
          </div>
        </div>

        <div style={styles.scrollIndicator}>
          SCROLL
          <div style={styles.scrollLine} />
        </div>
      </section>
    );
  }

  // 태블릿 + 데스크톱: 좌우 레이아웃
  return (
    <section style={styles.section}>
      {/* 우측 캐릭터 패널 */}
      <div style={{ ...styles.characterPanel, backgroundImage: bgImage }}>
        <div style={styles.charOverlayLeft} />
        <div style={styles.charOverlayBottom} />
      </div>

      {/* 좌측 콘텐츠 */}
      <div style={isTablet ? styles.leftContentTablet : styles.leftContent}>
        <div style={styles.logoBadge}>🔥</div>

        <h1 style={isTablet ? styles.mainTitleTablet : styles.mainTitle}>
          SAIGO NO
          <br />
          DANTE
        </h1>

        <p style={styles.subTitle}>
          <em style={styles.subTitleEm}>Limbus Company</em> 팬 아카이브
        </p>

        <div style={styles.tagLine}>
          <span style={styles.tagDots}>◈◈◈</span>
          <span style={styles.tagText}>거머쥔 악지 제자</span>
          <span style={styles.tagSub}>—파우스트</span>
        </div>

        <div style={isTablet ? styles.buttonGridTablet : styles.buttonGrid}>
          <button style={styles.primaryButton}>수감자 목록</button>
          <button style={styles.outlineButtonGold}>덱 게시판</button>
          <button style={styles.outlineButton} onClick={() => navigate('/planner')}>거던 플래너</button>
          <button style={styles.outlineButton}>
            <DiscordIcon />
            디스코드 봇
          </button>
        </div>
      </div>

      <div style={styles.scrollIndicator}>
        SCROLL
        <div style={styles.scrollLine} />
      </div>

      <div style={styles.paginationDots}>
        <div style={styles.dotActive} />
        <div style={styles.dot} />
        <div style={styles.dot} />
        <div style={styles.dot} />
      </div>
    </section>
  );
}

export default HeroSection;

const styles = {
  // ── 데스크톱 ──────────────────────────────────────
  section: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '600px',
    background: '#0a0a0a',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  characterPanel: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '65%',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  },
  charOverlayLeft: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, #0a0a0a 0%, rgba(10,10,10,0.7) 30%, rgba(10,10,10,0.15) 60%, transparent 100%)',
    zIndex: 1,
  },
  charOverlayBottom: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,10,0.6) 100%)',
    zIndex: 1,
  },
  leftContent: {
    position: 'relative',
    zIndex: 2,
    padding: '0 80px',
    flex: '0 0 52%',
    maxWidth: '52%',
    animation: 'fadeInLeft 0.8s ease-out both',
  },
  leftContentTablet: {
    position: 'relative',
    zIndex: 2,
    padding: '0 48px',
    flex: '0 0 60%',
    maxWidth: '60%',
    animation: 'fadeInLeft 0.8s ease-out both',
  },
  logoBadge: {
    width: '54px',
    height: '54px',
    background: 'radial-gradient(circle at 38% 35%, #ffaa00, #cc4400, #6b1200)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '26px',
    boxShadow: '0 0 24px rgba(255,120,0,0.4), 0 0 48px rgba(255,60,0,0.15)',
    marginBottom: '20px',
  },
  mainTitle: {
    fontSize: 'clamp(44px, 5.5vw, 76px)',
    fontWeight: '900',
    lineHeight: '1.05',
    margin: '0 0 14px 0',
    background: 'linear-gradient(175deg, #ffe066 0%, #e8a80c 45%, #b87000 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '3px',
    textTransform: 'uppercase',
  },
  mainTitleTablet: {
    fontSize: 'clamp(36px, 5vw, 56px)',
    fontWeight: '900',
    lineHeight: '1.05',
    margin: '0 0 14px 0',
    background: 'linear-gradient(175deg, #ffe066 0%, #e8a80c 45%, #b87000 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '3px',
    textTransform: 'uppercase',
  },
  subTitle: {
    color: '#999',
    fontSize: '15px',
    fontStyle: 'italic',
    margin: '0 0 20px 0',
  },
  subTitleEm: {
    color: '#c8860a',
    fontStyle: 'normal',
    fontWeight: '600',
  },
  tagLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '38px',
    fontSize: '13px',
  },
  tagDots: {
    color: '#c8860a',
    fontSize: '9px',
    letterSpacing: '2px',
  },
  tagText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  tagSub: {
    color: '#777',
    fontSize: '12px',
  },
  buttonGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    maxWidth: '380px',
  },
  buttonGridTablet: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    maxWidth: '340px',
  },
  primaryButton: {
    background: '#c8860a',
    border: 'none',
    borderRadius: '3px',
    color: '#0a0a0a',
    fontSize: '13px',
    fontWeight: '700',
    padding: '13px 20px',
    cursor: 'pointer',
    letterSpacing: '1px',
    fontFamily: 'inherit',
  },
  outlineButtonGold: {
    background: 'transparent',
    border: '1px solid #c8860a',
    borderRadius: '3px',
    color: '#c8860a',
    fontSize: '13px',
    fontWeight: '600',
    padding: '13px 20px',
    cursor: 'pointer',
    letterSpacing: '1px',
    fontFamily: 'inherit',
  },
  outlineButton: {
    background: 'transparent',
    border: '1px solid #444',
    borderRadius: '3px',
    color: '#bbb',
    fontSize: '13px',
    fontWeight: '600',
    padding: '13px 20px',
    cursor: 'pointer',
    letterSpacing: '1px',
    fontFamily: 'inherit',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '7px',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '28px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    zIndex: 2,
    color: '#555',
    fontSize: '9px',
    letterSpacing: '3px',
  },
  scrollLine: {
    width: '1px',
    height: '22px',
    background: 'linear-gradient(to bottom, #c8860a, transparent)',
    animation: 'scrollBounce 1.6s ease-in-out infinite',
  },
  paginationDots: {
    position: 'absolute',
    bottom: '32px',
    right: '44px',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    zIndex: 2,
  },
  dotActive: {
    width: '18px',
    height: '5px',
    borderRadius: '3px',
    background: '#c8860a',
    cursor: 'pointer',
  },
  dot: {
    width: '6px',
    height: '5px',
    borderRadius: '3px',
    background: '#333',
    cursor: 'pointer',
  },

  // ── 모바일 ──────────────────────────────────────
  sectionMobile: {
    position: 'relative',
    width: '100%',
    minHeight: '100vh',
    background: '#0a0a0a',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  mobileBg: {
    position: 'absolute',
    inset: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
  },
  mobileBgOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.75) 50%, #0a0a0a 100%)',
  },
  leftContentMobile: {
    position: 'relative',
    zIndex: 2,
    padding: '80px 24px 60px',
  },
  logoBadgeMobile: {
    width: '44px',
    height: '44px',
    background: 'radial-gradient(circle at 38% 35%, #ffaa00, #cc4400, #6b1200)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    boxShadow: '0 0 20px rgba(255,120,0,0.4)',
    marginBottom: '16px',
  },
  mainTitleMobile: {
    fontSize: 'clamp(36px, 10vw, 56px)',
    fontWeight: '900',
    lineHeight: '1.05',
    margin: '0 0 12px 0',
    background: 'linear-gradient(175deg, #ffe066 0%, #e8a80c 45%, #b87000 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  subTitleMobile: {
    color: '#999',
    fontSize: '14px',
    fontStyle: 'italic',
    margin: '0 0 16px 0',
  },
  tagLineMobile: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '28px',
    fontSize: '12px',
    flexWrap: 'wrap',
  },
  buttonGridMobile: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '8px',
  },
};
