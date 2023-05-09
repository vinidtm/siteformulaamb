import React, { useState } from 'react'
import Image from 'next/image';
import imagem1 from "./fotos/i1.webp";
import imagem2 from "./fotos/i2.webp";
import imagem3 from "./fotos/i3.webp";
import imagem4 from "./fotos/i4.webp";
import imagem5 from "./fotos/i5.webp";
import imagem6 from "./fotos/i6.webp";
import imagem7 from "./fotos/i7.webp";
import imagem8 from "./fotos/i8.webp";
import imagem9 from "./fotos/i9.webp";
import imagem10 from "./fotos/i10.webp";
import imagem11 from "./fotos/i11.webp";
import imagem12 from "./fotos/i12.webp";

const Comment = () => {
const [showMore, setShowMore] = useState(false);

    const loadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="comments py-4">
    <div className='container'>
    <div className="fb-comments" >
    <div className="fb-comments-header">
    <span>12 comentários</span>
    </div>
    <section className="fb-comments" id="2">
              <div>
  <table className="fb-comments-comment">
    <tbody>
      <tr>
        <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem1} width={48}/>
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Joana Maria Oliveira</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Marcos muito obrigada! A sua fórmula caseira me fez emagrecer 10kg em poucas semanas.😍😍
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>
          ·
          <reply>Comentar</reply>
          <date>4 min</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="fb-comments-wrapper" id="3">
  <table className="fb-comments-comment">
    <tbody>
      <tr>
        <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem2} width={48} />
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Cristina Santos</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Ele também me ajudou a perder 22kg com essa fórmula caseira, muito boa
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>
          ·
          <reply>Comentar</reply>
          <date>5 min</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="fb-comments-wrapper" id="4">
  <table className="fb-comments-comment">
    <tbody>
      <tr>
        <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem3} width={48}/>
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Sofia Pietra</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Cientista Marcos, esse vídeo seu mudou a minha vida, já são 20 quilos a menos em 4 meses, agradecida 🙏🙏
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>
          ·
          <reply>Comentar</reply>
          <date>12 min</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="fb-comments-wrapper" id="5">
  <table className="fb-comments-comment">
    <tbody>
      <tr>
        <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem4} width={48}/>
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Juliana Castro</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Tomei essa fórmula caseira durante 1 mês, acompanhada com uma alimentação melhor, perdi 10 quilos. Obrigada Marcos!🥰
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>
          ·
          <reply>Comentar</reply>
          <date>19 min</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="fb-comments-wrapper" id="6">
  <table className="fb-comments-comment">
    <tbody>
      <tr>
        <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem5} width={48}/>
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Nilva Lopes</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Estou MUITO feliz Marcos, há 5 meses atrás eu estava com 72kg e hoje estou com 58kg, até postei uma foto no meu perfil aqui no Facebook do antes e depois. Obrigada por compartilhar essa fórmula conosco 😘😘😘
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>
          ·
          <reply>Comentar</reply>
          <date>24 min</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="fb-comments-wrapper" id="7">
  <table className="fb-comments-comment">
    <tbody>
      <tr>
        <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem6} width={48}/>
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Isabela Vargas</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Pessoal, eu achava que era mentira, mas hoje completa a primeira semana tomando e eu já perdi 2 quilos. 😱 Obrigada por compartilhar isso, Marcos 🥰
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>
          ·
          <reply>Comentar</reply>
          <date>26 min</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="fb-comments-wrapper" id="9">
  <table className="fb-comments-comment">
    <tbody>
      <tr>
        <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem7} width={48}/>
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Camila Sutra</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Gente, como é fácil fazer, né? Eu nunca imaginei que tinha algo assim.
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>·
          <reply>Comentar</reply>
          <date>39 min</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
      {!showMore && (
        <div className="button-container">
        <button className="fb-comments-loadmore" onClick={loadMore}>
          Carregar mais 5 comentários...
        </button>
        </div>
      )}
      {showMore && (
        <div style={{ display: showMore ?'block' : 'none' }} id="more">
           <div className="fb-comments-wrapper" id="10">
  <table className="fb-comments-comment">
    <tbody>
      <tr>
        <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem8} width={48}/>
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Mario Roberto Gomes</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Hoje fez 5 dias tomando e 1 klos já conseguir eliminar tô muito feliz obrigado Marcos 😍😍😍
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>
          ·
          <reply>Comentar</reply>
          <date>1 h</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="fb-comments-wrapper" id="11">
  <table className="fb-comments-comment">
    <tbody>
      <tr>
        <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem9} width={48}/>
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Livia Santos</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Marcos eu já estou tomando, já eliminei 7 kls, já fez muita diferença, minhas roupas estavam todas apertadas, agora já estão começando a ficar largas, estava sentindo muita dor no joelho e agora melhorou muito depois que emagreci 🙏🙏🙏
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>
          ·
          <reply>Comentar</reply>
          <date>1 h</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="fb-comments-wrapper" id="12">
  <table className="fb-comments-comment">
    <tbody>
      <tr>
        <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem10} width={48}/>
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Andressa Ramira</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Muito Obrigado Cientista Marcos. Já estou vendo resultado ..🌹🥰🙋
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>
          ·
          <reply>Comentar</reply>
          <date>1 h</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="fb-comments-wrapper" id="13">
  <table className="fb-comments-comment">
    <tbody>
      <tr>
      <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem11} width={48}/>
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Diana Torres Romero</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Em duas semanas comecei a ver resultados, muito boa essa fórmula caseira Marcos
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>
          ·
          <reply>Comentar</reply>
          <date>1 h</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div className="fb-comments-wrapper">
  <table className="fb-comments-comment" id="14">
    <tbody>
      <tr>
        <td rowspan="3" className="fb-comments-comment-img">
          <Image src={imagem12} width={48}/>
        </td>
        <td>
          <font className="fb-comments-comment-name">
            <name>Bianca Guimaci</name>
          </font>
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-text">
          Minha irmão perdeu 6 kl em 15 dias com a sua fórmula Marcos... vou começar hj 🤣🤣🤣
        </td>
      </tr>
      <tr>
        <td className="fb-comments-comment-actions">
          <like>Curtir</like>
          ·
          <reply>Comentar</reply>
          <date>1 h</date>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</div>

      )}
    </section>
    </div>
    </div>
    </div>
  );
};

export default Comment;
