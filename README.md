# OkBeamer

**OkBeamer** is a tool made to remove transitions from PDFs created with Beamer
or any other software. Doing this will not only create a smaller file, but an
actually printable one.

## How does it work?

OkBeamer is pretty easy to use:

1. Upload the pdf file with the transitions (duh)
2. Select which part of the document indicates a change. This is usually either the page number or the slide's title.
3. You are all set, it will create a clean presentation!

### Here's a gif showing it in action (click it for the mp4 version):

[![demonstration](demo.gif)](demo.mp4)

## Future Improvements

While the app already kicks ass, it does have a few flaws:

 - [ ] The rectangle drawing in the canvas can be pretty buggy at times.
 - [ ] Add the option to set the *changing section* in a slide that's not the first one (since sometimes it doesn't have a page number)
 - [ ] Idk there's always room for improvement :)

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After cloning do the following commands:

```bash
yarn add
yarn start
```

And you are all set 😀, a development server should start in `http://localhost:3000`.

## Contributing

Pull requests are welcome, just make sure to open an issue first if you can.

## License

[MIT](https://choosealicense.com/licenses/mit/)