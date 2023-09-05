"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSongScore = exports.sortSongs = void 0;
/**
 * @description Sorting rule: Playing > Pending > most scored > created time > Played or Skipped
 */
function sortSongs(songs) {
    return songs.sort((songA, songB) => {
        if (songA.status === 'PLAYING')
            return -1;
        if (songA.status === 'PLAYED' || songA.status === 'SKIPPED')
            return 1;
        const songAScore = computeSongScore(songA);
        const songBScore = computeSongScore(songB);
        const comparableScore = songAScore - songBScore;
        if (comparableScore === 0) {
            return songA.createdAt.getTime() - songB.createdAt.getTime();
        }
        return comparableScore;
    });
}
exports.sortSongs = sortSongs;
/**
 * @description Calculate song score base on up votes and down votes count
 */
function computeSongScore(song) {
    return song.upVoteUserIds.length - song.downVoteUserIds.length;
}
exports.computeSongScore = computeSongScore;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1zb25ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zb3J0LXNvbmdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQU9BOztHQUVHO0FBQ0gsU0FBZ0IsU0FBUyxDQUFpQixLQUFVO0lBQ2xELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUNqQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssU0FBUztZQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLFNBQVM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RSxNQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLFVBQVUsR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxNQUFNLGVBQWUsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ2hELElBQUksZUFBZSxLQUFLLENBQUMsRUFBRTtZQUN6QixPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM5RDtRQUNELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQVpELDhCQVlDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQixnQkFBZ0IsQ0FBaUIsSUFBTztJQUN0RCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDO0FBQ2pFLENBQUM7QUFGRCw0Q0FFQyJ9