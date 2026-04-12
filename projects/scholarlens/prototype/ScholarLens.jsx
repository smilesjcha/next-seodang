import { useState } from "react";

// ─── Mock Data ────────────────────────────────────────────────────
const MOCK_PAPERS = [
  {
    id: "p1",
    title: "Attention Is All You Need",
    authors: "Vaswani et al.",
    year: 2017,
    journal: "NeurIPS",
    citationCount: 98421,
    status: "DONE",
    evidenceCount: 12,
  },
  {
    id: "p2",
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
    authors: "Devlin et al.",
    year: 2019,
    journal: "NAACL",
    citationCount: 71302,
    status: "DONE",
    evidenceCount: 9,
  },
  {
    id: "p3",
    title: "Language Models are Few-Shot Learners",
    authors: "Brown et al.",
    year: 2020,
    journal: "NeurIPS",
    citationCount: 43109,
    status: "PROCESSING",
    evidenceCount: 0,
  },
];

const MOCK_EVIDENCES = [
  {
    id: "e1",
    sentence:
      "The Transformer model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles, by over 2 BLEU.",
    page: 8,
    paragraph: 2,
    confidence: 0.97,
    keywords: ["BLEU", "Transformer", "번역"],
    tags: ["성능 지표", "NLP"],
  },
  {
    id: "e2",
    sentence:
      "Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions.",
    page: 4,
    paragraph: 1,
    confidence: 0.94,
    keywords: ["multi-head attention", "representation"],
    tags: ["아키텍처"],
  },
  {
    id: "e3",
    sentence:
      "We trained on the standard WMT 2014 English-German dataset consisting of about 4.5 million sentence pairs.",
    page: 7,
    paragraph: 3,
    confidence: 0.91,
    keywords: ["데이터셋", "학습"],
    tags: ["실험 설정"],
  },
  {
    id: "e4",
    sentence:
      "The encoder maps an input sequence of symbol representations to a sequence of continuous representations z.",
    page: 3,
    paragraph: 2,
    confidence: 0.88,
    keywords: ["encoder", "sequence"],
    tags: ["아키텍처"],
  },
];

// ─── Color Tokens ─────────────────────────────────────────────────
const C = {
  brand: "#4F46E5",       // indigo-600
  brandLight: "#EEF2FF",  // indigo-50
  brandMid: "#818CF8",    // indigo-400
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
  gray50: "#F9FAFB",
  gray100: "#F3F4F6",
  gray200: "#E5E7EB",
  gray400: "#9CA3AF",
  gray600: "#4B5563",
  gray700: "#374151",
  gray900: "#111827",
  white: "#FFFFFF",
};

// ─── Sub Components ───────────────────────────────────────────────

function Badge({ label, color = C.brandLight, textColor = C.brand }) {
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: 99,
        fontSize: 11,
        fontWeight: 600,
        background: color,
        color: textColor,
      }}
    >
      {label}
    </span>
  );
}

function ConfidenceBar({ value }) {
  const pct = Math.round(value * 100);
  const color = pct >= 90 ? C.success : pct >= 75 ? C.warning : C.danger;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <div
        style={{
          flex: 1,
          height: 5,
          background: C.gray200,
          borderRadius: 99,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            background: color,
            borderRadius: 99,
          }}
        />
      </div>
      <span style={{ fontSize: 11, fontWeight: 700, color, minWidth: 30 }}>
        {pct}%
      </span>
    </div>
  );
}

function StatusPill({ status }) {
  const map = {
    DONE: { label: "완료", bg: "#D1FAE5", color: "#065F46" },
    PROCESSING: { label: "처리 중", bg: "#FEF3C7", color: "#92400E" },
    PENDING: { label: "대기", bg: C.gray100, color: C.gray600 },
  };
  const s = map[status] || map.PENDING;
  return <Badge label={s.label} color={s.bg} textColor={s.color} />;
}

// ─── Sidebar ──────────────────────────────────────────────────────

const NAV_ITEMS = [
  { id: "dashboard", icon: "⊞", label: "대시보드" },
  { id: "papers", icon: "📄", label: "내 논문" },
  { id: "library", icon: "🗂", label: "근거 라이브러리" },
  { id: "reports", icon: "📊", label: "연구 보고서" },
  { id: "visualize", icon: "📈", label: "트렌드 시각화" },
];

