import styled from "styled-components";
import mdiTwitter from "./assets/img/mdi_twitter.svg"
import mdiYoutube from "./assets/img/mdi_youtube.svg"
import ri_instagram from "./assets/img/ri_instagram-fill.svg"

export const FooterContainer = styled.footer`
background-color: #171515;
color: #fff;
padding: 40px 20px;
text-align:center;
border-top:1px solid #333;


p{
margin-bottom: 20px;
font-size: 1rem;
color: #ffff;
}

.social-icons{
display: flex;
justify-content: center;
gap: 20px;

}
.social-icons img{
    width: 30px;
height: 30px;
filter: brightness(0) invert(1);
cursor: pointer;
transition: transform 0.3s;

}

.social-icons img:hover{
    transform: scale(1.2);
}
`



function Footer() {
    return (
        <FooterContainer>
            <p>Nos sigam nas redes sociais</p>
            <div className="social-icons"></div>
            <img src={mdiTwitter} alt="Twitter" />
            <img src={mdiYoutube} alt="Youtube" />
            <img src={ri_instagram} alt="Instagram" />

            <p style={{ marginTop: '20px', fontSize: '0.8rem' }}>2026 SENAIFLIX - Todos direitos reservados</p>

        </FooterContainer>

    )
}



export default Footer