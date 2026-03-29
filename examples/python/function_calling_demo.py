"""Simple function-calling style demo.

This file is intentionally framework-free. It shows the concept before using any SDK.
"""

from __future__ import annotations

from dataclasses import dataclass
from typing import Callable


def draft_notice(topic: str, date: str) -> str:
    return (
        f"[공지]\n"
        f"주제: {topic}\n"
        f"일시: {date}\n"
        f"관련 자료를 미리 읽고 참석 부탁드립니다."
    )


def make_case_summary(case_name: str) -> str:
    return (
        f"{case_name} 케이스는 제한된 자원 속에서 어떤 선택을 해야 하는지 묻는 사례다. "
        f"핵심은 상황 요약, 대안 비교, 의사결정 기준 정리다."
    )


def build_questions(topic: str) -> list[str]:
    return [
        f"{topic}에서 가장 중요한 의사결정은 무엇인가?",
        f"{topic}의 대안은 무엇이며 각각의 장단점은 무엇인가?",
        f"{topic}를 오늘 우리 조직이나 팀에 적용하면 무엇이 달라지는가?",
    ]


@dataclass
class Tool:
    name: str
    description: str
    fn: Callable[..., object]


TOOLS = {
    "draft_notice": Tool(
        name="draft_notice",
        description="세션 또는 행사 공지문을 작성한다.",
        fn=draft_notice,
    ),
    "make_case_summary": Tool(
        name="make_case_summary",
        description="케이스스터디 요약을 만든다.",
        fn=make_case_summary,
    ),
    "build_questions": Tool(
        name="build_questions",
        description="토론 질문을 생성한다.",
        fn=build_questions,
    ),
}


def decide_tool(user_input: str) -> tuple[str, dict[str, str]]:
    if "공지" in user_input:
        return "draft_notice", {"topic": "아름다운서당 세션", "date": "이번 주 목요일 19:00"}
    if "케이스" in user_input:
        return "make_case_summary", {"case_name": "넷플릭스 성장 전략"}
    return "build_questions", {"topic": "AI Native 시대의 커리어"}


def run_demo(user_input: str) -> object:
    tool_name, arguments = decide_tool(user_input)
    tool = TOOLS[tool_name]
    print(f"[planner] selected tool = {tool.name}")
    print(f"[planner] arguments = {arguments}")
    return tool.fn(**arguments)


if __name__ == "__main__":
    request = "AI Native 관련 세션에서 쓸 토론 질문을 만들어줘."
    result = run_demo(request)
    print("[result]")
    print(result)
