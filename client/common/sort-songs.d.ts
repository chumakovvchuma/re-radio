export interface Song {
    readonly createdAt: Date;
    readonly status: 'PENDING' | 'PLAYING' | 'PLAYED' | 'SKIPPED';
    readonly upVoteUserIds: ReadonlyArray<number>;
    readonly downVoteUserIds: ReadonlyArray<number>;
}
/**
 * @description Sorting rule: Playing > Pending > most scored > created time > Played or Skipped
 */
export declare function sortSongs<T extends Song>(songs: T[]): T[];
/**
 * @description Calculate song score base on up votes and down votes count
 */
export declare function computeSongScore<T extends Song>(song: T): number;
