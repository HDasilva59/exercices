import { Game } from "./types";

export function filterGameByPlatform(games: Game[], platform: string): Game[] {
  const filteredGames = games.filter(game => game.platform === platform );
  return filteredGames
}
