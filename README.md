# aa-challenge

AA technical challenge. Full stack.

## Solution

To view a live demo of the application visit here:
https://main.dmyj9p1z8l1pg.amplifyapp.com/

### Build and run yourself

Requires:

- docker
- docker-compose
- yarn / npm

If using npm rather than yarn, replace all references to "yarn" below to "npm"

First, copy the ".env.example" file in "./classification.service" folder and rename to ".env".
Do the same for the env example file in "./frontend" folder.

(Docker) Perform the following:

```
git clone https://github.com/russellc92/tech-challengeRuss/
docker-compose

```

To run on host without docker (mac/linux only): (instructions here are to run both apps in dev mode to access docs)

```
git clone [this repo]
cd [this repo name]

cd ./classification.service/
cp ./.env.example ./.env
yarn install
yarn dev

cd ../frontend
cp ./.env.example ./.env
yarn install
yarn start

```

### Testing

(from root directory)

Via Docker:

```
docker. ......
```

Via Service:

```
    cd ./frontend/ && yarn test
    cd ../classification.service/ && yarn test
```

### API

The classification service API docs can be accessed at http://localhost:3001/v1/docs
(when service is started in dev mode - docs disabled when prod)

### Design choices

#### Classification algo

### Transparency and Attribution

The majority of the boilerplate code for the back end service "classification.service" was generated via the open source repository created by Hagop Jamkojian, available at [this repository](https://github.com/hagopj13/node-express-boilerplate). Applicable licenses available in ./classification-service/licenses/

This includes setting sensible defaults for a nodejs express production application - with modifications made to fit the purpose of this challenge.

The business logic code created to fulfill the requirements of the technical challenge was written entirely by myself and incorporated into this nodejs express.

Justification:

```
Whilst I could write an entire node express app from scratch, I deemed it appropiate to use an open source template which achieves the same (and more considering the time frame)
```

### asd
