# singer Artist Website

The main focus of the singer Artist Website is to serve as a tool for building a marketing/PR strategy of an artist. This is a presentational website for an artist who are at the beginning of the road and not only.

## Contents
* [Live](#live)
* [Run build](#run-build)
* [Structure](#structure)
* [Functionality](#carousel)
* [Skills](#skills)
* [Time Invested](#time-invested)

## Live
The app is deployed on Netlify for a better understanding of how this will serve as a product and for testing pourpouses as well.   
**LIVE:** https://yvonnemusic.netlify.app/ 

## Run build
Download the repository.   

:computer: Open the terminal and navigate to the react app directory.   
:keyboard: Run: ```npm install react-scripts --save``` (if error add ```--force``` at the end of the line)   
:rocket: Type: ```npm start```

<h3>Enjoy! :slightly_smiling_face:	</h3>

## Structure:

### HomePage
The 'HEAD' of the website, HomePage represent the concept of the project with focus on functionality and effieciency for the user.

- [x] The header is reused by importing ```<HeaderComponent />```.
- [x] Using ReactJS, a **react component** is created outside the ```<HomePageComponent />``` and imported as ```<YouTubeEmbed />```.
- [x] For the pourpose of adding more functionality to the project, after the video section, a **carousel-component** is defined. Using **useState Hook** we change the image from the carousel based on **index from the array.** 
- [x] **The Carousel Component** is followed by a section with some informations about the most recent product of the artist (album), a picture next to the paragraph and a button that redirect the user to the album of the artist from Spotify.
- [x] **Album Player Section** is build with ```<iframe>``` tag element generated from Spotify Premium app. No further implementation was necessary.
- [x] **Story Section** is a place where the artist tell the story of the album, what meens for the him/her, what's about and so on. Hold a button for redirecting to the album on Spotify as well. 
- [x] **Email Subscriber Section**, right under the Story Section collects subscribers email and storing in a data base from where the admin of the app will send emails with new releases/infos about future events etc. The functionality of this component will be detailed in the #Functionality section.

### BIO
Being a story-telling page, BIO is build as a single static page with the following functionalities:
- [x] The header is updated for both desktop version and mobile version.
- [x] BIO page is fully responsive design.
- [x] The **Contact** button is wraped into a ```</NavLink>``` tag in order to redirect to a new page with ***React Routing***
- [x] The footer section of the page hold a social media icon-links for a smooth redirect to the artist social media pages. 

### EVENTS

< under development....

### CONTACT
Based on a similar structure as the BIO Page, the CONTACT Page is made of the ```<BioPageComponent />```. Having a common structre, I was able to use a component as a reusable one.

<img src='https://user-images.githubusercontent.com/66974377/181879527-7934746e-f514-42bc-b672-51a688192640.png' width='50%' /> <img src='https://user-images.githubusercontent.com/66974377/181879841-d5e42a2c-0505-47dc-b949-42cfa8032f11.png' width='49%' />

- [x] Responsive Design is fully operable.
- [x] The structure of the Header, Main and Footer are the same as the BIO Page.

-----------------------------------------------------------------------------------------------------------------------------------------------------
## :nut_and_bolt: Functionality

### Carousel
```<CarouselComponent />``` is defined to display images on the **HomePage.** It is build as a **reusable component** by having a data-base object with images as a value for an attribute ```<CarouselComponent database={database}```.

1. Using **useState Hook** for changing the the images from the carousel:
```const [currentSlide, setCurrentSlide] = useState(0);```

2. Defining a function that will change the image:
```
const nextSlide = () => {
setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1); }
```

3. Using **useEffect Hook** for building a loop based on **currentSlide state:**
```
useEffect(() => {
  if(autoScroll) {
     autoSlider();
  }

  //Cleanup function 
    return () => clearInterval(slideInterval)
}, [currentSlide])
```

https://user-images.githubusercontent.com/66974377/182334911-a8cf96c3-71d0-4cd7-975e-e9c3b7726553.mp4

--------------------------------------------------------------------------------------------------------------------------------------------------------

### Login Form

* It uses local static credentials (the time invested in the project did not allowed to build a server with dynamic credentials stored on a server).
* Have validation functionality.
* Based on validation the form thrown an error if the credentials are not correct.

### Header

* Designed to be fully responsive on all screens, the header **is created once and reused on other pages** of the app as a component imported.
* Based on the screen resolution, buttons from header are displayed or not (e.g. for Mobile, some buttons are not displayed for the pourpouse of the UX).
* The Header is split into two coceptual components: **for devices above 768px** and **for devices bellow 768px.**

#### Desktop Header

- [x] Fully resposive design
- [x] Reusable Component (used on other parts of the website as an imported component)
- [x] Buttons are deplayed **inline-flex.**

<img src='https://user-images.githubusercontent.com/66974377/182081197-1722765e-3ba1-4877-b461-d17f1072331a.png' width='100%' />

#### Mobile Header

- [x] Build as a singer component, the Header Component are changing when **bellow 768px.**
- [x] Mobile Header reuses exactly the same elements from the Desktop Header by changing classes with ```useState``` Hook.

1. Using ```useState``` Hook for changing classes of the element:
```const [paragraph, setParagraph] = useState("paragraph-div");```

2. Declaring a ```function``` that handle the functionality to change classes based on a ```conditional statement```:
```
const navToggle = () => { 
if (paragraph === "paragraph-div") { 
setParagraph("paragraph-div paragraph-div-toggle"); 
} 
else { 
setParagraph("paragraph-div"); 
}}
```

3. Passing the default state of the Hook as a value of the ```className``` element:
```<div className={paragraph}> © 2022 Yvonne Music. All Rights Reserved. </div>```

https://user-images.githubusercontent.com/66974377/182084122-0bbf9bb9-b579-4567-8d49-87e26899aa24.mp4

### Album Playlist
Wraped inside ```<iframe>``` tag element generated from Spotify Premium app. Works as a APIs, but the songs are cut to 30s.
**Important:** was not tested with Spotify free app.

**Implementation:**

1. Embed the playlist from Spotify App:

 
<img src='https://user-images.githubusercontent.com/66974377/184853325-17e5913f-0062-4753-a33e-6caa92e1bb85.png' width='50%' />

2. Copy the code and paste into your app. Use CSS if you want to add additional styles and run the app:


<img src='https://user-images.githubusercontent.com/66974377/184854018-515e079f-7f55-45f7-96ce-031809855e7c.png' width='50%' />

<img src='https://user-images.githubusercontent.com/66974377/184854097-bca491f1-f79d-48c8-b540-e77a6a005259.png' width='50%' />


### Email Subscription
Created with EmailJS library for providing functionality without a server-side, from the front-end only.

- [x] Have a regex email validation
- [x] Take the input from the user with a callback function ```(e) => e.target.value``` and store the information in as a value of the ```email``` key from the ```useState hook```: ```onChange={(e) => setDetails({email: e.target.value})}```
- [x] Uses a promise function to display an alert message if the form works as intended/or an error one.
- [x] Call the function that hold the functionality on the ```form``` tag as: ```<form onSubmit={submitHandler}></form>```

## Skills

<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="Javascript" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
<a href='' target='_blank' rel='noreferrer'><img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' width='36' height='36' alt='ReactJS'/></a>
</p>

## Time Invested

:hourglass: **95 hours** until now

< To be updated ...




