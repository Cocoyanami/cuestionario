from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Dict, List

app = FastAPI()

# Permitir CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cambia esto a los dominios que necesites
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class QuizData(BaseModel):
    question: int  # Valor de la pregunta
    answer: int    # Valor de la respuesta seleccionada
    category: str  # Nueva categoría para la pregunta

class SaveAnswersRequest(BaseModel):
    email: EmailStr
    answers: List[QuizData]

# Diccionario para almacenar las preguntas y respuestas por usuario
user_quiz_data: Dict[EmailStr, List[QuizData]] = {}

@app.get("/")
def index():
    return {"message": "Bienvenido al sistema de preguntas y respuestas del quiz."}

@app.post("/saveAnswers")
def save_answers(request: SaveAnswersRequest):
    email = request.email
    answers = request.answers
    if email not in user_quiz_data:
        user_quiz_data[email] = []  # Inicializa los datos del usuario si no existen
    
    for answer in answers:
        user_quiz_data[email].append(answer)

    return {"message": "Respuestas guardadas con éxito."}

@app.get("/users")
def get_all_users():
    return user_quiz_data
