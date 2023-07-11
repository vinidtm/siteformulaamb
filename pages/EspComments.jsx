import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import imagem1 from './fotos/i1.jpg';
import imagem2 from './fotos/i2.webp';
import imagem4 from './fotos/i4.jpg';
import imagem5 from './fotos/i5.jpg';
import imagem6 from './fotos/i6.jpg';
import imagem7 from './fotos/i7.jpg';
import imagem8 from './fotos/i8.jpg';
import imagem9 from './fotos/i9.jpg';
import imagem10 from './fotos/i10.jpg';
import imagem11 from './fotos/i11.jpg';
import imagem12 from './fotos/i12.jpeg';
import imagem13 from './fotos/i13.jpg';
import imagem14 from './fotos/i14.jpg';
import imagem15 from './fotos/i15.jpg';
import imagem16 from './fotos/i16.jpg';

const EspComments = () => {
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

  const [replyTimes, setReplyTimes] = useState([]);

  useEffect(() => {
    const times = Array(12)
      .fill()
      .map(() => randomTime());
    setReplyTimes(times);
  }, []);

  const comments = [
    {
      id: '10',
      image: imagem1,
      name: 'María García',
      text: '- ¿Alguien aquí sabe si realmente se muestra en el video y si realmente funciona?',
      time: commentTimes[0],
      likes: 15,
      replies: [
        {
          id: '1',
          image: imagem13,
          name: 'Sofía Rodríguez',
          text: 'Si, al final del video lo explica bien. Lo hice y hasta ahora he perdido 4 kg 😍😍',
          time: replyTimes[2],
          likes: 5,
        },
        {
          id: '2',
          image: imagem15,
          name: 'Valentina González',
          text: 'Funciona mucho, esta fórmula de Marcos me ayuda a perder 9 kg!!!',
          time: replyTimes[3],
          likes: 2,
        },
      ],
    },
    {
      id: '3',
      image: imagem2,
      name: 'Carla López',
      text: 'Ademas me ayudo a bajar 22kg con esta formula casera, muy buena',
      time: replyTimes[1],
      likes: 22,
      replies: [
        {
          id: '2',
          image: imagem14,
          name: 'Ana Martínez',
          text: 'Nunca había visto algo así, ¡voy a probarlo! 😘😘😘',
          time: commentTimes[4],
          likes: 10,
        },
      ],
    },
    {
      id: '4',
      image: imagem16,
      name: 'Sofia Pietra',
      text: 'Científico Marcos, este video tuyo me cambió la vida, ya son 20 kilos menos en 4 meses, agradecido 🙏🙏',
      time: commentTimes[2],
      likes: 12,
      replies: [],
    },
    {
      id: '5',
      image: imagem4,
      name: 'Camila Hernández',
      text: 'Tomé esta fórmula casera durante 1 mes, acompañada de una mejor alimentación, bajé 10 kilos. ¡Gracias Marcos!🥰',
      time: commentTimes[3],
      likes: 35,
      replies: [],
    },
    {
      id: '6',
      image: imagem5,
      name: 'Andrea Pérez',
      text: 'Estoy MUY feliz Marcos, hace 5 meses pesaba 72 kg y hoy pesaba 58 kg, incluso publiqué una foto de antes y después en mi perfil aquí en Facebook. Gracias por compartir esta fórmula con nosotros 😘😘😘',
      time: commentTimes[4],
      likes: 16,
      replies: [],
    },
    {
      id: '7',
      image: imagem6,
      name: 'Daniela Fernández',
      text: 'Chicos, pensé que era mentira, pero hoy se cumple la primera semana de tomarlo y ya he perdido 2 kilos. 😱 Gracias por compartir este Marcos 🥰',
      time: commentTimes[5],
      likes: 11,
      replies: [],
    },
    {
      id: '9',
      image: imagem7,
      name: 'Isabella Silva',
      text: 'Chicos, qué fácil es de hacer, ¿verdad? Nunca imaginé que existiera algo así.',
      time: commentTimes[6],
      likes: 32,
      replies: [],
    },
    {
      id: '10',
      image: imagem8,
      name: 'Valéria Ramirez',
      text: 'Hoy llevo 5 dias tomando y 1 kilos podre eliminarte muy feliz gracias Marcos 😍😍😍',
      time: commentTimes[7],
      likes: 27,
      replies: [],
    },
    {
      id: '11',
      image: imagem9,
      name: 'Gabriela Torres',
      text: 'Marcos, ya lo estoy tomando, ya eliminé 7 kls, ya hizo mucha diferencia, mi ropa estaba toda apretada, ahora me empiezan a soltar, sentía mucho dolor en la rodilla y ahora ha mejorado mucho despues de bajar de peso 🙏🙏🙏',
      time: commentTimes[8],
      likes: 18,
      replies: [],
    },
    {
      id: '12',
      image: imagem10,
      name: 'Laura Morales',
      text: 'Muchas gracias Científico Marcos. Ya estoy viendo resultados..🌹🥰🙋',
      time: commentTimes[9],
      likes: 16,
      replies: [],
    },
    {
      id: '13',
      image: imagem11,
      name: 'Victoria Cruz',
      text: 'En dos semanas comencé a ver resultados, esta fórmula casera es muy buena Marcos',
      time: commentTimes[10],
      likes: 15,
      replies: [],
    },
    {
      id: '14',
      image: imagem12,
      name: 'Carolina Mendoza',
      text: 'Mi hermana perdió 6 kl en 15 días con tu fórmula de Marcos... voy a empezar hoy 🤣🤣🤣',
      time: commentTimes[11],
      likes: 26,
      replies: [],
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
              <div>
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
                  {comment.replies?.map((reply) => (
                    <div className='fb-comments-mini' key={reply.id}>
                      <div style={{ width: '50px' }}></div>
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                        }}
                      >
                        <div className='linha-vertical'></div>
                        <table
                          className='fb-comments-comment'
                          style={{ marginLeft: '20px' }}
                        >
                          <tbody>
                            <tr>
                              <td
                                rowspan='3'
                                className='fb-comments-comment-img'
                              >
                                <Image src={reply.image} width={48} />
                              </td>
                              <td>
                                <font className='fb-comments-comment-name'>
                                  <name>{reply.name}</name>
                                </font>
                              </td>
                            </tr>
                            <tr>
                              <td className='fb-comments-comment-text'>
                                {reply.text}
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
                                  <div
                                    className='qnt'
                                    style={{ float: 'right' }}
                                  >
                                    5
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
                    </div>
                  ))}
                </div>
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

export default EspComments;
