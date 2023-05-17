import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import imagem1 from './fotos/i1.webp';
import imagem2 from './fotos/i2.webp';
import imagem3 from './fotos/i3.webp';
import imagem4 from './fotos/i4.webp';
import imagem5 from './fotos/i5.webp';
import imagem6 from './fotos/i6.webp';
import imagem7 from './fotos/i7.webp';
import imagem8 from './fotos/i8.webp';
import imagem9 from './fotos/i9.webp';
import imagem10 from './fotos/i10.webp';
import imagem11 from './fotos/i11.webp';
import imagem12 from './fotos/i12.webp';

const Comment = () => {
  const [showMore, setShowMore] = useState(false);
  const [commentTimes, setCommentTimes] = useState([]);

  useEffect(() => {
    const times = Array(12)
      .fill()
      .map(() => randomTime());
    setCommentTimes(times);
  }, []);

  const loadMore = () => {
    setShowMore(!showMore);
  };

  const randomTime = () => {
    const minutes = Math.floor(Math.random() * 59) + 1;
    return `${minutes} min`;
  };

  const comments = [
    {
      id: '2',
      image: imagem1,
      name: 'Joana Maria Oliveira',
      text: 'Marcos muito obrigada! A sua fórmula caseira me fez emagrecer 10kg em poucas semanas.😍😍',
      time: commentTimes[0],
      likes: 5,
    },
    {
      id: '3',
      image: imagem2,
      name: 'Cristina Santos',
      text: 'Ele também me ajudou a perder 22kg com essa fórmula caseira, muito boa',
      time: commentTimes[1],
      likes: 2,
    },
    {
      id: '4',
      image: imagem3,
      name: 'Sofia Pietra',
      text: 'Cientista Marcos, esse vídeo seu mudou a minha vida, já são 20 quilos a menos em 4 meses, agradecida 🙏🙏',
      time: commentTimes[2],
      likes: 2,
    },
    {
      id: '5',
      image: imagem4,
      name: 'Juliana Castro',
      text: 'Tomei essa fórmula caseira durante 1 mês, acompanhada com uma alimentação melhor, perdi 10 quilos. Obrigada Marcos!🥰',
      time: commentTimes[3],
      likes: 5,
    },
    {
      id: '6',
      image: imagem5,
      name: 'Nilva Lopes',
      text: 'Estou MUITO feliz Marcos, há 5 meses atrás eu estava com 72kg e hoje estou com 58kg, até postei uma foto no meu perfil aqui no Facebook do antes e depois. Obrigada por compartilhar essa fórmula conosco 😘😘😘',
      time: commentTimes[4],
      likes: 6,
    },
    {
      id: '7',
      image: imagem6,
      name: 'Isabela Vargas',
      text: 'Pessoal, eu achava que era mentira, mas hoje completa a primeira semana tomando e eu já perdi 2 quilos. 😱 Obrigada por compartilhar isso, Marcos 🥰',
      time: commentTimes[5],
      likes: 1,
    },
    {
      id: '9',
      image: imagem7,
      name: 'Camila Sutra',
      text: 'Gente, como é fácil fazer, né? Eu nunca imaginei que tinha algo assim.',
      time: commentTimes[6],
      likes: 2,
    },
    {
      id: '10',
      image: imagem8,
      name: 'Mario Roberto Gomes',
      text: 'Hoje fez 5 dias tomando e 1 klos já conseguir eliminar tô muito feliz obrigado Marcos 😍😍😍',
      time: commentTimes[7],
      likes: 7,
    },
    {
      id: '11',
      image: imagem9,
      name: 'Livia Santos',
      text: 'Marcos eu já estou tomando, já eliminei 7 kls, já fez muita diferença, minhas roupas estavam todas apertadas, agora já estão começando a ficar largas, estava sentindo muita dor no joelho e agora melhorou muito depois que emagreci 🙏🙏🙏',
      time: commentTimes[8],
      likes: 8,
    },
    {
      id: '12',
      image: imagem10,
      name: 'Andressa Ramira',
      text: 'Muito Obrigado Cientista Marcos. Já estou vendo resultado ..🌹🥰🙋',
      time: commentTimes[9],
      likes: 10,
    },
    {
      id: '13',
      image: imagem11,
      name: 'Diana Torres Romero',
      text: 'Em duas semanas comecei a ver resultados, muito boa essa fórmula caseira Marcos',
      time: commentTimes[10],
      likes: 5,
    },
    {
      id: '14',
      image: imagem12,
      name: 'Bianca Guimaci',
      text: 'Minha irmão perdeu 6 kl em 15 dias com a sua fórmula Marcos... vou começar hj 🤣🤣🤣',
      time: commentTimes[11],
      likes: 1,
    },
  ];

  return (
    <div className='comments py-4'>
      <div className='container'>
        <div className='fb-comments'>
          <div className='fb-comments-header'>
            <span>{comments.length} comentários</span>
          </div>
          <section className='fb-comments' id='2'>
            {comments.map((comment) => (
              <div className='fb-comments-wrapper' key={comment.id}>
                <table className='fb-comments-comment'>
                  <tbody>
                    <tr>
                      <td rowspan='3' className='fb-comments-comment-img'>
                        <Image src={comment.image} width={48} />
                      </td>
                      <td>
                        <font className='fb-comments-comment-name'>
                          <name>{comment.name}</name>
                        </font>
                      </td>
                    </tr>
                    <tr>
                      <td className='fb-comments-comment-text'>
                        {comment.text}
                      </td>
                    </tr>
                    <tr>
                      <td className='fb-comments-comment-actions'>
                        <like>Curtir ({comment.likes})</like>·
                        <reply>Comentar</reply>
                        <date>{comment.time}</date>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </section>
          {!showMore && (
            <div className='button-container'>
              <button className='fb-comments-loadmore' onClick={loadMore}>
                Carregar mais 5 comentários...
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;
