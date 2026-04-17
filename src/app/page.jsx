import Link from 'next/link';

import styles from "./page.module.css"; 

function Home() {
  return (
    <div className={styles.containerHome} > 
      <div className={styles.containerListas}>
        <h1>Exemplos</h1>
        <Link href="/exemplos/ex-01">Exemplo01</Link>
        <Link href="/exemplos/ex-02">Exemplo02</Link>
        <Link href="/exemplos/ex-03">Exemplo03</Link>
        <Link href="/exemplos/ex-04">Exemplo04</Link>
        <Link href="/exemplos/ex-05">Exemplo05</Link>  
      </div>
      <div className={styles.containerListas}>
        <h1>Atividades</h1>
        <Link href="/atividades/atv-01">Atividade 1</Link>
        <Link href="/atividades/atv-02">Atividade 2</Link>
        <Link href="/atividades/atv-03">Atividade 3</Link>
        <Link href="/atividades/atv-04">Atividade 4</Link>
        <Link href="/atividades/atv-05">Atividade 5</Link>
        <Link href="/atividades/atv-06">Atividade 6</Link>
      </div>
    </div>
  );
}

export default Home;
