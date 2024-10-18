from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import Dict, List, Optional

app = FastAPI()

# Permitir CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cambia esto a los dominios que necesites
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de datos para las respuestas del cuestionario
class QuizData(BaseModel):
    question: int  # Valor de la pregunta
    answer: int    # Valor de la respuesta seleccionada
    category: str  # Nueva categoría para la pregunta

# Modelo para almacenar los resultados por sección
class SaveAnswersRequest(BaseModel):
    email: EmailStr
    answers: List[QuizData]
    sectionResults: Dict[str, int]  # Resultados por sección (nueva propiedad)

# Diccionario para almacenar las preguntas y respuestas por usuario
user_quiz_data: Dict[EmailStr, Dict] = {}

@app.get("/")
def index():
    return {"message": "Bienvenido al sistema de preguntas y respuestas del quiz."}

@app.post("/saveAnswers")
def save_answers(request: SaveAnswersRequest):
    email = request.email
    answers = request.answers
    section_results = request.sectionResults  # Obtener los resultados por sección

    if email not in user_quiz_data:
        # Inicializa los datos del usuario con respuestas y resultados por sección
        user_quiz_data[email] = {"answers": [], "section_results": {}}
    
    # Agregar las respuestas individuales
    user_quiz_data[email]["answers"].extend(answers)

    # Agregar o actualizar los resultados por sección
    for category, score in section_results.items():
        if category in user_quiz_data[email]["section_results"]:
            user_quiz_data[email]["section_results"][category] += score
        else:
            user_quiz_data[email]["section_results"][category] = score

    return {"message": "Respuestas y resultados por sección guardados con éxito."}

@app.get("/users")
def get_all_users():
    return user_quiz_data