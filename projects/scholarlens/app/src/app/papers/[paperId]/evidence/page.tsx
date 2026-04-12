export default function EvidencePage({
  params,
}: {
  params: { paperId: string };
}) {
  return (
    <main>
      <h1>근거 문장</h1>
      {/* TODO: 근거 문장 리스트 + 키워드/주제 필터 */}
      {/* paperId: {params.paperId} */}
    </main>
  );
}
