# Assignment API

Assignment API project 

# Requirements

- Node.js (v15.5.0)
- NPM (v6.13.4)

# Installation and Setup

# Build and Run

- Need to transpile TS codes with `npm run build`. For development, `npm run build:watch` is useful, the command will build codes immediately if codes are changed.
- Server can be started `npm run start`. For development, `npm run dev:watch` is useful, this command will use nodemon, so then restart the node server for any changes.
- Default starting host port is `localhost:8001`

# Tests and Lint

- Tests and coverage reports are provided by Jest. They can be started by issuing `npm run test`
- Linting checks are done using tslint using a [Airbnb rule set](https://www.npmjs.com/package/tslint-config-airbnb). The lint check can be started by issuing `npm run lint`

# Tips

## Recommended Setup (macOS/Linux)

- Use package manager Homebrew on macOS
- Use [Zsh](https://ohmyz.sh) as shell and [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) to make it better
- Use LTS version of Node as recommended

## Mac Users

### Unable to find NPM binary

If you are unable locate `npm` after installing node using Homebrew, please verify your `$PATH`. You may need to append node/bin folder `$PATH` via `.bashrc` or `.zshrc` depends on your shell configuration.

Example for Node 12 installation `brew install node@12`. The path may vary based on your node configuration.

```bash
export PATH="/usr/local/opt/node@12/bin:$PATH"
```
