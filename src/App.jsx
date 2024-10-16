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
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Antes de tomar una decisión siempre estoy dispuesto a recibir un buen consejo.',
      value: 2, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'La toma de decisiones es un asunto personal y no se requiere el consejo de nadie.',
      value: 3, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'No me interesa el consejo de otras personas, porque nadie conoce la realidad que vivo mejor que yo.',
      value: 4, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //juicio
    {
      question: 'No me interesa el consejo de otras personas, porque nadie conoce la realidad que vivo mejor que yo.',
      value: 5, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Me incomoda tener que tomar decisiones sin reflexionar.',
      value: 6, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Las mejores decisiones son aquellas que salen del corazón.',
      value: 7, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Las decisiones tengo que tomarlas en caliente porque el tiempo apremia.',
      value: 8, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //imperio
    {
      question: 'Es tan importante tomar una decisión como llevarla a cabo. ',
      value: 9, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Normalmente me aseguro que una instrucción que doy se cumpla porque es parte de mi responsabilidad. ',
      value: 10, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Aunque no sea posible llevar a cabo la elección tomada lo que importan son las intenciones.',
      value: 11, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Si doy una instrucción y no se cumple la culpa es de quien no la cumplió.',
      value: 12, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //memoria del pasado
    {
      question: ' Hay que indagar en el pasado para encontrar respuestas de nuestro presente.',
      value: 13, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Me interesa conocer la historia de la institución en la que laboro porque encuentro datos interesantes que me son de utilidad.',
      value: 14, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'No vale la pena recordar al pasado de la institución, ya sucedió y no se puede hacer nada más.',
      value: 15, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'No me interesa el pasado, solo el presente y el futuro.',
      value: 16, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //circunspension
    {
      question: 'Hay que estar atento a lo que sucede afuera de nuestra organización porque puede tener efectos positivos o negativos.',
      value: 17, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Tomo en cuenta los factores externos antes de tomar una decisión.',
      value: 18, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Lo que sucede afuera de la organización no afecta, lo que afecta es lo que hacemos nosotros en el interior. ',
      value: 19, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Me concentro en lo que sucede al interior de nuestra institución porque lo externo no lo puedo controlar. ',
      value: 20, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //cautela
    {
      question: 'La prevención es el camino más corto y eficaz para evitar problemas.',
      value: 21, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Me gusta analizar los riesgos en mi organización y establecer estrategias de prevención. ',
      value: 22, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },    {
      question: 'Es imposible prever los accidentes por eso se llaman accidentes. ',
      value: 23, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },  
    {
      question: 'Procuro no pensar en lo que puede salir mal. ',
      value: 24, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
     //perseverancia  
     {
      question: 'Es bueno luchar por alcanzar nuestros objetivos por difícil que parezca.',
      value: 25, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Entiendo que las cosas que valen la pena ofrecen obstáculos que hay que vencer y estoy dispuesto a enfrentarlos. ',
      value: 26, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Creo que si las cosas se ponen difíciles es mejor abandonar a tiempo los propósitos. ',
      value: 27, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Cuando veo obstáculos iniciales en cualquier proyecto entiendo que es mejor abandonarlo. ',
      value: 28, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //constancia
    {
      question: 'Es necesario resistir el embate del tiempo para cumplir nuestros objetivos.',
      value: 29, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'No importa el tiempo que me lleve alcanzar mis objetivos insisto en cumplirlos.',
      value: 30, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Es mejor plantearse objetivos a corto plazo porque el tiempo todo lo diluye.',
      value: 31, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'No me gustan los proyectos a largo plazo porque me desesperan.',
      value: 32, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //Paciencia
    {
      question: 'Las cosas que valen la pena llevan su tiempo y es necesario saber esperar sin desanimar. ',
      value: 33, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Tengo confianza en que las cosas van a mejorar, pero es necesario saber esperar. ',
      value: 34, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'La espera desespera y termina destruyendo el optimismo.',
      value: 35, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Estoy muy desanimado de tener que esperar que las cosas mejoren. ',
      value: 36, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //Magnanimidad 
    {
      question: 'Las grandes obras expresan la grandeza humana.',
      value: 37, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Me gustan los proyectos grandes y ambiciosos.  ',
      value: 38, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Las grandes obras son un derroche de recursos. ',
      value: 39, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Prefiero proyectos modestos y realizables a grandes y complicados proyectos.',
      value: 40, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //Cultura de legalidad 
    {
      question: 'Creo que las normas deben aplicarse a todos por igual. ',
      value: 41, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Las normas son valiosas y las respeto porque gracias a ellas cada quien hace lo que debe. ',
      value: 42, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Las leyes se hicieron para violarse. ',
      value: 43, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Creo que en cada regla siempre se puede hacer una excepción dependiendo de la persona afectada. ',
      value: 44, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //Justicia distributiva
    {
      question: 'Los bienes deben distribuirse entre todas las personas sin excluir a nadie.  ',
      value: 45, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Los pobres merecen más apoyos por su condición. ',
      value: 46, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'El que parte y reparte se debe quedar con la mayor parte.  ',
      value: 47, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'En la repartición si te pones listo te debe tocar más.  ',
      value: 48, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //justicia conmutativa
    {
      question: ' Es bueno que en mis negociaciones ambas partes ganen a sólo ganar yo.  ',
      value: 49, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'No me incomoda pagar por un bien o servicio cuando el precio es justo. ',
      value: 50, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Creo que, sin engañar un poco, es imposible sobresalir. ',
      value: 51, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'En cualquier transacción hay que ponerse listo y sacar provecho porque de lo contrario los demás lo harán contigo. ',
      value: 52, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //Gratitud
    {
      question: 'Agradecer es un acto de justicia.',
      value: 53, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Estoy consciente de los favores que he recibido y que debo agradecer.  ',
      value: 54, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Si los favores se hacen desinteresadamente el agradecimiento sale sobrando ',
      value: 55, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'La gente que me ha ayudado no lo hace desinteresadamente, por ello no tengo nada que agradecer. ',
      value: 56, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    //Fidelidad
    {
      question: 'Lo que se promete se cumple. ',
      value: 57, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Honro mis promesas con mis acciones. ',
      value: 58, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: -2, label: 'Totalmente en desacuerdo' },
        { value: -1, label: 'En desacuerdo' },
        { value: 1, label: 'De acuerdo' },
        { value: 2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'Prometer no empobrece, cumplir es lo que aniquila. ',
      value: 59, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
    {
      question: 'A la gente le gustan las promesas y yo no tengo problema en darles lo que quieren.  ',
      value: 60, // Value for this question
      options: [
        { value: 0, label: 'Indiferente' },
        { value: 2, label: 'Totalmente en desacuerdo' },
        { value: 1, label: 'En desacuerdo' },
        { value: -1, label: 'De acuerdo' },
        { value: -2, label: 'Totalmente de acuerdo' }
      ]
    },
      //Respeto
      {
        question: 'Todas las personas merecen el mismo respeto sin importar sus actos.  ',
        value: 61, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Yo respeto a todas las personas, aunque no apruebe sus acciones. ',
        value: 62, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'El valor de una persona depende de sus acciones.',
        value: 63, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Yo solo respeto a quienes se lo merecen.',
        value: 64, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },  
      //Liberalidad
      {
        question: 'El dinero es un recurso valioso que debe manejarse con conocimiento y responsabilidad. ',
        value: 65, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Cuido mi dinero con esmero. ',
        value: 66, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'El dinero se hizo para gastarse. ',
        value: 67, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Ninguna cantidad de dinero es suficiente. Entre más ganas más gastas.',
        value: 68, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },  
      //Honestidad
      {
        question: 'Es mejor pagar las consecuencias de una mala acción a vivir con la conciencia de haber mentido o sobornado por evitarlas.  ',
        value: 69, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Si encuentro dinero que no me pertenece sin dudar busco a su dueño para devolvérselo. ',
        value: 70, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Me parece que robar a los ricos y dárselo a los pobres es dar un poco de justicia a los últimos. ',
        value: 71, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Para mí los responsables de que los policías sean corruptos son quienes les designan bajos salarios. ',
        value: 72, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },  
      //Moderacion
      {
        question: 'Una vida sin equilibrio es una vida de esclavitud.',
        value: 73, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Llevo una vida equilibrada sin excesos',
        value: 74, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Eso de abstenerse de cosas es de apocados y débiles. ',
        value: 75, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'La vida es corta, por eso la disfruto sin abstenciones ni remordimientos.',
        value: 76, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },  
      //sobriedad
      {
        question: 'Ingerir bebidas alcohólicas no es malo si se hace con moderación. ',
        value: 77, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'No me emborracho porque es inmoral. ',
        value: 78, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Emborracharse es malo sólo si dañas con ello a un tercero. ',
        value: 79, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Si me emborracho sin llegar al alcoholismo no tiene nada de malo. ',
        value: 80, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      }, 
      //Humildad
      {
        question: 'Cada quien debe reconocer sus propias insuficiencias y luchar para superarlas.  ',
        value: 81, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Soy capaz de identificar rápidamente mis defectos y debilidades.',
        value: 82, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Si muestro humildad las personas la confunden con debilidad.',
        value: 83, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Es bueno que otras personas piensen que soy mejor de lo que realmente soy.  ',
        value: 84, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      }, 
      //simplicidad
      {
        question: 'Decir siempre la verdad inspira confianza. ',
        value: 85, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Si no estoy seguro mejor no hablo.',
        value: 86, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'A las personas hay que decirles lo que quieren escuchar.',
        value: 87, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Yo expreso lo que pienso y que cada quien crea lo que quiera.',
        value: 88, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      }, 
      //Estudiosidad
      {
        question: 'Existe una sola verdad, pero muchas opiniones.  ',
        value: 89, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Conocer la verdad me hace crecer como persona ',
        value: 90, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: -2, label: 'Totalmente en desacuerdo' },
          { value: -1, label: 'En desacuerdo' },
          { value: 1, label: 'De acuerdo' },
          { value: 2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'Cada quien tiene su verdad y es igual de valida y respetable que la de cualquier otra persona. ',
        value: 91, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
        ]
      },
      {
        question: 'No busco la verdad porque es imposible conocerla. ',
        value: 92, // Value for this question
        options: [
          { value: 0, label: 'Indiferente' },
          { value: 2, label: 'Totalmente en desacuerdo' },
          { value: 1, label: 'En desacuerdo' },
          { value: -1, label: 'De acuerdo' },
          { value: -2, label: 'Totalmente de acuerdo' }
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
    const sectionResults = {}; // Guardará los resultados por categoría

    const results = questions.map((question, index) => {
        const category = getCategory(question.value);
        
        // Inicializa la categoría si no existe en sectionResults
        if (!sectionResults[category]) {
            sectionResults[category] = 0;
        }

        // Suma la respuesta seleccionada a la categoría correspondiente
        if (answers[index] !== null) {
            sectionResults[category] += answers[index];
        }

        return {
            question: question.value,  // Envía el valor de la pregunta
            answer: answers[index],     // Envía el valor de la respuesta seleccionada
            category: category, // Categoría obtenida
        };
    });

    const body = {
        email: email, // Asegúrate de tener el valor del correo electrónico
        answers: results,
        sectionResults: sectionResults // Envía también los resultados por sección
    };

    // Enviar datos al backend
    try {
        const response = await fetch('http://127.0.0.1:8000/saveAnswers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body), // Usa el objeto body aquí
        });

        if (response.ok) {
            alert('Respuestas guardadas con éxito.');
        } else {
            alert('Error al guardar las respuestas.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al guardar las respuestas.');
    }
};

const categories = [
  { limit: 4, name: "Consejo" },
  { limit: 8, name: "Juicio" },
  { limit: 12, name: "Perio" },
  { limit: 16, name: "Memoria del pasado" },
  { limit: 20, name: "Circunspección" },
  { limit: 24, name: "Cautela" },
  { limit: 28, name: "Perseverancia" },
  { limit: 32, name: "Constancia" },
  { limit: 36, name: "Paciencia" },
  { limit: 40, name: "Magnanimidad" },
  { limit: 44, name: "Cultura de la legalidad" },
  { limit: 48, name: "Justicia distributiva" },
  { limit: 52, name: "Justicia conmutativa" },
  { limit: 56, name: "Gratitud" },
  { limit: 60, name: "Fidelidad" },
  { limit: 64, name: "Respeto" },
  { limit: 68, name: "Liberalidad" },
  { limit: 72, name: "Honestidad" },
  { limit: 76, name: "Moderación" },
  { limit: 80, name: "Sobriedad" },
  { limit: 84, name: "Humildad" },
  { limit: 88, name: "Simplicidad" },
  { limit: 90, name: "Estudiosidad" },
];

const getCategory = (questionValue) => {
  for (let i = 0; i < categories.length; i++) {
      if (questionValue <= categories[i].limit) {
          return categories[i].name;
      }
  }
  return "desconocido"; // Valor por defecto si el rango es mayor que 90
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