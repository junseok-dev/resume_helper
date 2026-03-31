import anthropic
from mcp.server.fastmcp import FastMCP
from prompts import RESUME_PROMPT, COVER_LETTER_PROMPT, PORTFOLIO_PROMPT

mcp = FastMCP("resume-assistant")
client = anthropic.Anthropic()

def call_claude(prompt):
    return client.messages.create(
        model="claude-opus-4-5",
        max_tokens=2048,
        messages=[{"role": "user", "content": prompt}]
    ).content[0].text

@mcp.tool()
def generate_resume(user_info: str, job_type: str, job_keywords: str = "") -> str:
    """이력서 자동 생성"""
    return call_claude(RESUME_PROMPT.format(
        user_info=user_info, job_type=job_type, job_keywords=job_keywords
    ))

@mcp.tool()
def generate_cover_letter(job_type: str, company: str, resume_summary: str) -> str:
    """자기소개서 작성"""
    return call_claude(COVER_LETTER_PROMPT.format(
        job_type=job_type, company=company, resume_summary=resume_summary
    ))

@mcp.tool()
def generate_portfolio(projects: str) -> str:
    """포트폴리오 페이지 생성"""
    return call_claude(PORTFOLIO_PROMPT.format(projects=projects))

@mcp.tool()
def tailor_resume(resume: str, job_description: str) -> str:
    """채용공고 맞춤 이력서"""
    return call_claude(f"이 이력서를 아래 JD에 맞게 최적화해줘.\n\n이력서:\n{resume}\n\nJD:\n{job_description}")

@mcp.tool()
def score_resume(resume: str, job_description: str) -> str:
    """이력서 적합도 점수"""
    return call_claude(f"이 이력서가 JD에 얼마나 맞는지 100점 만점으로 채점하고, 개선점 3가지 제안해줘.\n\n이력서:\n{resume}\n\nJD:\n{job_description}")

if __name__ == "__main__":
    mcp.run()