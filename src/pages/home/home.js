import React from "react";

import './home.css';
import Hero from '../../components/hero/hero';
import Features from '../../components/features/features';
import Content from '../../components/content/content';
import Images from '../../components/images/images'

function Home() {
    return (
        <div>
            <p>Hello</p>
            <Hero />
            <Features id="features" />
            <Content title="Pagar com MB Way" image="https://placeimg.com/600/400/arch" />
            <Content variant="image-first" title="Enviar dinheiro" description="Transfira dinheiro através da opção “Enviar Dinheiro”. Selecione o contacto a quem vai enviar dinheiro, indique o valor a transferir e valide a operação de forma segura. Por fim, receberá uma confirmação da operação." image="https://placeimg.com/600/400/tech" />
            <Content theme="dark" title="Pagar com MB Way" description="It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production." image="https://placeimg.com/600/400/arch" />
            <Content variant="image-first" title="Enviar dinheiro" description="Transfira dinheiro através da opção “Enviar Dinheiro”. Selecione o contacto a quem vai enviar dinheiro, indique o valor a transferir e valide a operação de forma segura. Por fim, receberá uma confirmação da operação." />
            <Images />
        </div>
    );
}

export default Home;