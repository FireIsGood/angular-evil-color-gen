# Angular Evil Color Gen

Evil version of the `ng generate @angular/material:theme-color` command since it wasn't working for me.

This is my cursed version so you are expected to know how to modify the file yourself.

For the actual version, check out the [original page](https://github.com/angular/components/tree/main/src/material/schematics/ng-generate/theme-color)

Changes made if you wanted to use the original:

- Changed the output to just node's file write
- Disabled typography (we only care about colors)
- Added the `container-low` style (how did they forget this one?)

## Usage

Modify the `index.ts` variables and then run the `dev` script.

```bash
npm run dev
```

Output CSS files are placed in `output/`.

I was too lazy to think about making them rename if you wrote over the same scheme so it just overwrites.

## Contributing

Why?

## License

MIT License, but like, it's owned by Google.
