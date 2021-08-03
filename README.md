# aa-challenge

AA technical challenge. Full stack.

## Solution

### Build and run yourself

Requires:

- docker
- docker-compose
- yarn / npm

If using npm rather than yarn, replace all references to "yarn" below to "npm"

First, copy the ".env.example" file in "./classification.service" folder and rename to ".env".
Do the same for the env example file in "./frontend" folder.

```
git clone https://github.com/russellc92/tech-challengeRuss/
cd tech-challengeRuss
cd ./classification.service/
cp ./.env.example ./.env
cd ../frontend
cp ./.env.example ./.env
```

(Docker) Perform the following:

```
docker-compose up
```

To run on host without docker (mac/linux only): (instructions here are to run both apps in dev mode to be able to access the API docs)

```
git clone https://github.com/russellc92/tech-challengeRuss/
cd tech-challengeRuss

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
cd ./classification.service
yarn docker:test
```

Via Service (locally):

```
    cd ./frontend/ && yarn test   <-- These tests will fail currently
    cd ../classification.service/ && yarn test
```

You can also view the test results via the CI:
https://github.com/russellc92/tech-challengeRuss/runs/3226104133?check_suite_focus=true

### API

The classification service API docs can be accessed at http://localhost:3001/v1/docs
(when service is started in dev mode - docs disabled when prod)

List of available routes:

**WordList routes**:\
`GET /v1/wordlists` - get word lists and classification colors

**WordList routes**:\
`POST /v1/classify` - classify a sentence (optional: case sensitive)

```json
{
    "sentence": string,
    "caseSensitive": optional<bool>
}
```

### Design choices

#### POST request for classification request (instead of GET)

Considering that a request for classification requires the sentence parameter, I went with POST here as the sentence could be quite large and contain special characters that could interfere within the URL (via sentence query parameter) and result in a malformed request. POST json body encaptulation added some assurance here that the user provided sentence would (to a degree) prevent this.

### Future Improvements

Frontend:

- Much more unit testing
- Input sanitization
- Make it look "prettier"

Backend:

- Further unit tests
- Integrate request Validation (via JOI)
- User AuthNZ (OAuth 2)
- User request logging

### Transparency and Attribution

The majority of the boilerplate code for the back end service "classification.service" was generated via the open source repository created by Hagop Jamkojian, available at [this repository](https://github.com/hagopj13/node-express-boilerplate). Applicable licenses available in ./classification-service/licenses/

This includes setting sensible defaults for a nodejs express production application - with modifications made to fit the purpose of this challenge.

The business logic code created to fulfill the requirements of the technical challenge was written entirely by myself and incorporated into this nodejs express.

Justification:

```
Whilst I could write an entire node express app from scratch, I deemed it appropiate to use an open source template which achieves the same (and more considering the time frame)
```
