export default function PaperDetailPage({
  params,
}: {
  params: { paperId: string };
}) {
  return (
    <main>
      <h1>논문 상세</h1>
      {/* TODO: 원문 뷰어 + 추출된 근거 문장 리스트 */}
      {/* paperId: {params.paperId} */}
    </main>
  );
}
