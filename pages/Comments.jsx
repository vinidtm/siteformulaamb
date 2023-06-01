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
  const [commentTimes, setCommentTimes] = useState([]);
  const [numCommentsToShow, setNumCommentsToShow] = useState(7);

  useEffect(() => {
    const times = Array(12)
      .fill()
      .map(() => randomTime());
    setCommentTimes(times);
  }, []);

  const loadMore = () => {
    setNumCommentsToShow((prevNumCommentsToShow) => prevNumCommentsToShow + 7);
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
      likes: 15,
    },
    {
      id: '3',
      image: imagem2,
      name: 'Cristina Santos',
      text: 'Ele também me ajudou a perder 22kg com essa fórmula caseira, muito boa',
      time: commentTimes[1],
      likes: 22,
    },
    {
      id: '4',
      image: imagem3,
      name: 'Sofia Pietra',
      text: 'Cientista Marcos, esse vídeo seu mudou a minha vida, já são 20 quilos a menos em 4 meses, agradecida 🙏🙏',
      time: commentTimes[2],
      likes: 12,
    },
    {
      id: '5',
      image: imagem4,
      name: 'Juliana Castro',
      text: 'Tomei essa fórmula caseira durante 1 mês, acompanhada com uma alimentação melhor, perdi 10 quilos. Obrigada Marcos!🥰',
      time: commentTimes[3],
      likes: 35,
    },
    {
      id: '6',
      image: imagem5,
      name: 'Nilva Lopes',
      text: 'Estou MUITO feliz Marcos, há 5 meses atrás eu estava com 72kg e hoje estou com 58kg, até postei uma foto no meu perfil aqui no Facebook do antes e depois. Obrigada por compartilhar essa fórmula conosco 😘😘😘',
      time: commentTimes[4],
      likes: 16,
    },
    {
      id: '7',
      image: imagem6,
      name: 'Isabela Vargas',
      text: 'Pessoal, eu achava que era mentira, mas hoje completa a primeira semana tomando e eu já perdi 2 quilos. 😱 Obrigada por compartilhar isso, Marcos 🥰',
      time: commentTimes[5],
      likes: 11,
    },
    {
      id: '9',
      image: imagem7,
      name: 'Camila Sutra',
      text: 'Gente, como é fácil fazer, né? Eu nunca imaginei que tinha algo assim.',
      time: commentTimes[6],
      likes: 32,
    },
    {
      id: '10',
      image: imagem8,
      name: 'Mario Roberto Gomes',
      text: 'Hoje fez 5 dias tomando e 1 klos já conseguir eliminar tô muito feliz obrigado Marcos 😍😍😍',
      time: commentTimes[7],
      likes: 27,
    },
    {
      id: '11',
      image: imagem9,
      name: 'Livia Santos',
      text: 'Marcos eu já estou tomando, já eliminei 7 kls, já fez muita diferença, minhas roupas estavam todas apertadas, agora já estão começando a ficar largas, estava sentindo muita dor no joelho e agora melhorou muito depois que emagreci 🙏🙏🙏',
      time: commentTimes[8],
      likes: 18,
    },
    {
      id: '12',
      image: imagem10,
      name: 'Andressa Ramira',
      text: 'Muito Obrigado Cientista Marcos. Já estou vendo resultado ..🌹🥰🙋',
      time: commentTimes[9],
      likes: 16,
    },
    {
      id: '13',
      image: imagem11,
      name: 'Diana Torres Romero',
      text: 'Em duas semanas comecei a ver resultados, muito boa essa fórmula caseira Marcos',
      time: commentTimes[10],
      likes: 15,
    },
    {
      id: '14',
      image: imagem12,
      name: 'Bianca Guimaci',
      text: 'Minha irmão perdeu 6 kl em 15 dias com a sua fórmula Marcos... vou começar hj 🤣🤣🤣',
      time: commentTimes[11],
      likes: 26,
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
            {comments.slice(0, numCommentsToShow).map((comment) => (
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
                        <div className='icon-like'>
                          <img
                            class='x16dsc37'
                            height='18'
                            role='presentation'
                            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e"
                            width='18'
                          />
                          <div className='qnt' style={{ float: 'right' }}>
                            {comment.likes}
                          </div>
                        </div>
                        <div className='icon-love'>
                          <img
                            class='x16dsc37'
                            height='18'
                            role='presentation'
                            src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e"
                            width='18'
                          />
                        </div>

                        <reply>Curtir</reply>
                        <reply>Comentar</reply>
                        <date>{comment.time}</date>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ))}
          </section>
          {numCommentsToShow < comments.length && (
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
