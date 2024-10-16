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


@app.post("/saveAnswersQuiz2")
def save_answers_quiz_2(request: SaveAnswersRequest):
    email = request.email
    answers = request.answers
    
    if email not in user_quiz_data:
        user_quiz_data[email] = {}
    
    quiz_number = 2
    user_quiz_data[email][quiz_number] = answers
    return {"message": "Respuestas guardadas con éxito para Quiz 2."}

@app.post("/saveAnswersQuiz3")
def save_answers_quiz_3(request: SaveAnswersRequest):
    email = request.email
    answers = request.answers
    
    if email not in user_quiz_data:
        user_quiz_data[email] = {}
    
    quiz_number = 3
    user_quiz_data[email][quiz_number] = answers
    return {"message": "Respuestas guardadas con éxito para Quiz 3."}

@app.post("/saveAnswersQuiz4")
def save_answers_quiz_4(request: SaveAnswersRequest):
    email = request.email
    answers = request.answers
    
    if email not in user_quiz_data:
        user_quiz_data[email] = {}
    
    quiz_number = 4
    user_quiz_data[email][quiz_number] = answers
    return {"message": "Respuestas guardadas con éxito para Quiz 4."}


@app.get("/users")
def get_all_users():
    return user_quiz_data

# Nuevo endpoint para mostrar todos los usuarios y sus respuestas
@app.get("/users3")
def get_all_users():
    return user_quiz_data

@app.get("/users2")
def get_all_users():
    formatted_data = {}
    for email, quizzes in user_quiz_data.items():
        formatted_data[email] = {
            f"Quiz {quiz_number}": answers for quiz_number, answers in quizzes.items()
        }
    return formatted_data
