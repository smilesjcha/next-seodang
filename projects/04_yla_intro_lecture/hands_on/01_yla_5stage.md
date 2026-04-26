# 실습 1 — YLA 5단계 학습 도우미 (학생 시점, 20분)

## 도달할 결과

학생이 본인 보고서·메모를 들고 와서 **`outline-essay(yla)` → 직접 수정 → `create-ppt(yla)`** 흐름을 1회 완주합니다. 마지막에 학생 손에 PPT 초안 markdown이 남습니다.

## 도달하지 않을 결과

- AI가 보고서를 대필하는 것 — 의도적으로 막혀 있는 시나리오를 1회 보여줍니다.
- 완벽한 발표 자료 — 강의 시간 안에는 \"초안 + 학생이 수정해야 할 곳 표시\"까지만.

## 사전 조건

- Claude Desktop의 "YLA Learning Companion" Project가 만들어져 있고, `docs/yla/` + `projects/01_yla_learning_companion/`이 Project knowledge에 등록.
- 학생이 본인 보고서·에세이 1개를 가져왔거나, 없으면 `examples/input_example_gukbron.md`을 사용.

## 진행 (20분)

### 0~3분 — workspace 준비

학생 활동:

```bash
cd ~/next-seodang
mkdir -p projects/01_yla_learning_companion/workspace/<책이름>
# 본인 보고서를 essay_v1.md로 복사
cp ~/Documents/내보고서.md projects/01_yla_learning_companion/workspace/논어/essay_v1.md
```

보고서가 없는 학생에게 강사 안내:

> "보고서를 안 가져오신 분은 examples 폴더의 국가론 예시를 복사해서 진행하세요."

```bash
cp projects/01_yla_learning_companion/examples/input_example_gukbron.md \
   projects/01_yla_learning_companion/workspace/국가론/essay_v1.md
```

### 3~7분 — `outline-essay(yla)` 호출

학생 활동: Claude Desktop의 채팅창에 **첨부 파일**로 `essay_v1.md`을 드래그하고 다음을 입력.

```
outline-essay(yla)을 적용해줘.

에세이 형식: 2쪽 개조식 보고서
내가 잡고 싶은 주장: <한 줄, 학생 본인 입력>
```

받게 될 결과:
- 가능한 핵심 주장 후보 2-3개
- 선택된 주장에 따른 목차 (서론·본론·결론)
- **본문 문장은 작성되지 않음** — 이게 핵심. 학생이 직접 본문을 채워야 함을 강사가 강조.

강사 설명:
> "주목하세요. AI가 본문을 안 써줍니다. 이게 의도된 동작입니다. AI가 학생을 대신해 글을 쓰면 학생이 자기 사고를 잃어버립니다."

### 7~12분 — 학생이 직접 본문 1단락 추가

학생 활동: `essay_v1.md` 또는 새 파일에 outline의 본론 1단락을 직접 채워봅니다 (시간 짧으면 1-2문장이면 충분).

본 강의는 학생이 뭔가를 직접 쓰는 경험이 60분 동안 한 번 들어가야 하는데, 이 5분이 그 자리입니다.

### 12~17분 — `create-ppt(yla)` 호출 (체크리스트 시연)

학생 활동:

```
create-ppt(yla) — 다음 보고서로 발표 PPT 만들어줘.

발표 형식: 3분 개인 발표
보고서: <첨부>
```

**받게 될 결과 (의도된 흐름)**:
1. Claude가 먼저 사전 체크리스트 8개 항목을 출력
2. 항목 4(핵심 주장), 8(발표자 본인의 관점)이 비어 있으면 거절 또는 학생 응답 요청
3. 학생이 한 줄씩 채우면 진행
4. 슬라이드 3-4장 + 발표자 스크립트 출력

강사 설명:
> "체크리스트가 게이트 역할을 합니다. 보고서가 없으면 PPT 못 만들고, 학생 본인의 관점이 비어 있으면 못 만듭니다. 이건 AI가 학생을 무시하지 않게 만든 안전장치입니다."

### 17~20분 — 결과 저장 + 회고 한 줄

학생 활동:
- Claude가 만들어준 슬라이드 markdown을 `workspace/<책>/slides_v1.md`로 저장
- 한 줄 회고를 댓글로 작성: "체크리스트가 거부한 항목은 ___ 였고, 직접 채우는 데 ___분 걸렸다"

## fallback

| 막힘 | 대응 |
|---|---|
| Claude Desktop이 응답 안 함 | 강사가 미리 받아둔 결과 markdown을 USB·카페로 배포 |
| 학생이 보고서를 가져오지 않음 | examples/input_example_gukbron.md 복사하여 진행 |
| 학생이 \"AI가 본문도 써주면 좋겠다\" 불평 | 의도된 가드레일임을 강조, `docs/yla/06_ai_cautions.md` 1줄 인용 |
| Project knowledge 업로드 실패 | 채팅창에 핵심 prompt 파일을 직접 붙여넣기 |

## 강사 메모

이 실습의 진짜 메시지는 \"PPT를 만드는 법\"이 아닙니다. **AI가 학생을 무시하지 않도록 설계된 도구는 어떻게 보이는가**를 학생이 1회 체험하는 것입니다.

체크리스트가 거절하는 시나리오를 학생이 직접 본 경험은, 1주일 뒤 본인 보고서로 적용할 때 \"AI를 대필 도구로 쓰지 않는다\"는 원칙을 자연스럽게 따르게 만듭니다.

학생이 \"이게 더 불편한데?\"라고 하면 강사 답:
> \"불편합니다. 그게 의도입니다. AI가 편하게 답을 주면, 학생은 자기 답을 안 만듭니다.\"
