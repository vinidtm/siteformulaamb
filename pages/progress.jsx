import React from 'react';

export default function Progress() {
  return (
    <div className='progress-bar'>
      <div className={`step completed`}>Passo 1
      <div>concluido</div></div>
      <div className={`step`}>Passo 2</div>
      <div className={`step`}>Passo 3</div>
    </div>
  );
}
