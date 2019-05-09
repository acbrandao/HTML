# Starter Templates

<img align="right" width="250" src="https://github.com/acbrandao/templates/blob/master/img/html5.PNG">
This folder has an assorted collection of starter HTML/JS and other pages (mostly web pages or node javascript pages). 
This is my go to place when I'm starting a new project or new application from scratch, there's
plenty of these located on the web, but this is just my nice little location for all the web pages
that I'm interested in.

## Installation

Simlply clone this folder, or click on the file you're interested in and just copy it to your working direcotry.

```bash
git clone git@github.com:acbrandao/templates.git
```

## Usage

As described above clone the **this** repositry first into the folder you are working in.

This create a _templates_ folder in the same directory where you issues the git clone.
Next just copy the **individual** template(s) you need to from the /templates folder into the folder you want to use like:

```bash
cp templates/index.html .
```

or maybe you want to start a basic a VUE page named vue.php

```bash
cp templates/vuejs.html vue.php
```

or a reload script as idnex.html

```bash
cp templates/vuereload.html index.html
```

## Using hotreload.js and hotreload.php

This scripts are useful as development aids. be sure to copy them both from the templates folder
into the folder where you want them to be used. This is required as the hotreload.php works in
the current folder.

```bash
cp templates/hotreload.* .
```

Then just include the hotreload js in the <head> </head> section of your web paage like

```hmtl
<head>
<script src="hotreload.js"></script>
</head>
```

Now you have the index.html ready to go , repeat as needed for each template.
Using this technique keeps the original templates unchanged and allows you to re-use them as often as needed.

## Description of each

| Directroy    | Description                                                             |                 Dependencies |
| :----------- | :---------------------------------------------------------------------- | ---------------------------: |
| index.html   | A plain HTML5 document                                                  |                         HTML |
| vuejs        | A plain VUE JS startign page document                                   |       HTML5, VUeJS (via CDN) |
| bootstrap    | A plain Bootstrap 4 starter page document                               | HTML5, Bootstrap 4 (via CDN) |
| jquery       | A plain Jquery 3 starter page document                                  |    HTML5, Jquery 3 (via CDN) |
| nodejs_http2 | A plain http-server in node, server most text/plain html page documents |                 nodejs, JS ) |

hotrealod.js and hotrealod.php are helper scripts when developing applications where the UI is changing quickly, and as a developer aid to more quickly show pages.

## VS Code use Emmet templates and snippets (Visual Studio Code)

if you are using Visual Studio (VS Code) code editor https://code.visualstudio.com/ , you may not need many of these templates as they are _built-in_ to VS Code using something they termed Emmet (https://code.visualstudio.com/docs/editor/emmet) which is a syntax expansion capability built in for most populat languages.

Using something like this, just start a new file save it as filename.html then using then just tye **html:5** for example and it will expand the code to :
<img align="left" width="400" src="https://github.com/acbrandao/templates/blob/master/img/emmet_vscode.png">

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body></body>
</html>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

This code is licensed under the MIT license. See https://opensource.org/licenses/MIT for details.