function Sidebar({ active, onNav }) {
  return (
    <aside
      style={{
        width: 220,
        minHeight: "100vh",
        background: C.gray900,
        display: "flex",
        flexDirection: "column",
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: "24px 20px 20px",
          borderBottom: `1px solid #1F2937`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: C.brand,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            🔬
          </div>
          <span
            style={{
              color: C.white,
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: "-0.3px",
            }}
          >
            ScholarLens
          </span>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: "12px 10px", flex: 1 }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onNav(item.id)}
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "9px 12px",
              borderRadius: 8,
              border: "none",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: active === item.id ? 600 : 400,
              background: active === item.id ? "#1E40AF22" : "transparent",
              color: active === item.id ? C.brandMid : "#9CA3AF",
              marginBottom: 2,
              textAlign: "left",
              transition: "all 0.15s",
            }}
          >
            <span style={{ fontSize: 15 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* User */}
      <div
        style={{
          padding: "14px 16px",
          borderTop: "1px solid #1F2937",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: C.brand,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 13,
            color: C.white,
            fontWeight: 700,
          }}
        >
          철
        </div>
        <div>
          <div style={{ color: C.white, fontSize: 12, fontWeight: 600 }}>
            18기 철수
          </div>
          <div style={{ color: C.gray400, fontSize: 11 }}>대학원생</div>
        </div>
      </div>
    </aside>
  );
}

// ─── Paper List Panel ─────────────────────────────────────────────

