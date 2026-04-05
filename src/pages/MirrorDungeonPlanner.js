import { useState, useRef, useCallback } from 'react';
import { FLOORS, UNIVERSAL_GIFTS, TIER_COLORS } from '../data/mirrorDungeonData';

const API_URL = process.env.REACT_APP_API_URL || '';
const egoGiftImgUrl = (name) => `${API_URL}/egoGift/${encodeURIComponent(name)}.webp`;

// ─────────────────────────────────────────────────
// 층별 아코디언 아이템
// ─────────────────────────────────────────────────
function FloorItem({ floorData, isOpen, isActive, onToggle }) {
  const [selectedPack, setSelectedPack] = useState('');
  const [activeGifts, setActiveGifts] = useState(new Set());

  // 추후 실제 팩 데이터로 교체
  const PLACEHOLDER_GIFTS = [
    { id: 1, name: '기프트 A', tier: 'III' },
    { id: 2, name: '기프트 B', tier: 'II' },
    { id: 3, name: '기프트 C', tier: 'IV' },
    { id: 4, name: '기프트 D', tier: 'I' },
    { id: 5, name: '기프트 E', tier: 'II' },
    { id: 6, name: '기프트 F', tier: 'III' },
    { id: 7, name: '기프트 G', tier: 'IV' },
    { id: 8, name: '기프트 H', tier: 'I' },
  ];

  const toggleGift = (id) => {
    setActiveGifts(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handlePackChange = (e) => {
    setSelectedPack(e.target.value);
    setActiveGifts(new Set());
  };

  return (
    <div style={{ ...s.floorItem, ...(isActive ? s.floorItemOpen : {}) }}>
      {/* 헤더 */}
      <button style={s.floorHeader} onClick={onToggle}>
        <div style={s.floorHeaderLeft}>
          <div style={{ ...s.floorBadge, ...(isActive ? s.floorBadgeOpen : {}) }}>
            {floorData.floor}
          </div>
          <span style={{ ...s.floorTitle, ...(isActive ? s.floorTitleOpen : {}) }}>
            테마팩 {selectedPack ? '선택됨' : '미선택'}{' '}
            <span style={s.floorSubText}>({floorData.packCount}개 가능)</span>
          </span>
        </div>
        <span style={s.chevron}>{isOpen ? '∧' : '∨'}</span>
      </button>

      {/* 바디 */}
      {isOpen && (
        <div style={s.floorBody}>
          {/* 테마팩 선택 */}
          <div style={s.field}>
            <label style={s.fieldLabel}>테마팩 선택</label>
            <select style={s.packSelect} value={selectedPack} onChange={handlePackChange}>
              <option value="">⚙ 테마팩 선택 ({floorData.packCount}개)</option>
              <option value="pride">오만 팩</option>
              <option value="gloom">우울 팩</option>
              <option value="fury">분노 팩</option>
              <option value="sloth">나태 팩</option>
              <option value="lust">색욕 팩</option>
              <option value="greed">탐욕 팩</option>
              <option value="envy">시기 팩</option>
            </select>
          </div>

          {/* 에고기프트 */}
          <div style={s.field}>
            <label style={s.fieldLabel}>에고기프트</label>
            {!selectedPack ? (
              <div style={s.emptyState}>
                <span style={s.emptyIcon}>🎁</span>
                <span>테마팩을 선택하면 에고기프트가 표시됩니다</span>
              </div>
            ) : (
              <>
                <p style={s.giftHint}>클릭하여 획득한 기프트를 활성화하세요</p>
                <div style={s.giftsGrid}>
                  {PLACEHOLDER_GIFTS.map(gift => {
                    const active = activeGifts.has(gift.id);
                    const tierColor = TIER_COLORS[gift.tier];
                    return (
                      <div
                        key={gift.id}
                        style={{
                          ...s.giftCard,
                          ...(active ? { ...s.giftActive, borderColor: tierColor, boxShadow: `0 0 10px ${tierColor}44` } : s.giftInactive),
                        }}
                        onClick={() => toggleGift(gift.id)}
                        title={active ? '비활성화' : '활성화'}
                      >
                        <div
                          style={{
                            ...s.giftIcon,
                            background: active ? `${tierColor}22` : '#111',
                            borderColor: active ? tierColor : '#333',
                            overflow: 'hidden',
                          }}
                        >
                          <img
                            src={egoGiftImgUrl(gift.name)}
                            alt={gift.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            onError={e => { e.currentTarget.style.display = 'none'; }}
                          />
                        </div>
                        <span style={{ ...s.giftName, color: active ? '#eee' : '#555' }}>
                          {gift.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <p style={s.activeCount}>
                  {activeGifts.size > 0
                    ? `${activeGifts.size}개 선택됨`
                    : '선택된 기프트 없음'}
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────
// 범용기프트 표 - 아이템 셀
// ─────────────────────────────────────────────────
function GiftTableCell({ item, active, highlighted, isFirstMatch, onToggle, cellRef }) {
  const tierColor = TIER_COLORS[item.tier] || '#fff';

  let outline = 'none';
  if (highlighted) outline = '2px solid #e44336';

  return (
    <div
      ref={cellRef}
      style={{
        ...s.tableCell,
        cursor: 'pointer',
        opacity: active ? 1 : 0.6,
        outline,
        outlineOffset: '2px',
        borderRadius: '4px',
        transition: 'opacity 0.15s, outline 0.15s',
      }}
      onClick={onToggle}
      title={active ? '비활성화' : '활성화'}
    >
      <div style={{
        ...s.tableCellIcon,
        background: highlighted ? '#e4443622' : active ? `${tierColor}28` : '#111',
        border: `1px solid ${highlighted ? '#e44336' : active ? tierColor : '#2a2a2a'}`,
        boxShadow: highlighted
          ? '0 0 10px #e4443666'
          : active ? `0 0 8px ${tierColor}44` : 'none',
        transition: 'all 0.15s',
        overflow: 'hidden',
      }}>
        <img
          src={egoGiftImgUrl(item.name)}
          alt={item.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          onError={e => { e.currentTarget.style.display = 'none'; }}
        />
      </div>
      <span style={{
        ...s.tableCellName,
        color: highlighted ? '#ff8888' : active ? '#fff' : '#ccc',
        transition: 'color 0.15s',
      }}>
        {item.name}
      </span>
      {item.note && (
        <span style={s.tableCellNote}>{item.note}</span>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────
// 범용기프트 패널
// ─────────────────────────────────────────────────
function UniversalGiftsPanel() {
  const [activeItems, setActiveItems] = useState(new Set());
  const [query, setQuery] = useState('');
  const itemRefs = useRef({});

  const toggleItem = (key) => {
    setActiveItems(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const isMatch = useCallback((name) => {
    if (!query.trim()) return false;
    return name.includes(query.trim());
  }, [query]);

  const scrollToFirstMatch = useCallback(() => {
    const q = query.trim();
    if (!q) return;
    for (let ci = 0; ci < UNIVERSAL_GIFTS.length; ci++) {
      const cat = UNIVERSAL_GIFTS[ci];
      for (let ri = 0; ri < cat.rows.length; ri++) {
        const row = cat.rows[ri];
        for (let ii = 0; ii < row.items.length; ii++) {
          if (row.items[ii].name.includes(q)) {
            const el = itemRefs.current[`${ci}-${ri}-${ii}`];
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              return;
            }
          }
        }
      }
    }
  }, [query]);

  const matchCount = UNIVERSAL_GIFTS.reduce((acc, cat) =>
    acc + cat.rows.reduce((a, row) =>
      a + row.items.filter(item => isMatch(item.name)).length, 0), 0);

  return (
    <div>
      {/* 헤더 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', gap: '12px' }}>
        <h3 style={{ ...s.panelTitle, marginBottom: 0, flexShrink: 0 }}>범용기프트</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1, justifyContent: 'flex-end' }}>
          {query && matchCount > 0 && (
            <span style={{ color: '#e44336', fontSize: '11px', flexShrink: 0 }}>
              {matchCount}개 매칭
            </span>
          )}
          {query && matchCount === 0 && (
            <span style={{ color: '#666', fontSize: '11px', flexShrink: 0 }}>결과 없음</span>
          )}
          {activeItems.size > 0 && !query && (
            <span style={{ color: '#c8860a', fontSize: '11px', flexShrink: 0 }}>
              {activeItems.size}개 선택됨
            </span>
          )}
          {/* 검색창 */}
          <div style={s.searchWrap}>
            <span style={s.searchIcon}>🔍</span>
            <input
              style={s.searchInput}
              type="text"
              placeholder="기프트 검색..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') scrollToFirstMatch(); }}
            />
            {query && (
              <button style={s.searchClear} onClick={() => setQuery('')}>✕</button>
            )}
          </div>
        </div>
      </div>

      {/* 표 */}
      <div style={s.ugTable}>
        {UNIVERSAL_GIFTS.map((cat, ci) => (
          <div
            key={ci}
            style={{
              ...s.ugCategory,
              borderBottom: ci < UNIVERSAL_GIFTS.length - 1 ? '1px solid #222' : 'none',
            }}
          >
            <div style={s.ugCategoryLabel}>{cat.category}</div>

            <div style={s.ugCategoryContent}>
              {cat.rows.map((row, ri) => {
                const colCount = row.items.length;
                return (
                  <div
                    key={ri}
                    style={{
                      ...s.ugRow,
                      borderTop: ri > 0 ? '1px solid #1a1a1a' : 'none',
                    }}
                  >
                    <div style={{ ...s.ugGrid, gridTemplateColumns: `repeat(${colCount}, 1fr)` }}>
                      {row.items.map((item, ii) => {
                        const key = `${ci}-${ri}-${ii}`;
                        const highlighted = isMatch(item.name);
                        return (
                          <GiftTableCell
                            key={ii}
                            item={item}
                            active={activeItems.has(key)}
                            highlighted={highlighted}
                            onToggle={() => toggleItem(key)}
                            cellRef={el => { itemRefs.current[key] = el; }}
                          />
                        );
                      })}
                    </div>

                    <div style={{ ...s.ugEffectGrid, gridTemplateColumns: `repeat(${colCount}, 1fr)` }}>
                      {(() => {
                        let col = 1;
                        return row.effects.map((ef, ei) => {
                          const span = ef.span || 1;
                          const cellStyle = {
                            ...s.ugEffect,
                            gridColumn: `${col} / span ${span}`,
                            whiteSpace: 'pre-line',
                          };
                          col += span;
                          return (
                            <div key={ei} style={cellStyle}>{ef.text}</div>
                          );
                        });
                      })()}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────
// 메인 페이지
// ─────────────────────────────────────────────────
function MirrorDungeonPlanner() {
  const [openFloors, setOpenFloors] = useState(new Set());
  const [lastClicked, setLastClicked] = useState(null);

  const toggleFloor = (floor) => {
    setOpenFloors(prev => {
      const next = new Set(prev);
      next.has(floor) ? next.delete(floor) : next.add(floor);
      return next;
    });
    setLastClicked(floor);
  };

  return (
    <div style={s.page}>
      <div style={s.layout}>
        {/* ── 좌측: 미정 ── */}
        <div style={s.leftPanel}>
          <h2 style={s.panelTitle}>—</h2>
          <div style={s.emptyPlaceholder}>
            <span style={s.emptyPlaceholderIcon}>🔧</span>
            <span>준비 중</span>
          </div>
        </div>

        {/* ── 중앙: 층별 플래너 ── */}
        <div style={s.centerPanel}>
          <h2 style={s.panelTitle}>거울던전 플래너</h2>
          <div style={s.floorList}>
            {FLOORS.map(fd => (
              <FloorItem
                key={fd.floor}
                floorData={fd}
                isOpen={openFloors.has(fd.floor)}
                isActive={lastClicked === fd.floor}
                onToggle={() => toggleFloor(fd.floor)}
              />
            ))}
          </div>
        </div>

        {/* ── 우측: 범용기프트 ── */}
        <div style={s.rightPanel}>
          <UniversalGiftsPanel />
        </div>
      </div>
    </div>
  );
}

export default MirrorDungeonPlanner;

// ─────────────────────────────────────────────────
// 스타일
// ─────────────────────────────────────────────────
const s = {
  // 레이아웃
  page: {
    paddingTop: '56px',
    background: '#0a0a0a',
    height: '100vh',
    overflow: 'hidden',
  },
  layout: {
    display: 'flex',
    height: 'calc(100vh - 56px)',
  },
  leftPanel: {
    flex: '0 0 20%',
    overflowY: 'auto',
    borderRight: '1px solid #1e1e1e',
    padding: '24px 16px',
    background: '#0c0c0c',
  },
  centerPanel: {
    flex: '0 0 42%',
    overflowY: 'auto',
    borderRight: '1px solid #1e1e1e',
    padding: '24px 20px',
  },
  emptyPlaceholder: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    height: '200px',
    color: '#333',
    fontSize: '13px',
    border: '1px dashed #1e1e1e',
    borderRadius: '6px',
  },
  emptyPlaceholderIcon: {
    fontSize: '28px',
    opacity: 0.3,
  },
  rightPanel: {
    flex: 1,
    overflowY: 'auto',
    padding: '24px 16px',
    background: '#0d0d0d',
  },
  panelTitle: {
    color: '#c8860a',
    fontSize: '17px',
    fontWeight: '700',
    marginBottom: '16px',
    letterSpacing: '1px',
  },

  // 층 목록
  floorList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },

  // 층 아이템
  floorItem: {
    background: '#111',
    border: '1px solid #222',
    borderRadius: '6px',
    overflow: 'hidden',
    transition: 'border-color 0.2s',
  },
  floorItemOpen: {
    border: '1px solid #c8860a55',
  },
  floorHeader: {
    width: '100%',
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    cursor: 'pointer',
    fontFamily: 'inherit',
  },
  floorHeaderLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  floorBadge: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    background: '#1e1e1e',
    border: '1px solid #333',
    color: '#666',
    fontSize: '12px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: 'all 0.2s',
  },
  floorBadgeOpen: {
    background: '#c8860a22',
    border: '1px solid #c8860a',
    color: '#c8860a',
  },
  floorTitle: {
    color: '#aaa',
    fontSize: '13px',
    transition: 'color 0.2s',
  },
  floorTitleOpen: {
    color: '#ddd',
  },
  floorSubText: {
    color: '#666',
    fontSize: '12px',
  },
  chevron: {
    color: '#555',
    fontSize: '11px',
  },

  // 바디
  floorBody: {
    padding: '4px 16px 16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    borderTop: '1px solid #1a1a1a',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '7px',
  },
  fieldLabel: {
    color: '#666',
    fontSize: '11px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  packSelect: {
    background: '#0d0d0d',
    border: '1px dashed #333',
    borderRadius: '4px',
    color: '#888',
    padding: '10px 14px',
    fontSize: '13px',
    fontFamily: 'inherit',
    cursor: 'pointer',
    outline: 'none',
    width: '100%',
    appearance: 'auto',
  },

  // 에고기프트 빈 상태
  emptyState: {
    background: '#0d0d0d',
    border: '1px dashed #222',
    borderRadius: '4px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    color: '#444',
    fontSize: '12px',
  },
  emptyIcon: {
    fontSize: '24px',
    opacity: 0.4,
  },
  giftHint: {
    color: '#555',
    fontSize: '11px',
    margin: 0,
  },
  activeCount: {
    color: '#c8860a',
    fontSize: '11px',
    margin: '4px 0 0',
    textAlign: 'right',
  },

  // 에고기프트 그리드
  giftsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
    gap: '6px',
  },
  giftCard: {
    borderRadius: '4px',
    padding: '8px 6px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '5px',
    transition: 'all 0.15s',
    userSelect: 'none',
    border: '1px solid transparent',
  },
  giftInactive: {
    background: '#0d0d0d',
    border: '1px solid #1e1e1e',
    opacity: 0.45,
  },
  giftActive: {
    background: 'transparent',
    opacity: 1,
  },
  giftIcon: {
    width: '38px',
    height: '38px',
    borderRadius: '6px',
    border: '1px solid',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.15s',
  },
  giftName: {
    fontSize: '10px',
    textAlign: 'center',
    lineHeight: 1.3,
    transition: 'color 0.15s',
  },

  // 범용기프트 표
  ugTable: {
    border: '1px solid #222',
    borderRadius: '6px',
    overflow: 'hidden',
  },
  ugCategory: {
    display: 'flex',
  },
  ugCategoryLabel: {
    flex: '0 0 52px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#c8860a',
    fontSize: '11px',
    fontWeight: '700',
    padding: '8px 4px',
    borderRight: '1px solid #222',
    textAlign: 'center',
    lineHeight: 1.5,
    whiteSpace: 'pre-line',
    background: '#0f0f0f',
  },
  ugCategoryContent: {
    flex: 1,
    minWidth: 0,
  },
  ugRow: {
    padding: '8px',
  },
  ugGrid: {
    display: 'grid',
    gap: '4px',
    marginBottom: '6px',
  },
  tableCell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3px',
  },
  tableCellIcon: {
    width: '36px',
    height: '36px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableCellName: {
    color: '#ccc',
    fontSize: '10px',
    textAlign: 'center',
    lineHeight: 1.2,
  },
  tableCellNote: {
    color: '#666',
    fontSize: '9px',
    textAlign: 'center',
    lineHeight: 1.2,
    whiteSpace: 'pre-line',
  },
  ugEffectGrid: {
    display: 'grid',
    gap: '4px',
    borderTop: '1px solid #1a1a1a',
    paddingTop: '6px',
  },
  ugEffect: {
    color: '#777',
    fontSize: '10px',
    textAlign: 'center',
    padding: '3px 2px',
    lineHeight: 1.4,
    background: '#0f0f0f',
    borderRadius: '3px',
  },

  // 검색
  searchWrap: {
    display: 'flex',
    alignItems: 'center',
    background: '#111',
    border: '1px solid #2c2c2c',
    borderRadius: '6px',
    padding: '0 8px',
    gap: '6px',
    height: '30px',
    minWidth: '160px',
    transition: 'border-color 0.2s',
  },
  searchIcon: {
    fontSize: '11px',
    flexShrink: 0,
  },
  searchInput: {
    background: 'none',
    border: 'none',
    outline: 'none',
    color: '#ccc',
    fontSize: '12px',
    fontFamily: 'inherit',
    width: '100%',
    padding: 0,
  },
  searchClear: {
    background: 'none',
    border: 'none',
    color: '#555',
    cursor: 'pointer',
    fontSize: '11px',
    padding: 0,
    flexShrink: 0,
    fontFamily: 'inherit',
    lineHeight: 1,
  },
};
