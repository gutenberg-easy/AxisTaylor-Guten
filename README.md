# AxisTaylor Guten Block Library
A library of Guten Blocks create or modified by me.

## Blocks
### Group Block
Creates block groups.
- Customizable ID attribute
- Customizable Background Color and Text Color
- Supports Full and Wide alignment

### Swiper Block
*forked from [strarsis/slider-block](https://github.com/strarsis/slider-block)*.

Creates Slideshow/Carousel Component. Its actually a light-weight wrapper for [nolimits4web](https://github.com/nolimits4web)'s [Swiper](https://github.com/nolimits4web/swiper). It uses [kidjp85](https://github.com/kidjp85)'s [react-id-swiper](https://github.com/kidjp85/react-id-swiper) component in the editor. Note: *Although fully-functioning this still very much a WIP. Due to issues with `InnerBlocks` edit markup, in the editor the individual slides in gray blocks are displayed below the example Swiper Component. Some swiper configurations aren't displayed or don't work at all in the editor, but work on the front-end.*
- Customizable ID attribute
- Customizable Background Color and Text Color
- Supports Full and Wide alignment

## Features Coming Soon
- Parallax background feature for Swiper-Slide block and Group block
- Tests - (As soon as I figure out the standard that the Gutenberg team uses for the core blocks library)

## Using Docker for development
*Docker-Compose needed*

I'm not the greatest with Docker so you'll have to get run `git clone https://github.com/WordPress/gutenberg-starter-theme.git starter-theme` in the project directory and clone the [gutenberg-starter-theme](https://github.com/WordPress/gutenberg-starter-theme)
This theme has support for `wide` and `full` content alignment. Next run `docker-compose up -d && npm start` from the project directory and wait 30 seconds. The development Wordpress installation is served at `http://localhost:8000`; Run through the setup activate the `Gutenberg` theme and the `AxisTaylor-Guten` plugin and begin development. Note - I don't see it mentioned to often so I mention it here. `Create-Guten-Block` doesn't always recompile after file changes especially pertaining to scss files. If you run in this issue simply restart the `dev-server` and refresh the page and clear the cache. 

This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

>You can find the most recent version of this guide [here](https://github.com/ahmadawais/create-guten-block).

### 👉  `npm start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

### 👉  `npm run build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

### 👉  `npm run eject`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

---