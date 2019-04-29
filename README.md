<p align="center">
<a href="http://papertrain.io"><img alt="Papertrain" src="_papertrain/papertrain-logo.png"/></a><br/>
<img style="display:inline-block;" src="https://img.shields.io/badge/CMS-Craft%203.1-ff69b4.svg?style=flat-square"/>
<img style="display:inline-block;" src="https://img.shields.io/badge/templating%20engine-Twig-orange.svg?style=flat-square"/>
<img style="display:inline-block;" src="https://img.shields.io/badge/style-SASS-blue.svg?style=flat-square"/>
<img style="display:inline-block;" src="https://img.shields.io/badge/typescript-3.4-yellow.svg?style=flat-square"/>
<img style="display:inline-block;" src="https://img.shields.io/badge/bundler-webpack-5299c8.svg?style=flat-square"/>
<a style="display:inline-block;" href="https://github.com/AndrewK9/papertrain/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-lightgray.svg?style=flat-square"/></a>
</p>

# Papertrain
Papertrain is a framework designed to bring custom utilities and features to the Craft CMS platform. Papertrain is built upon the [Modular Design Pattern](https://github.com/Pageworks/modular-design-pattern), you can see an example of how modules work together by [clicking here](https://github.com/codewithkyle/modular-design-pattern-javascript-example).

# Getting Started

Start by downloading the [latest release](https://github.com/Pageworks/papertrain/releases) of Papertrain and extracting the project into your new projects root directory.

Install the NPM dependencies (requires [Node.js](https://nodejs.org/en/)) by running the following command in your terminal:

```
npm install
```

Install Craft CMS along with the initial plugins (requires [composer](https://getcomposer.org/download/)) by running the following command in your terminal:

```
composer install
```

Setup your Apache server to point to the projects `/public` directory.

Create a new empty database for the project.

Run the Papertrain setup script by running the following command in your terminal:

```
npm run setup
```

To finish the getting started process follow the Craft CMS installation guide in the browser that opens after the Papertrain setup is complete.

# Creating Elements

Elements can be created using a CLI based generator, you can run the generation tool using:

```
npm run create
```

## Globals

A Global is a unique style for a [Basic HTML Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element). Globals will **NEVER** apply the style to the raw HTML element and they **DO NOT** inherently have any functionality but can be assigned functionality by a Component.

Globals are defined as a single Style file.

File: `Button.scss`

**Correct Usage**

```scss
.g-button{
    border: 2px solid aqua;
    border-radius: 2px;
    padding: 0 16px;
    height: 36px;
    line-height: 36px;

    &.-solid{
        background-color: aqua;
    }
}
```

**Incorrect Usage**

```scss
button{
    border: 2px solid aqua;
    border-radius: 2px;
    padding: 0 16px;
    height: 36px;
    line-height: 36px;
}
```

## Objects

Objects can exists anywhere within the page as visual elements. Objects **DO NOT** inherently have any functionality but can be assigned functionality by a Component.

Objects can be composed of Globals and other Objects.

Objects are defined as a combination of the following files:

- HTML
- Style

## Components

A Component is similar to an Object except that is has a uniquely defined piece of functionality.

Components can be composed of Objects and Globals.

Components are defined as a combination of following files:

- HTML
- Style
- Script

# CSS Namespaces

Papertrain follows a simplified version of the [BEM](https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) naming methodology.

## Namespace Format

The CSS namespace format will be as follows:

```
.p-primary-class-name_secondary_class_name -modifier -secondary-modifier
```

Classes always begin with a prefix followed by a hyphen.

The primary class name will always be written in [kebab-case](http://wiki.c2.com/?KebabCase).

The secondary class name will begin with an underscore and will always be written in [snake case](https://en.wikipedia.org/wiki/Snake_case).

Modifiers will always be seperate additional/optional classes that begin with a hyphen and are written in kebab-case.

## Prefixes

Classes will use a prefix to declare what type of element is being used.

- `g-` will be used for globals
- `o-` will be used for objects
- `c-` will be used for components
- `u-` will be used for utility classes
- `js-` will be used as a selector hook for JavaScript query selectors
- `is-` when something is in a specific state such as `is-open`
- `has-` when something has something such as `has-focus`


## Example

Some elements may contain other elements, in the example below the card will contain a heading, image, and link.

```html
<div class="o-card">
    <img src="img.jpg" alt="Lorem ipsum">
    <h3>Lorem Ipsum Dolor</h3>
    <a href="#" class="o-card_button">Button 1</a>
    <a href="#" class="o-card_button -alt">Button 2</a>
</div>
```

```scss
.o-card{
    width: 256px;
    height: 512px;
    border-radius: 8px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px rgba(41,41,41,0.1);
    padding: 16px;

    img{
        object-fit: cover;
        width: 100%;
        height: 158px;
    }

    h3{
        font-size: 24px;
        color: cyan;
    }

    .o-card_button{
        height: 36px;
        line-height: 36px;
        font-size: 18px;
        text-transform: uppercase;
        padding: 0 16px;
        border-radius: 2px;
        background-color: cyan;
        color: #ffffff;

        &.-alt{
            color: rgb(41,41,41);
            background-color: transparent;
            border: 2px solid cyan;
        }
    }
}
```

# Feedback
Feel free to [open an issue](https://github.com/Pageworks/papertrain/issues) to report bugs or request additional features.

# License
Papertrain is licensed under the [MIT](https://github.com/Pageworks/papertrain/blob/master/LICENSE) license.
