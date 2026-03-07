// src/style.js
import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem 3rem;
  min-height: 100vh;
  background: linear-gradient(180deg, #575563ff 0%, #ababb1ff 100%);
  color: #ffffff;

  h2 {
    text-align: center;
    margin: 2rem 0 3rem;
    font-size: 2.5rem;
    font-weight: 700;
    color: #ffffff;
  }

  .favorite-btn {
    background: transparent;
    border: 1px solid #ffffff;
    color: #ffffff;
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1rem;
    display: inline-block;
    text-align: center;

    &.active {
      border-color: #e50914;
      color: #e50914;
    }

    &:hover {
      background: #ffffff;
      color: #000000;
      transform: scale(1.05);
    }

    &.active:hover {
      background: #e50914;
      color: #ffffff;
      border-color: #e50914;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .botaoInfo {
      background: #e50914;
      border: none;
      color: white;
      padding: 0.8rem 2rem;
      border-radius: 50px;
      font-weight: 600;
      transition: 0.3s;
      margin-top: 1rem;
      
      &:hover {
        background: #b20710;
        transform: scale(1.05);
      }
    }
  }
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding: 2.5rem 1rem;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  margin: 0 auto 3rem auto;
  max-width: 1000px;
  flex-wrap: wrap;

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    
    label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      color: #e50914;
      font-weight: 700;
    }
  }

  input, select {
    background: #1e1e26;
    border: 1px solid #444;
    color: #fff;
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    font-size: 1rem;
    width: 280px;

    &:focus {
      border-color: #e50914;
      outline: none;
    }
  }

  .btn-limpar {
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
    padding: 0.8rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    margin-top: 1.4rem;
    transition: all 0.3s;

    &:hover {
      background: #fff;
      color: #000;
    }
  }
`

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2.5rem;
  padding: 0;
  margin: 0;
`

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease;
  padding: 1rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.04);

  &:hover { 
    transform: translateY(-8px) scale(1.03); 
    background: rgba(255, 255, 255, 0.08);
  }

  img { 
    width: 180px; 
    height: 260px; 
    object-fit: cover; 
    border-radius: 12px; 
    margin-bottom: 1rem;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  }

  span { 
    font-size: 1rem; 
    font-weight: 600; 
    color: #f1f1f1;
    min-height: 3rem;
  }

  a { 
    text-decoration: none; 
    color: inherit; 
  }
`