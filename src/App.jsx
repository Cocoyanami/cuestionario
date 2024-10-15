import React, { useState } from 'react';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import './App.css';

function App() {
  const questions = [
    {
      //consejo
      question: 'Es una obligación moral consultar a los expertos antes de decidir.',
      value: 1, // Value for this question
      options: [
        { value: 21, label: 'Indiferente' },
        { value: 7, label: 'Totalmente en desacuerdo' },
        { value: 32, label: 'En desacuerdo' },
        { value: 86, label: 'De acuerdo' },
        { value: 34, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Antes de tomar una decisión siempre estoy dispuesto a recibir un buen consejo.',
      value: 2, // Value for this question
      options: [
        { value: 4, label: 'Indiferente' },
        { value: 0, label: 'Totalmente en desacuerdo' },
        { value: 2, label: 'En desacuerdo' },
        { value: 89, label: 'De acuerdo' },
        { value: 85, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'La toma de decisiones es un asunto personal y no se requiere el consejo de nadie.',
      value: 3, // Value for this question
      options: [
        { value: 14, label: 'Indiferente' },
        { value: 30, label: 'Totalmente en desacuerdo' },
        { value: 107, label: 'En desacuerdo' },
        { value: 22, label: 'De acuerdo' },
        { value: 7, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'No me interesa el consejo de otras personas, porque nadie conoce la realidad que vivo mejor que yo.',
      value: 4, // Value for this question
      options: [
        { value: 14, label: 'Indiferente' },
        { value: 30, label: 'Totalmente en desacuerdo' },
        { value: 107, label: 'En desacuerdo' },
        { value: 22, label: 'De acuerdo' },
        { value: 7, label: 'Totalmente de acuerdo' }
      ]
    },
    //juicio
    {
      question: 'No me interesa el consejo de otras personas, porque nadie conoce la realidad que vivo mejor que yo.',
      value: 5, // Value for this question
      options: [
        { value: 3, label: 'Indiferente' },
        { value: 0, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: 98, label: 'De acuerdo' },
        { value: 78, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Me incomoda tener que tomar decisiones sin reflexionar.',
      value: 6, // Value for this question
      options: [
        { value: 13, label: 'Indiferente' },
        { value: 13, label: 'Totalmente en desacuerdo' },
        { value: 26, label: 'En desacuerdo' },
        { value: 70, label: 'De acuerdo' },
        { value: 58, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Las mejores decisiones son aquellas que salen del corazón.',
      value: 7, // Value for this question
      options: [
        { value: 31, label: 'Indiferente' },
        { value: 20, label: 'Totalmente en desacuerdo' },
        { value: 92, label: 'En desacuerdo' },
        { value: 29, label: 'De acuerdo' },
        { value: 8, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Las decisiones tengo que tomarlas en caliente porque el tiempo apremia.',
      value: 8, // Value for this question
      options: [
        { value: 15, label: 'Indiferente' },
        { value: 46, label: 'Totalmente en desacuerdo' },
        { value: 97, label: 'En desacuerdo' },
        { value: 20, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    //imperio
    {
      question: 'Es tan importante tomar una decisión como llevarla a cabo. ',
      value: 9, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 1, label: 'Totalmente en desacuerdo' },
        { value: 2, label: 'En desacuerdo' },
        { value: 93, label: 'De acuerdo' },
        { value: 84, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Normalmente me aseguro que una instrucción que doy se cumpla porque es parte de mi responsabilidad. ',
      value: 10, // Value for this question
      options: [
        { value: 3, label: 'Indiferente' },
        { value: 1, label: 'Totalmente en desacuerdo' },
        { value: 3, label: 'En desacuerdo' },
        { value: 103, label: 'De acuerdo' },
        { value: 70, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Aunque no sea posible llevar a cabo la elección tomada lo que importan son las intenciones.',
      value: 11, // Value for this question
      options: [
        { value: 21, label: 'Indiferente' },
        { value: 15, label: 'Totalmente en desacuerdo' },
        { value: 90, label: 'En desacuerdo' },
        { value: 45, label: 'De acuerdo' },
        { value: 9, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Si doy una instrucción y no se cumple la culpa es de quien no la cumplió.',
      value: 12, // Value for this question
      options: [
        { value: 9, label: 'Indiferente' },
        { value: 28, label: 'Totalmente en desacuerdo' },
        { value: 112, label: 'En desacuerdo' },
        { value: 229, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    //memoria del pasado
    {
      question: ' Hay que indagar en el pasado para encontrar respuestas de nuestro presente.',
      value: 13, // Value for this question
      options: [
        { value: 20, label: 'Indiferente' },
        { value: 1, label: 'Totalmente en desacuerdo' },
        { value: 19, label: 'En desacuerdo' },
        { value: 105, label: 'De acuerdo' },
        { value: 35, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Me interesa conocer la historia de la institución en la que laboro porque encuentro datos interesantes que me son de utilidad.',
      value: 14, // Value for this question
      options: [
        { value: 7, label: 'Indiferente' },
        { value: 0, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: 101, label: 'De acuerdo' },
        { value: 71, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'No vale la pena recordar al pasado de la institución, ya sucedió y no se puede hacer nada más.',
      value: 15, // Value for this question
      options: [
        { value: 23, label: 'Indiferente' },
        { value: 24, label: 'Totalmente en desacuerdo' },
        { value: 104, label: 'En desacuerdo' },
        { value: 23, label: 'De acuerdo' },
        { value: 6, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'No me interesa el pasado, solo el presente y el futuro.',
      value: 16, // Value for this question
      options: [
        { value: 22, label: 'Indiferente' },
        { value: 19, label: 'Totalmente en desacuerdo' },
        { value: 80, label: 'En desacuerdo' },
        { value: 46, label: 'De acuerdo' },
        { value: 13, label: 'Totalmente de acuerdo' }
      ]
    },
    //circunspension
    {
      question: 'Hay que estar atento a lo que sucede afuera de nuestra organización porque puede tener efectos positivos o negativos.',
      value: 17, // Value for this question
      options: [
        { value: 7, label: 'Indiferente' },
        { value: 0, label: 'Totalmente en desacuerdo' },
        { value: 3, label: 'En desacuerdo' },
        { value: 101, label: 'De acuerdo' },
        { value: 69, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Tomo en cuenta los factores externos antes de tomar una decisión.',
      value: 18, // Value for this question
      options: [
        { value: 11, label: 'Indiferente' },
        { value: 0, label: 'Totalmente en desacuerdo' },
        { value: 3, label: 'En desacuerdo' },
        { value: 117, label: 'De acuerdo' },
        { value: 49, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Lo que sucede afuera de la organización no afecta, lo que afecta es lo que hacemos nosotros en el interior. ',
      value: 19, // Value for this question
      options: [
        { value: 12, label: 'Indiferente' },
        { value: 26, label: 'Totalmente en desacuerdo' },
        { value: 103, label: 'En desacuerdo' },
        { value: 27, label: 'De acuerdo' },
        { value: 12, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Me concentro en lo que sucede al interior de nuestra institución porque lo externo no lo puedo controlar. ',
      value: 20, // Value for this question
      options: [
        { value: 17, label: 'Indiferente' },
        { value: 6, label: 'Totalmente en desacuerdo' },
        { value: 40, label: 'En desacuerdo' },
        { value: 88, label: 'De acuerdo' },
        { value: 29, label: 'Totalmente de acuerdo' }
      ]
    },
    //cautela
    {
      question: 'La prevención es el camino más corto y eficaz para evitar problemas.',
      value: 21, // Value for this question
      options: [
        { value: 6, label: 'Indiferente' },
        { value: 3, label: 'Totalmente en desacuerdo' },
        { value: 4, label: 'En desacuerdo' },
        { value: 101, label: 'De acuerdo' },
        { value: 66, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Me gusta analizar los riesgos en mi organización y establecer estrategias de prevención. ',
      value: 22, // Value for this question
      options: [
        { value: 6, label: 'Indiferente' },
        { value: 0, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: 99, label: 'De acuerdo' },
        { value: 74, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Es imposible prever los accidentes por eso se llaman accidentes. ',
      value: 23, // Value for this question
      options: [
        { value: 8, label: 'Indiferente' },
        { value: 32, label: 'Totalmente en desacuerdo' },
        { value: 88, label: 'En desacuerdo' },
        { value: 46, label: 'De acuerdo' },
        { value: 6, label: 'Totalmente de acuerdo' }
      ]
    },    
    {
      question: 'Procuro no pensar en lo que puede salir mal. ',
      value: 24, // Value for this question
      options: [
        { value: 9, label: 'Indiferente' },
        { value: 27, label: 'Totalmente en desacuerdo' },
        { value: 102, label: 'En desacuerdo' },
        { value: 35, label: 'De acuerdo' },
        { value: 7, label: 'Totalmente de acuerdo' }
      ]
    },
  ];


  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false); // Para controlar si se ha ingresado el email
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleOptionSelect = (selectedValue) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = selectedValue;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    const results = questions.map((question, index) => ({
      question: question.question,
      questionValue: question.value,
      selectedAnswer: answers[index],
    }));

    const totalSum = results.reduce((sum, result) => sum + (result.selectedAnswer || 0), 0);

    // Enviar datos al backend
    try {
      const response = await fetch('/api/saveAnswers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, answers: results }),
      });

      if (response.ok) {
        alert(`Respuestas guardadas con éxito. Suma total: ${totalSum}`);
      } else {
        alert('Error al guardar las respuestas.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al guardar las respuestas.');
    }
  };

  // Progreso de la barra basado en el email y las preguntas
  const totalSteps = questions.length + 1; // Una para el email
  const progressPercentage = ((currentQuestionIndex + 1 + (emailSubmitted ? 1 : 0)) / totalSteps) * 100;

  return (
    <div className="App">
      <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>

      {/* Mostrar el campo de email solo si no se ha ingresado */}
      {!emailSubmitted && (
        <div className="question-container">
          <h3>Ingresa tu correo para avanzar</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className='ema'
          />
          <br/><br/><br/>
          <button onClick={() => setEmailSubmitted(true)} disabled={!email}>
            Seguir
          </button>
        </div>
      )}

      {/* Mostrar preguntas solo si el email ha sido ingresado */}
      {emailSubmitted && (
        <MultipleChoiceQuestion
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          onOptionSelect={handleOptionSelect}
          selectedOption={answers[currentQuestionIndex]}
          questionIndex={currentQuestionIndex}
        />
      )}

      {emailSubmitted && (
        <div className="button-container">
          <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
            Anterior
          </button>
          <button onClick={handleNext} disabled={answers[currentQuestionIndex] === null}>
            Siguiente
          </button>
          {currentQuestionIndex === questions.length - 1 && (
            <button onClick={handleSubmit} disabled={!email}>
              Finalizar
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;