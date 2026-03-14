import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 3rem;
  min-height: 100vh;
  background: linear-gradient(180deg, #58585b 0%, #1c1c3c 100%);
  color: #fff;

  .details {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 3rem;
    margin-top: 3rem;
    flex-wrap: wrap;
  }

  img {
    width: 420px;
    border-radius: 14px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    max-width: 500px;
  }

  .info h1 {
    font-size: 2.2rem;
    font-weight: 700;
    margin: 0;
  }

  /* 🎞 GÊNEROS */
  .genres {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }

  .genre {
    background: rgba(255, 255, 255, 0.1);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #ffb3c1;
  }

  /* 📝 SINOPSE */
  .sinopse {
    font-size: 1rem;
    line-height: 1.6;
    color: #e0e0e0;
  }

  .sinopse strong {
    display: block;
    margin-bottom: 0.4rem;
    font-size: 0.85rem;
    color: #aaa;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .release,
  .rating {
    font-size: 0.95rem;
    color: #b3b3b3;
  }

  .rating span {
    color: #f5c518;
    font-weight: 600;
  }

  /* ❤️ FAVORITO */
  .favorite-btn {
    margin-top: 0.5rem;
    background: transparent;
    border: 2px solid #ff6b6b;
    color: #ff6b6b;
    border-radius: 30px;
    padding: 0.6rem 1.4rem;
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
  }

  .favorite-btn:hover {
    background: #ff6b6b;
    color: #fff;
  }

  .favorite-btn.active {
    background: #ff6b6b;
    color: #fff;
  }

  /* 🔘 BOTÃO VOLTAR */
  .botaoInfo {
    margin-top: 0.8rem;
    align-self: flex-start;
    background: linear-gradient(135deg, #e94560 0%, #ff6b6b 100%);
    color: #fff;
    border: none;
    border-radius: 30px;
    padding: 0.7rem 1.6rem;
    font-size: 0.9rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 6px 15px rgba(233, 69, 96, 0.35);
  }

  .botaoInfo:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(233, 69, 96, 0.5);
  }

  /* 🎬 TRAILER */
  .trailer {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .trailer iframe {
    width: 100%;
    max-width: 900px;
    height: 480px;
    border-radius: 16px;
    border: none;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.7);
  }

  /* 🎭 ELENCO */
  .cast {
    margin-top: 5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cast h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.8rem;
  }

  .cast-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
  }

  .actor {
    background: rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    padding: 1rem;
    text-align: center;
    width: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .actor:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }

  .actor img {
    width: 120px;
    height: 180px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 0.8rem;
  }

  .actor-name {
    font-weight: 600;
    font-size: 0.9rem;
    color: #fff;
    margin-bottom: 0.2rem;
  }

  .actor-character {
    font-size: 0.75rem;
    color: #ffb3c1;
  }

  /* 📱 MOBILE */
  @media (max-width: 768px) {
    padding: 1.5rem;

    .details {
      gap: 2rem;
      margin-top: 2rem;
    }

    img {
      width: 260px;
    }

    .info {
      max-width: 100%;
      text-align: center;
      align-items: center;
    }

    .botaoInfo {
      align-self: center;
    }

    .trailer iframe {
      height: 260px;
    }
  }
`