function PaperListPanel({ selectedId, onSelect }) {
  const [query, setQuery] = useState("");
  const filtered = MOCK_PAPERS.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.authors.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      style={{
        width: 310,
        flexShrink: 0,
        borderRight: `1px solid ${C.gray200}`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 18px 14px",
          borderBottom: `1px solid ${C.gray200}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <h2 style={{ fontSize: 15, fontWeight: 700, color: C.gray900, margin: 0 }}>
            내 논문
          </h2>
          <button
            style={{
              padding: "6px 14px",
              background: C.brand,
              color: C.white,
              border: "none",
              borderRadius: 7,
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
            + 업로드
          </button>
        </div>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="논문 검색..."
          style={{
            width: "100%",
            padding: "8px 12px",
            border: `1px solid ${C.gray200}`,
            borderRadius: 8,
            fontSize: 12,
            color: C.gray700,
            outline: "none",
            boxSizing: "border-box",
            background: C.gray50,
          }}
        />
      </div>

      {/* List */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {filtered.map((paper) => (
          <button
            key={paper.id}
            onClick={() => onSelect(paper.id)}
            style={{
              width: "100%",
              padding: "14px 18px",
              textAlign: "left",
              border: "none",
              borderBottom: `1px solid ${C.gray100}`,
              cursor: "pointer",
              background: selectedId === paper.id ? C.brandLight : C.white,
              borderLeft:
                selectedId === paper.id
                  ? `3px solid ${C.brand}`
                  : "3px solid transparent",
              transition: "all 0.1s",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: 4,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color:
                    selectedId === paper.id ? C.brand : C.gray900,
                  lineHeight: 1.4,
                  flex: 1,
                  paddingRight: 8,
                }}
              >
                {paper.title}
              </span>
              <StatusPill status={paper.status} />
            </div>
            <div style={{ fontSize: 11, color: C.gray400, marginBottom: 6 }}>
              {paper.authors} · {paper.year} · {paper.journal}
            </div>
            {paper.status === "DONE" && (
              <div style={{ fontSize: 11, color: C.gray600 }}>
                근거 {paper.evidenceCount}개 추출됨
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Evidence Panel ───────────────────────────────────────────────

function EvidencePanel({ paperId }) {
  const paper = MOCK_PAPERS.find((p) => p.id === paperId);
  const [activeFilter, setActiveFilter] = useState("전체");
  const [keyword, setKeyword] = useState("");
  const [copiedId, setCopiedId] = useState(null);

  const allTags = ["전체", "아키텍처", "성능 지표", "실험 설정"];

  const filtered = MOCK_EVIDENCES.filter((e) => {
    const matchTag = activeFilter === "전체" || e.tags.includes(activeFilter);
    const matchKw =
      !keyword ||
      e.sentence.toLowerCase().includes(keyword.toLowerCase()) ||
      e.keywords.some((k) => k.toLowerCase().includes(keyword.toLowerCase()));
    return matchTag && matchKw;
  });

  const handleCopy = (e) => {
    navigator.clipboard?.writeText(e.sentence);
    setCopiedId(e.id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  if (!paper) {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.gray400,
          flexDirection: "column",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 40 }}>📄</span>
        <span style={{ fontSize: 14 }}>논문을 선택해주세요</span>
      </div>
    );
  }

  if (paper.status === "PROCESSING") {
    return (
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            border: `4px solid ${C.brandLight}`,
            borderTop: `4px solid ${C.brand}`,
            animation: "spin 1s linear infinite",
          }}
        />
        <div style={{ fontSize: 15, fontWeight: 600, color: C.gray700 }}>
          AI가 근거 문장을 추출하고 있습니다
        </div>
        <div style={{ fontSize: 12, color: C.gray400 }}>
          잠시 후 자동으로 업데이트됩니다
        </div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Paper header */}
      <div
        style={{
          padding: "20px 24px 16px",
          borderBottom: `1px solid ${C.gray200}`,
          background: C.white,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ flex: 1 }}>
            <h1
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: C.gray900,
                margin: "0 0 4px",
                lineHeight: 1.3,
              }}
            >
              {paper.title}
            </h1>
            <div style={{ fontSize: 12, color: C.gray400 }}>
              {paper.authors} · {paper.year} · {paper.journal} ·{" "}
              <span style={{ color: C.brand, fontWeight: 600 }}>
                피인용 {paper.citationCount.toLocaleString()}회
              </span>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8, marginLeft: 16 }}>
            <button
              style={outlineBtn}
            >
              📋 인용 복사
            </button>
            <button
              style={{
                ...outlineBtn,
                background: C.brand,
                color: C.white,
                borderColor: C.brand,
              }}
            >
              📊 보고서 생성
            </button>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div
        style={{
          padding: "12px 24px",
          borderBottom: `1px solid ${C.gray200}`,
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: C.gray50,
          flexWrap: "wrap",
        }}
      >
        <div style={{ display: "flex", gap: 6 }}>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              style={{
                padding: "5px 12px",
                borderRadius: 99,
                border: `1px solid ${activeFilter === tag ? C.brand : C.gray200}`,
                background: activeFilter === tag ? C.brandLight : C.white,
                color: activeFilter === tag ? C.brand : C.gray600,
                fontSize: 12,
                fontWeight: activeFilter === tag ? 600 : 400,
                cursor: "pointer",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="키워드로 검색..."
          style={{
            marginLeft: "auto",
            padding: "6px 12px",
            border: `1px solid ${C.gray200}`,
            borderRadius: 8,
            fontSize: 12,
            color: C.gray700,
            outline: "none",
            width: 180,
            background: C.white,
          }}
        />
        <span style={{ fontSize: 12, color: C.gray400 }}>
          {filtered.length}개 근거
        </span>
      </div>

      {/* Evidence list */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px 24px" }}>
        {filtered.map((ev) => (
          <div
            key={ev.id}
            style={{
              background: C.white,
              border: `1px solid ${C.gray200}`,
              borderRadius: 12,
              padding: "16px 18px",
              marginBottom: 12,
              transition: "box-shadow 0.15s",
              boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            {/* Source location */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10,
              }}
            >
              <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <Badge
                  label={`p.${ev.page}`}
                  color={C.gray100}
                  textColor={C.gray600}
                />
                <Badge
                  label={`단락 ${ev.paragraph}`}
                  color={C.gray100}
                  textColor={C.gray600}
                />
                {ev.tags.map((t) => (
                  <Badge key={t} label={t} />
                ))}
              </div>
              <button
                onClick={() => handleCopy(ev)}
                style={{
                  padding: "4px 12px",
                  border: `1px solid ${C.gray200}`,
                  borderRadius: 6,
                  background: copiedId === ev.id ? "#D1FAE5" : C.white,
                  color: copiedId === ev.id ? "#065F46" : C.gray600,
                  fontSize: 11,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {copiedId === ev.id ? "✓ 복사됨" : "복사"}
              </button>
            </div>

            {/* Sentence */}
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                color: C.gray700,
                margin: "0 0 12px",
                borderLeft: `3px solid ${C.brand}`,
                paddingLeft: 12,
                fontStyle: "italic",
              }}
            >
              "{ev.sentence}"
            </p>

            {/* Meta */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 11,
                    color: C.gray400,
                    marginBottom: 3,
                  }}
                >
                  AI 추출 신뢰도
                </div>
                <ConfidenceBar value={ev.confidence} />
              </div>
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {ev.keywords.map((k) => (
                  <span
                    key={k}
                    style={{
                      fontSize: 10,
                      padding: "2px 8px",
                      background: "#F0F4FF",
                      color: "#4338CA",
                      borderRadius: 99,
                      fontWeight: 500,
                    }}
                  >
                    #{k}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Upload Modal ─────────────────────────────────────────────────

function UploadModal({ onClose }) {
  const [dragging, setDragging] = useState(false);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: C.white,
          borderRadius: 16,
          padding: 32,
          width: 480,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <h2 style={{ margin: 0, fontSize: 17, fontWeight: 700, color: C.gray900 }}>
            논문 업로드
          </h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: 18,
              color: C.gray400,
            }}
          >
            ✕
          </button>
        </div>

        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); }}
          style={{
            border: `2px dashed ${dragging ? C.brand : C.gray200}`,
            borderRadius: 12,
            padding: "36px 24px",
            textAlign: "center",
            background: dragging ? C.brandLight : C.gray50,
            cursor: "pointer",
            marginBottom: 20,
            transition: "all 0.2s",
          }}
        >
          <div style={{ fontSize: 36, marginBottom: 10 }}>📄</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: C.gray700, marginBottom: 6 }}>
            파일을 여기에 끌어다 놓으세요
          </div>
          <div style={{ fontSize: 12, color: C.gray400, marginBottom: 14 }}>
            PDF, DOCX, TXT 지원 · 최대 50MB
          </div>
          <button
            style={{
              padding: "8px 20px",
              background: C.brand,
              color: C.white,
              border: "none",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            파일 선택
          </button>
        </div>

        <div style={{ fontSize: 12, color: C.gray400, textAlign: "center" }}>
          업로드 후 AI가 자동으로 근거 문장을 추출합니다
        </div>
      </div>
    </div>
  );
}

// ─── Shared Styles ────────────────────────────────────────────────

const outlineBtn = {
  padding: "7px 14px",
  border: `1px solid ${C.gray200}`,
  borderRadius: 8,
  background: C.white,
  color: C.gray700,
  fontSize: 12,
  fontWeight: 600,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: 5,
};

// ─── Stats Card (Dashboard) ───────────────────────────────────────

function StatsBar() {
  const stats = [
    { label: "업로드된 논문", value: "3", icon: "📄", color: C.brand },
    { label: "추출된 근거", value: "21", icon: "✂️", color: C.success },
    { label: "저장된 인용", value: "8", icon: "📌", color: C.warning },
    { label: "생성된 보고서", value: "2", icon: "📊", color: "#7C3AED" },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 14,
        padding: "20px 24px",
        borderBottom: `1px solid ${C.gray200}`,
        background: C.white,
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            padding: "14px 16px",
            background: C.gray50,
            borderRadius: 10,
            border: `1px solid ${C.gray100}`,
          }}
        >
          <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
          <div
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: s.color,
              marginBottom: 2,
            }}
          >
            {s.value}
          </div>
          <div style={{ fontSize: 11, color: C.gray400 }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────

export default function ScholarLens() {
  const [activeNav, setActiveNav] = useState("papers");
  const [selectedPaper, setSelectedPaper] = useState("p1");
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
        background: C.gray50,
      }}
    >
      {/* Sidebar */}
      <Sidebar active={activeNav} onNav={setActiveNav} />

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {/* Top bar */}
        <header
          style={{
            height: 52,
            background: C.white,
            borderBottom: `1px solid ${C.gray200}`,
            display: "flex",
            alignItems: "center",
            padding: "0 24px",
            justifyContent: "space-between",
            flexShrink: 0,
          }}
        >
          <div style={{ fontSize: 13, color: C.gray400 }}>
            <span style={{ color: C.gray700, fontWeight: 500 }}>
              {NAV_ITEMS.find((n) => n.id === activeNav)?.label}
            </span>
          </div>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <button
              onClick={() => setShowUpload(true)}
              style={{
                padding: "6px 16px",
                background: C.brand,
                color: C.white,
                border: "none",
                borderRadius: 8,
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              + 논문 업로드
            </button>
          </div>
        </header>

        {/* Stats */}
        <StatsBar />

        {/* Content area */}
        <div style={{ flex: 1, display: "flex", overflow: "hidden" }}>
          <PaperListPanel
            selectedId={selectedPaper}
            onSelect={setSelectedPaper}
          />
          <EvidencePanel paperId={selectedPaper} />
        </div>
      </div>

      {/* Upload modal */}
      {showUpload && <UploadModal onClose={() => setShowUpload(false)} />}
    </div>
  );
}
