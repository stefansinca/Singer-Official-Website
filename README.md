# :microphone: Singer Artist Website

### Description

< To be updated ...

### :nut_and_bolt: Components

### The Login Form

* It uses local static credentials (the time invested in the project did not allowed to build a server with dynamic credentials stored on a server).
* Have validation functionality.
* Based on validation the form thrown an error if the credentials are not correct.

### Header

* Designed to be fully responsive on all screens, the header is created once and reused on other pages of the app (e.g. BIO page, BLOG page etc.).
* Based on the screen resolution, buttons from header are displayed or not (e.g. for Mobile, some buttons are not displayed for the pourpouse of the UX).
* The Header is split into two components: **<BarsOpen /> (for mobile)** and **< BarsClosed />** (for desktop).

### Mobile Bars

* Build as a single component, the Mobile Bars hold the buttons displayed on the header in desktop mode.
* Based on **eventHandler**, the user trigger the Bars by pressing on the upper right corner button from the header. The function reverse the value of the **eventHandler** when user trigger again in order to hide the Bars.
* The Social Icons are moved into the Bars as well. 
* The Mobile Bars is animated with **react-transition-group.** More specific, the in order to display the the Mobile Bars, the project uses **react-transition-group** library.

< .... Video Here

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




