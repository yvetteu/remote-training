![alt text](http://azrvisuals.com/images/readme-mainart.jpg "Responsive Template")

#### This is a great starting point for any responsive website project.

###### It features the following:

* A built-in, off-canvas, sliding menu. Includes a dark screen over the background content, plus the ability to close the slideout menu via button, or clicking outside the menu area. (that last part is hard to find in other templates)
* A simple way to template reusable content. Back when PHP was more popular (other than Wordrpess), I loved using those Server Side Includes as an easy way to put a menu on evey page, but only edit it in one place. This Nunjucks solution is easiest non-PHP solution I've found.
* Sass is built in — I decided to use .scss files.
* While not perfect, I'm using BrowserSync to auto-update my local website environment each time I hit Save.

## Gulp rocks

This project uses [Nunjucks](http://mozilla.github.io/nunjucks/),[SASS](http://sass-lang.com/) and [Gulp](http://gulpjs.com/). Browsersync watches all Nunjucks templates, SASS and JS and live reloads in browser on change. At the moment, BrtowserSync does not autoupdate partials. But a quick save command TWICE will always update that partial in your browser.

Gulp tasks used:

* sass
* autoprefixer
* sassdoc
* browserSync
* nunjucksRender
* script concat
* imagemin
* pngquant

## Setup

1. Install [Gulp](http://gulpjs.com/) and [NPM](http://nodejs.org) if you do not already have them.

2. Install npm dependencies

```
npm install
```

3. Run Gulp

```
gulp
```

# Let's use VS Code!

## VS Code setup and tips

Let's make it launchable from Terminal.

1. Command + Shift + P for control palette
2. Type `shell command`
3. Click on Install 'code' command in PATH
4. Go to Terminal, cd to a folder, and do a `code .`

### Extensions

See image below. The **Atom Dark Theme** and **Material Icon Theme** are optional extentions, but you'll need the other three.

![alt text](http://azrvisuals.com/images/extensions.png "Extensions you'll need to use")

### Set your theme

You certainly don't have to use Atom One Dark Theme, like me. Find something you like! To set your theme, go to `Code/Preferences/Color Theme`. VS Code has a few in there by default. If you want something different, search for te etheme extension.

### Set your keybindings

1. Type `command + k` then `command + s`. That should bring up keyboard shortcuts.
2. Click on `keybindings.json` near the top of the screen.
3. Paste the following into the keybindings.json edit window:

```
// Place your key bindings in this file to overwrite the defaults
[
    {
        "key": "ctrl+1",
        "command": "workbench.action.focusFirstEditorGroup"
    },
    {
        "key": "ctrl+2",
        "command": "workbench.action.focusSecondEditorGroup"
    },
    {
        "key": "ctrl+3",
        "command": "workbench.action.focusThirdEditorGroup"
    },
    {
        "key": "cmd+1",
        "command": "workbench.action.openEditorAtIndex1"
    },
    {
        "key": "cmd+2",
        "command": "workbench.action.openEditorAtIndex2"
    },
    {
        "key": "cmd+3",
        "command": "workbench.action.openEditorAtIndex3"
    },
    {
        "key": "cmd+4",
        "command": "workbench.action.openEditorAtIndex4"
    },
    {
        "key": "cmd+5",
        "command": "workbench.action.openEditorAtIndex5"
    },
    {
        "key": "cmd+6",
        "command": "workbench.action.openEditorAtIndex6"
    },
    {
        "key": "cmd+7",
        "command": "workbench.action.openEditorAtIndex7"
    },
    {
        "key": "cmd+8",
        "command": "workbench.action.openEditorAtIndex8"
    },
    {
        "key": "cmd+9",
        "command": "workbench.action.openEditorAtIndex9"
    },
    {
        "key": "ctrl+shift+enter",
        "command": "editor.emmet.action.wrapWithAbbreviation",
        "when": "editorTextFocus && !editorReadonly"
    }
]
```

### Keyboard shortcuts

1. **Built-in Emmet styles:** Create a div with a class of wrapper by simply typing `div.wrapper` then `enter`. Want an ID? `div#id` then `enter`. This also works with other elements.
2. **Quickly go to a tab:** By using `command + 1`, `command + 2` etc, you can navigate your tabs. Works on 1-9.
3. **Wrap code with an element:** Realize you need to wrap those 50 lines of code with a div? Just highlight the code, then hit `ctrl+shift+enter` and type out the tag name, `div`. This also works with Emmet styling (div.wrapper).
4. **Quick terminal:** `ctrl+ \`` will show/hide your terminal. Also brings up a handy "problems" tab.
5. **Show/hide sidebar:** `command + b`
6. **Quickly open a file:** Type `command + p` then start typing the filename in the command palette.
7. **View all keyboard shortcuts:** Similar to #6, but this shortcut provides access to ALL commands. So by hitting `command + shift + p`, and then what you're wanting to do? You'll see the keyboard shortcut off to the right.

### Set your user settings

You might have others listed here for your personal setup (like a specific font size you like). Anyway, you'll find this under `Code/Preferences/Settings`. You should then see user settings off to the right.

```
{
    "gitlens.advanced.messages": {
        "suppressCommitHasNoPreviousCommitWarning": false,
        "suppressCommitNotFoundWarning": false,
        "suppressFileNotUnderSourceControlWarning": false,
        "suppressGitVersionWarning": false,
        "suppressLineUncommittedWarning": false,
        "suppressNoRepositoryWarning": false,
        "suppressResultsExplorerNotice": false,
        "suppressUpdateNotice": false,
        "suppressWelcomeNotice": true
    },
    "editor.formatOnSave": true,
    "csscomb.preset": "~/.vscode/.csscomb.json",
    "csscomb.formatOnSave": true
}
```

### How to alphabetize your CSS properties

1. Install the extension CSScomb.
2. In Finder, open your .vscode folder. Your can find that folder by searching for this in Spotlight `~/.vscode/`
3. Next, drag a COPY of the .csscomb.json file (found in our project's root) into the root of that .vscode folder
4. Directions: https://taylorbryant.blog/keep-your-css-cool-with-csscomb/

## Problems? Things not updating?

1. Try saving again.
2. Check your terminal for errors.

## All done?

The `dist` folder contains your final website.
