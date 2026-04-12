export default function CitationsPage({
  params,
}: {
  params: { paperId: string };
}) {
  return (
    <main>
      <h1>인용 관리</h1>
      {/* TODO: APA/MLA/Chicago 형식 선택 + 인용 복사 */}
      {/* TODO: 신뢰성 지표 (저자, 피인용 수, 발행 연도) */}
      {/* paperId: {params.paperId} */}
    </main>
  );
}
