# singer Artist Website

The main focus of the singer Artist Website is to serve as a tool for building a marketing/PR strategy of an artist. This is a presentational website for an artist who are at the beginning of the road and not only.

## Structure:

### HomePage

< to be updated....

### BIO
Being a story-telling page, BIO is build as a single static page with the following functionalities:
- [x] The header is updated for both desktop version and mobile version.
- [x] BIO page is fully responsive design.
- [x] The **Contact** button is wraped into a ```</NavLink>``` tag in order to redirect to a new page with ***React Routing***
- [x] The footer section of the page hold a social media icon-links for a smooth redirect to the artist social media pages. 

### BLOG

< to be updated....

### CONTACT
Based on a similar structure as the BIO Page, the CONTACT Page is made of the ```<BioPageComponent />```. Having a common structre, I was able to use a component as a reusable one.

<img src='https://user-images.githubusercontent.com/66974377/181879527-7934746e-f514-42bc-b672-51a688192640.png' width='50%' /> <img src='https://user-images.githubusercontent.com/66974377/181879841-d5e42a2c-0505-47dc-b949-42cfa8032f11.png' width='49%' />





- [x] Responsive Design is fully operable.
- [x] The structure of the Header, Main and Footer are the same as the BIO Page.



-----------------------------------------------------------------------------------------------------------------------------------------------------
## :nut_and_bolt: Functionality

### The Login Form

* It uses local static credentials (the time invested in the project did not allowed to build a server with dynamic credentials stored on a server).
* Have validation functionality.
* Based on validation the form thrown an error if the credentials are not correct.

### Header

* Designed to be fully responsive on all screens, the header is created once and reused on other pages of the app (e.g. BIO page, BLOG page etc.).
* Based on the screen resolution, buttons from header are displayed or not (e.g. for Mobile, some buttons are not displayed for the pourpouse of the UX).
* The Header is split into two components: ```<BarsOpen />``` **(for mobile) and ```< BarsClosed />``` (for desktop).**

### Mobile Bars

* Build as a single component, the Mobile Bars hold the buttons displayed on the header in desktop mode.
* Based on **eventHandler**, the user trigger the Bars by pressing on the upper right corner button from the header. The function reverse the value of the **eventHandler** when user trigger again in order to hide the Bars.
* The Social Icons are moved into the Bars as well. 
* The Mobile Bars is animated with **react-transition-group.** More specific, the in order to display the the Mobile Bars, the project uses **react-transition-group** library.

https://user-images.githubusercontent.com/66974377/181595189-ceafa4bd-a42d-40ff-b9a4-d60ee21966b5.mp4

```
<CSS Transition > 
{isOpen ? <BarsOpen /> ? <BarsClosed />} 
</CSS Transition>
```

You wrap the component where you want to apply the css transition in a ```<CSS Transition >``` container and apply the styles you want to be applied.
The second line of the code says that, if user has clicked on the button, then display the Bars for Mobile, otherwise display something else which is the actually default page for desktop. **Important:** the button will be displayed only bellow 768px viewport width.

< To be updated ...

## Skills

<p align="left">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="36" height="36" alt="Javascript" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="36" height="36" alt="HTML5" /></a>
<a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="36" height="36" alt="CSS3" /></a>
<a href='' target='_blank' rel='noreferrer'><img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' width='36' height='36' alt='ReactJS'/></a>
</p>

< To be updated ...




