from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import anthropic
from prompts import RESUME_PROMPT, COVER_LETTER_PROMPT, PORTFOLIO_PROMPT

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
client = anthropic.Anthropic()  # ANTHROPIC_API_KEY 환경변수 필요

class ResumeRequest(BaseModel):
    user_info: str
    job_type: str
    job_keywords: str = ""

class CoverLetterRequest(BaseModel):
    job_type: str
    company: str
    resume_summary: str

class PortfolioRequest(BaseModel):
    projects: str

def call_claude(prompt: str) -> str:
    msg = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=2048,
        messages=[{"role": "user", "content": prompt}]
    )
    return msg.content[0].text

@app.post("/resume")
def generate_resume(req: ResumeRequest):
    prompt = RESUME_PROMPT.format(**req.dict())
    return {"result": call_claude(prompt)}

@app.post("/cover-letter")
def generate_cover_letter(req: CoverLetterRequest):
    prompt = COVER_LETTER_PROMPT.format(**req.dict())
    return {"result": call_claude(prompt)}

@app.post("/portfolio")
def generate_portfolio(req: PortfolioRequest):
    prompt = PORTFOLIO_PROMPT.format(**req.dict())
    return {"result": call_claude(prompt)}