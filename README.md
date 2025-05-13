# Race Manager
A discord bot to move players between voice channels in a discord server using a REST API.

## Routes
| Route                       | Methods   | Description                                                            |
| --------------------------- | --------- | ---------------------------------------------------------------------- |
| `/simulator`                | GET, POST | Liste ou crée des simulateurs                                          |
| `/simulator/:simulatorId`   | DELETE    | Supprime un simulateur spécifique                                      |
| `/simulator/voice/move`     | PATCH     | Déplace un simulator vocal dans un vocal via l'id du channel           |
| `/simulator/voice/moveBulk` | PATCH     | Déplace plusieurs simulateurs vocaux dans un vocal via l'id du channel |

## Exemple de requête
### Move plusieurs simulateur dans un channel vocal
```bash
curl --location --request PATCH 'http://localhost:3000/simulator/voice/moveBulk' \
--header 'Content-Type: application/json' \
--data '{
	"simulatorIds": [5, 4, 3, 2],
	"newVoiceChannelId": "1370800072027275275"
}'
```

## Project setup

Don't forget to rename the `.env.example` file to `.env` and fill in the required values.

```bash
$ pnpm install
```

## Compile and run the project

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Deployment using Docker

```
docker compose up -d
```
