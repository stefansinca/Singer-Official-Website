import React from "react";
import { NavLink } from "react-router-dom";

import HeaderComponent from ".//../HeaderComponent/HeaderComponent";
import YoutubeEmbed from "../YoutubeComponent/YoutubeEmbed";
import CarouselComponent from "../CarouselComponent/CarouselComponent";
import { slides, containerStyles } from "../CarouselComponent/slides";

import "./HomePageComponent.css";

const HomePageComponent = () => {
  return (
    <div className="parent-div-home">
      <HeaderComponent />

      <header className="header">
        <img
          src={require("..//..//media/first-bio-img.jpg")}
          alt="artist-photo"
          className="header-img"
        />
        <div className="second-header">
          <img
            src={require("../../media/text-1659340383981.png")}
            alt=""
            className="album-name-img"
          />
          <h2 className="h2-header">NOW AVAILABLE EVERYWHERE</h2>
          <p className="header-p">
            "This is a story. Your story. A story of perseverance. A journey
            that brings us <br /> from the darkness to the light."
          </p>
          <a
            href="https://open.spotify.com/album/1ua8rwCe6RdDiFoyROmnIc?si=tFhSLfJmSJiZgaVaHF4uPw"
            className="header-nav-button"
          >
            <button className="header-btn">LISTEN NOW</button>
          </a>
        </div>
      </header>

      <section className="video-section">
        <YoutubeEmbed embedId="4XyZC3RGb3M" />
      </section>

      <main className="container-styles">
        <CarouselComponent slides={slides} />
      </main>

      <section className="album-section">
        <img
          className="home-album-img"
          src={require("..//..//media/album-photo.png")}
          alt="bio-img"
        />
        <h2 className="home-album-h2">A MILLION COLORS</h2>
        <p className="album-paragraph">
          Yvonne's new album "A Million Colors" is available now everywhere.
          This beautiful record was released in December 13, 2021 and is the
          first EP released saying the story of authentic feelings and desire of
          finding true love.
        </p>
        <a
          href="https://open.spotify.com/album/1ua8rwCe6RdDiFoyROmnIc?si=tFhSLfJmSJiZgaVaHF4uPw"
          className="contact-btn-bio-nav album-btn"
        >
          <button className="home-album-button">Listen Now</button>
        </a>
      </section>

      <section className="playlist-section">
        <div className="playlist-img-div"></div>
        <div className="playlist-content-div">
          <h1 className="playlist-h1">LISTEN APIs</h1>
          <p className="playlist-paragraph">
            A Million Colors is now available anywhere.
          </p>
          <button className="playlist-button">DOWNLOAD ALBUM</button>
        </div>
      </section>

      <section className="main-bio story-section">
        <img
          className="main-contact-img story-img"
          src={require("..//..//media/album-story.jpg")}
          alt="story-img"
        />
        <h2 className="contact-h2 story-h2">A MILLION COLORS IS A STORY</h2>
        <p className="contact-paragraph story-paragraph">
          "A million colors" was and is a first possibility to express emotion,
          sensitivity, knowledge and achievement. 
          <br />
          <br />
          What we feel, even if it is
          hate or happiness, sadness or disappointment, helps us find and know
          ourselves better. The road is long and unpredictable, we can lose
          loved ones, we can lose everything and then rediscover what we were
          never really looking for. 
          <br />
          <br />
          Patience is the key, patience towards the
          unknown, which is often scary but worth waiting for.
          <br />
          <br />
          I broke a part of
          myself to turn it into art and present it as it is, as I am and so how
          will I remain divided into millions of colors known to you all now.
        </p>
        <a className="story-btn-homepage-nav" href="https://open.spotify.com/album/1ua8rwCe6RdDiFoyROmnIc?si=tFhSLfJmSJiZgaVaHF4uPw">
        <button className="story-btn">LISTEN NOW</button>
        </a>
      </section>
    </div>
  );
};

export default HomePageComponent;
