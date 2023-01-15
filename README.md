# Metro App 

Overview of Metro App Architecture

## Frontend

### Development Framework

Metro App is using custom-built pipeline around React.js as development framework.

#### Local development

**Prepare your environment**

- Use `yarn install` - to install dependencies

**Development**

- Run `yarn run dev` to start dev server

**To Test production build locally**

- Run `yarn run preview` to build app

**Production**

- Run `yarn run build` to build app
- Build will be located in `dist` folder

---
## prettier
- use `yarn run pretty` to see the codebase inconsistencies
- use `yarn run pretty:fix` to let prettier automatically fix inconsistencies

## eslint
- use `yarn run lint` to see the codebase inconsistencies
- use `yarn run lint:fix` to let eslint automatically fix inconsistencies

## prettier & eslint fix
- use `yarn run fix` to let prettier & eslint automatically fix inconsistencies

## test
- use `yarn run test` to run and see results for tests

#### Development Stack

- [ReactJs](https://reactjs.org/) (JavaScript ES6+)
- Bundled with Vite. See the section about [configuration](https://vitejs.dev) for more information.
